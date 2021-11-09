import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export interface HeadTagProps {
  pageDescription?: string
  pageTitle?: string
}

export default function HeadTag({ pageDescription, pageTitle }: HeadTagProps) {
  const { t } = useTranslation()

  return (
    <Head>
      <title>
        {pageTitle
          ? `${pageTitle} - ${t('common:global.pageTitle')}`
          : t('common:global.pageTitle')}
      </title>
      <meta
        name="description"
        content={pageDescription ?? t('common:global.pageDescription')}
      />
      <link rel="icon" href="/favicon-180.png" />
      <link rel="apple-touch-icon" href="/favicon-180.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preload fonts */}
      <link as="font" href="/fonts/Larsseit/Larsseit.ttf" rel="preload" />
      <link
        as="font"
        href="/fonts/Larsseit/Larsseit-Medium.ttf"
        rel="preload"
      />
      <link as="font" href="/fonts/Larsseit/Larsseit-Bold.ttf" rel="preload" />
      <link
        as="font"
        href="/fonts/Larsseit/Larsseit-ExtraBold.ttf"
        rel="preload"
      />
    </Head>
  )
}
