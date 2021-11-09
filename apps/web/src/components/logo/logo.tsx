import clsx from 'clsx'

import css from './logo.module.css'

import AppLink from '@/components/app-link/app-link'

export interface LogoProps {
  className?: string
  linkClassName?: string
  isLinked?: boolean
}

export default function Logo({
  className,
  linkClassName,
  isLinked = true,
}: LogoProps) {
  const props = { alt: 'SPIN logo', className }
  const image = (
    <svg
      width="96"
      height="48"
      viewBox="0 0 96 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M96 0H0V48H96V0Z" fill="white" />
      <path
        d="M2.56055 2.55981H93.4389V45.4425H2.56055V2.55981ZM32.2488 6.30174V41.8534H36.7493V27.7532H42.2536C50.2309 27.7532 54.1329 22.6403 54.1329 16.66C54.1329 10.9494 50.2309 6.30174 42.2536 6.30174H32.2488ZM42.2153 10.3336C47.4878 10.3336 49.6908 12.8417 49.6908 16.66C49.6908 20.7301 47.4878 23.7213 42.2153 23.7213H36.7493V10.3336H42.2153ZM56.2189 41.8736H60.7195V6.30174H56.2189V41.8736ZM64.4865 6.30174V41.8736H68.8904V15.561L85.0925 41.8736H89.1296V6.30174H84.719V32.6525L68.6001 6.30174H64.4865ZM14.6919 24.7439C19.7506 26.4609 25.5069 26.9621 25.5069 32.3042C25.5069 36.6079 22.3969 38.6711 18.1484 38.6711C12.5226 38.6711 10.6144 33.52 9.95953 31.5917L5.90899 32.7289C7.10615 36.1 9.50947 42.5096 18.1551 42.5096C25.6486 42.5096 30.0525 38.1115 30.0525 32.1131C30.0525 26.7194 26.848 23.991 22.5792 22.6021C17.498 20.8042 11.6833 20.4019 11.6833 15.2531C11.6833 11.2775 14.8899 9.52226 18.4072 9.52226C23.7179 9.52226 25.2256 13.8822 25.7274 15.4644L29.7442 14.0373C28.817 10.9314 26.1437 5.6837 18.4072 5.6837C11.5685 5.6837 7.12641 9.87061 7.12641 15.5026C7.11965 20.8851 10.7314 23.5708 14.6919 24.7439Z"
        fill="black"
      />
    </svg>
  )

  if (!isLinked) return image
  return (
    <AppLink className={clsx(css.link, linkClassName)} href="/">
      {image}
    </AppLink>
  )
}
