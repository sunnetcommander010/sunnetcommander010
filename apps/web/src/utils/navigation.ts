import { Translate } from 'next-translate'

import { urls } from './urls'

export const getMainNavItems = (t: Translate) => [
  { href: urls.releases, label: t('common:nav.main.Releases') },
  { href: urls.myCollectibles, label: t('common:nav.main.My Collection') },
]

export const getSocialNavItems = (t: Translate) => [
  {
    href: 'https://www.instagram.com/spinmag',
    label: t('common:nav.social.Instagram'),
  },
  {
    href: 'https://www.facebook.com/SPIN',
    label: t('common:nav.social.Facebook'),
  },
  { href: 'https://twitter.com/SPIN', label: t('common:nav.social.Twitter') },
  {
    href: 'https://www.youtube.com/user/spin',
    label: t('common:nav.social.YouTube'),
  },
  {
    href: 'https://www.twitch.tv/spinmag',
    label: t('common:nav.social.Twitch'),
  },
]

export const getLegalNavItems = (t: Translate) => [
  // { href: '#', label: t('common:nav.legal.Terms Of Service') },
  { href: '', label: t('common:nav.legal.copyright') },
]
