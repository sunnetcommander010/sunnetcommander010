import clsx from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react'

import css from './button.module.css'

export interface ButtonProps {
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary' | 'link'
  fullWidth?: boolean
  href?: string
}

export default function Button({
  children,
  className,
  disabled = false,
  onClick,
  size = 'medium',
  fullWidth,
  variant = 'primary',
  type = 'button',
  href,
  ...props
}: ButtonProps &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement | HTMLAnchorElement
  >) {
  const Component: any = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      className={clsx(
        css.button,
        {
          [css.primary]: variant === 'primary',
          [css.secondary]: variant === 'secondary',
          [css.link]: variant === 'link',
          [css.medium]: size === 'medium',
          [css.small]: size === 'small',
          [css.disabled]: disabled,
          [css.fullWidth]: fullWidth,
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </Component>
  )
}
