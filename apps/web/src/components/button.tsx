import clsx from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ButtonProps {
  disablePadding?: boolean
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary' | 'link'
  fullWidth?: boolean
  href?: string
}

export default function Button({
  children,
  className,
  disabled = false,
  disablePadding = false,
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
        'duration-150 transition uppercase font-medium',
        {
          'bg-base-red border-none text-white hover:bg-opacity-90':
            !disabled && variant === 'primary',
          'bg-transparent border-1 text-white': variant === 'secondary',
          'bg-transparent border-none text-white float-left mb-5':
            variant === 'link',
          'font-bold text-lg': size === 'medium',
          'px-10 py-4': size === 'medium' && !disablePadding,
          'px-6 py-2': size === 'small' && !disablePadding,
          'bg-base-gray-medium cursor-not-allowed text-base-gray-light opacity-50 focus:ring-secondary':
            disabled,
          'block w-full': fullWidth,
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
