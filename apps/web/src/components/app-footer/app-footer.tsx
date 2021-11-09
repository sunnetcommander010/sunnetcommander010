import useTranslation from 'next-translate/useTranslation'

import css from './app-footer.module.css'

import ExternalLink from '@/components/external-link'
import Logo from '@/components/logo/logo'
import { getLegalNavItems, getSocialNavItems } from '@/utils/navigation'

export interface AppFooterProps {
  isBrand?: boolean // if isBrand, the nav is styled differently
}

export default function AppFooter() {
  const { t } = useTranslation()
  const socialNavItems = getSocialNavItems(t)
  const legalNavItems = getLegalNavItems(t)

  return (
    <footer>
      <section className={css.bottomNav}>
        <div className={css.bottomNavWrapper}>
          <nav
            aria-label={t('common:nav.aria.Social Media')}
            className={css.navLeft}
          >
            {socialNavItems.map(({ href, label }) => (
              <ExternalLink
                className={css.bottomNavLinks}
                key={label}
                href={href}
                target="_blank"
              >
                {label}
              </ExternalLink>
            ))}
          </nav>
          <Logo className={css.logo} />
          <nav aria-label={t('common:nav.aria.Legal')} className={css.navRight}>
            {legalNavItems.map(({ href, label }) =>
              href ? (
                <ExternalLink
                  className={css.bottomNavLinks}
                  key={label}
                  href={href}
                  target="_blank"
                >
                  {label}
                </ExternalLink>
              ) : (
                <span className={css.bottomNavLinks} key={label}>
                  {label}
                </span>
              )
            )}
          </nav>
        </div>
      </section>
    </footer>
  )
}
