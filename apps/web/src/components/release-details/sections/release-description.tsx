import Markdown from 'markdown-to-jsx'

import css from './release-description.module.css'

export interface ReleaseDescriptionProps {
  description: string
}

export default function ReleaseDescription({
  description,
}: ReleaseDescriptionProps) {
  return (
    <div className={css.root}>
      <div className={css.collapseContainer}>
        <Markdown options={{ forceBlock: true }}>{description}</Markdown>
      </div>
    </div>
  )
}
