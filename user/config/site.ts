import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/cover.webp';

export const siteConfig: Site.Config = {
  url: 'https://blog.racca.me',
  title: "Seba's Blog",
  subtitle: "Sebastiano Racca's personal blog. Discover new ways of thinking, new technologies and much more.",
  description: "Sebastiano Racca's personal blog. Discover new ways of thinking, new technologies and much more",
  lang: 'en',
  timeZone: 'Europe/Rome',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'Sebastiano Racca',
    status: '☕️',
    statusTip:
      'Support me with a <a href="https://www.buymeacoffee.com/sebadev" rel="external" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >Coffee</a>',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://racca.me',
    github: 'https://github.com/SebaOfficial',
    email: 'sebastiano@racca.me',
    bio: `Just a few more lines<br>Wheter it's code or blog`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/SebaOfficial'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'sebaofficial/blog',
  repoId: 'R_kgDOKsJ_Bg',
  category: 'Announcements',
  categoryId: 'DIC_kwDOKsJ_Bs4Ca36L',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'About',
    url: 'https://racca.me/',
    rel: 'external',
  },
  {
    name: 'Contacts',
    url: 'https://racca.me/contacts',
    rel: 'external',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'About',
      url: 'https://racca.me/',
      rel: 'external',
    },
    {
      name: 'Contacts',
      url: 'https://racca.me/contacts',
      rel: 'external',
    },
  ],
};
