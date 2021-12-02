import {
  CircleCard,
  CircleCardStatus,
  CircleCardVerification,
  CircleCreateCard,
  CircleCreatePayment,
  CirclePaymentResponse,
  CirclePaymentStatus,
  CirclePaymentVerification,
  CirclePublicKey,
  CircleResponse,
  CircleVerificationAVSFailureCode,
  CircleVerificationAVSSuccessCode,
  CircleVerificationCvvStatus,
  CircleVerificationThreeDSecureStatus,
  isCircleSuccessResponse,
  PaymentCardStatus,
  PaymentStatus,
  PublicKey,
  ToPaymentBase,
  ToPaymentCardBase,
} from '@algomart/schemas'
import got, { Got } from 'got'

import { logger } from '@/utils/logger'

export interface CircleAdapterOptions {
  url: string
  apiKey: string
}

function toPublicKeyBase(data: CirclePublicKey): PublicKey {
  return {
    keyId: data.keyId,
    publicKey: data.publicKey,
  }
}

function toCardStatus(status: CircleCardStatus): PaymentCardStatus {
  return {
    [CircleCardStatus.Complete]: PaymentCardStatus.Complete,
    [CircleCardStatus.Failed]: PaymentCardStatus.Failed,
    [CircleCardStatus.Pending]: PaymentCardStatus.Pending,
  }[status]
}

function toCardBase(response: CircleCard): ToPaymentCardBase {
  return {
    expirationMonth: response.expMonth ? `${response.expMonth}` : undefined,
    expirationYear: response.expYear ? `${response.expYear}` : undefined,
    externalId: response.id,
    network: response.network,
    lastFour: response.last4,
    status: toCardStatus(response.status),
    error: response.errorCode,
  }
}

function toPaymentStatus(status: CirclePaymentStatus): PaymentStatus {
  return {
    [CirclePaymentStatus.ActionRequired]: PaymentStatus.ActionRequired,
    [CirclePaymentStatus.Confirmed]: PaymentStatus.Confirmed,
    [CirclePaymentStatus.Failed]: PaymentStatus.Failed,
    [CirclePaymentStatus.Pending]: PaymentStatus.Pending,
    [CirclePaymentStatus.Paid]: PaymentStatus.Paid,
  }[status]
}

function toPaymentBase(response: CirclePaymentResponse): ToPaymentBase {
  return {
    externalId: response.id,
    status: toPaymentStatus(response.status),
    error: response.errorCode,
    action: response.requiredAction?.redirectUrl,
  }
}

export default class CircleAdapter {
  logger = logger.child({ context: this.constructor.name })
  http: Got

  constructor(readonly options: CircleAdapterOptions) {
    this.http = got.extend({
      prefixUrl: options.url,
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
      },
    })
  }

  async ping() {
    const response = await this.http.get('ping')
    return response.statusCode === 200
  }

  async getPublicKey(): Promise<PublicKey | null> {
    const response = await this.http
      .get('v1/encryption/public')
      .json<CircleResponse<CirclePublicKey>>()

    if (isCircleSuccessResponse(response)) {
      return toPublicKeyBase(response.data)
    }

    this.logger.error({ response }, 'Failed to get public key')
    return null
  }

  async createPaymentCard(
    request: CircleCreateCard
  ): Promise<ToPaymentCardBase | null> {
    const response = await this.http
      .post('v1/cards', {
        json: request,
      })
      .json<CircleResponse<CircleCard>>()

    if (isCircleSuccessResponse(response)) {
      return toCardBase(response.data)
    }

    this.logger.error({ response }, 'Failed to create payment card')
    return null
  }

  async createPayment(
    request: CircleCreatePayment
  ): Promise<ToPaymentBase | null> {
    const response = await this.http
      .post('v1/payments', {
        json: request,
      })
      .json<CircleResponse<CirclePaymentResponse>>()

    if (isCircleSuccessResponse(response)) {
      return toPaymentBase(response.data)
    }

    this.logger.error({ response }, 'Failed to create payment')
    return null
  }

  async getPaymentCardById(id: string): Promise<ToPaymentCardBase | null> {
    const response = await this.http
      .get(`v1/cards/${id}`)
      .json<CircleResponse<CircleCard>>()

    if (isCircleSuccessResponse(response)) {
      return toCardBase(response.data)
    }

    this.logger.error({ response }, 'Failed to get payment card')
    return null
  }

  async getPaymentById(id: string): Promise<ToPaymentBase | null> {
    const response = await this.http
      .get(`v1/payments/${id}`)
      .json<CircleResponse<CirclePaymentResponse>>()

    if (isCircleSuccessResponse(response)) {
      return toPaymentBase(response.data)
    }

    this.logger.error({ response }, 'Failed to get payment')
    return null
  }
}
