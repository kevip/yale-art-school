import { TNavMenuItem } from '../types/nav-menu-item.type';

export const NAV_MENU_ITEMS: TNavMenuItem[] = [
  {
    name: 'School',
    path: '/',
    children: [
      { name: 'School', path: '/' },
      { name: 'Community', path: '/' },
      { name: 'Bulleting', path: '/' },
      { name: 'Publications', path: '/' },
      { name: 'Events', path: '/' },
      { name: 'Graduate area', path: '/' },
      { name: 'Undergraduate area', path: '/' },
    ]
  },
  {
    name: 'About',
    path: '/',
    children: [
      { name: 'People', path: '/' },
      { name: 'Facilities', path: '/' },
      { name: 'Study areas', path: '/' },
    ]
  },
  {
    name: 'Courses',
    path: '/',
    children: [
      { name: 'Graph Design', path: '/' },
      { name: 'Painting/Printmaking', path: '/' },
      { name: 'Photography', path: '/' },
      { name: 'Sculpture', path: '/' },
      { name: 'Filmmaking/Video/Interdisciplinary', path: '/' },
      { name: 'Seminars', path: '/' },
    ]
  },
  { name: 'Apply', path: '/admision' },
];
