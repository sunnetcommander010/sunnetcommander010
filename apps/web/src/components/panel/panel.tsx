import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import Heading from '../heading'

import css from './panel.module.css'

export interface PanelProps {
  title?: string
}

const Panel = ({
  children,
  className,
  title,
  ...props
}: PanelProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={clsx(css.panel, className)} {...props}>
      {title && (
        <Heading bold level={2}>
          {title}
        </Heading>
      )}
      <div className={css.content}>{children}</div>
    </div>
  )
}

export default Panel
