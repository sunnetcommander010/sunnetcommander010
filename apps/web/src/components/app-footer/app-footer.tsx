import useTranslation from 'next-translate/useTranslation'

import css from './app-footer.module.css'

import Logo from '@/components/logo/logo'

export interface AppFooterProps {
  isBrand?: boolean // if isBrand, the nav is styled differently
}

export default function AppFooter() {
  const { t } = useTranslation()

  return (
    <footer>
      <section className={css.bottomNav}>
        <div className={css.bottomNavWrapper}>
          <nav
            aria-label={t('common:nav.aria.Social Media')}
            className={css.navLeft}
          >
            <span className={css.bottomNavLinks}></span>
          </nav>
          <Logo className={css.logo} />
          <nav aria-label={t('common:nav.aria.Legal')} className={css.navRight}>
            <span className={css.bottomNavLinks}>Copyright © 2021 SPIN.</span>
          </nav>
        </div>
      </section>
    </footer>
  )
}
