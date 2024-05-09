interface NavLink {
  href: string;
  key: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '', key: 'CHANGE LANGUAGE', label: 'PT'},
  { href: '/contact', key: 'ABOUT', label: 'ABOUT'},
  { href: '/contact', key: 'CONTACT', label: 'CONTACT'}
]
