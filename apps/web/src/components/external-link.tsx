import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export type ExternalLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export default function ExternalLink({ children, ...rest }: ExternalLinkProps) {
  return (
    <a rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}
