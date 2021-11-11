import useTranslation from 'next-translate/useTranslation'

import css from './no-collectibles-content.module.css'

import Button from '@/components/button'
import CollectiblePlaceholder from '@/components/collectibles/collectible-placeholder'
import Heading from '@/components/heading'
import { urls } from '@/utils/urls'

export interface NoCollectiblesContentProps {
  text?: string
}

export default function NoCollectiblesContent({
  text,
}: NoCollectiblesContentProps) {
  const { t } = useTranslation()
  const message = text ?? t('collection:viewer.startCollection')

  return (
    <div className={css.root}>
      <div className={css.gridContainer}>
        <CollectiblePlaceholder />
        <CollectiblePlaceholder />
        <CollectiblePlaceholder />
        <Heading className={css.heading} level={3}>
          {message}
        </Heading>
      </div>
      <Button href={urls.releases}>
        {t('collection:viewer.Browse our latest drops')}
      </Button>
    </div>
  )
}
