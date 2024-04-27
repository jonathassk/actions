import {string} from "prop-types";

interface NavLink {
  href: string;
  key: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '', key: 'change language', label: 'PT'},
  { href: '/contact', key: 'about', label: 'about us'},
  { href: '/contact', key: 'contact', label: 'contact us'}
]
