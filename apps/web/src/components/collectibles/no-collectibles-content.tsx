import useTranslation from 'next-translate/useTranslation'

import css from './no-collectibles-content.module.css'

import Button from '@/components/button'
import CollectiblePlaceholder from '@/components/collectibles/collectible-placeholder'
import Heading from '@/components/heading'

export interface NoCollectiblesContentProps {
  handleRedirect(): void
}

export default function NoCollectiblesContent({
  handleRedirect,
}: NoCollectiblesContentProps) {
  const { t } = useTranslation()
  return (
    <div className={css.root}>
      <div className={css.gridContainer}>
        <CollectiblePlaceholder />
        <CollectiblePlaceholder />
        <CollectiblePlaceholder />
        <Heading className={css.heading} level={3}>
          {t('collection:viewer.startCollection')}
        </Heading>
      </div>
      <Button onClick={handleRedirect}>
        {t('collection:viewer.Browse our latest drops')}
      </Button>
    </div>
  )
}
