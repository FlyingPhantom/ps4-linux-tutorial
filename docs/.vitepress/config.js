import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PS4 Linux Tutorial",
  description: "A simple and modern guide on how to install Linux on PS4 systems.",
  base: "/ps4-linux-tutorial/",

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/ps4-linux-tutorial/favicon.png', sizes: '32x32' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'description', content: 'A step-by-step guide for running Linux on PS4' }],
    ['meta', { property: 'og:title', content: 'PS4 Linux Tutorial' }],
    ['meta', { property: 'og:description', content: 'Learn how to run Linux on your PlayStation 4 with this modern and simple guide. We will go over how to setup, download kernel and distro, install, boot, customize and optimize your installation to your liking, and also fix any issues that may occur.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://flyingphantom.github.io/ps4-linux-tutorial/' }],
    ['meta', { property: 'og:image', content: 'https://flyingphantom.github.io/ps4-linux-tutorial/preview.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'PS4 Linux Tutorial' }],
    ['meta', { name: 'twitter:description', content: 'Step-by-step guide for running Linux on PS4.' }],
    ['meta', { name: 'twitter:image', content: 'https://flyingphantom.github.io/ps4-linux-tutorial/preview.png' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/information' },
      {
        text: 'Issues',
        items: [
          { text: 'General issues', link: '/issues' },
        ]
      },
      {
        text: 'More stuff',
        items: [
          { text: 'Post-install', link: '/postinstall' },
          { text: 'Distro DIY', link: '/distrodiy' },
        ]
      },
    ],

    sidebar: [
      {
        text: '📖 The Installation Guide',
        collapsed: false,
        items: [
          { text: 'Key Information', link: '/information' },
          { text: 'Revisions and Southbridges', link: '/revisions' },
          { text: 'Setup', link: '/setup' },
          { text: 'Files', link: '/files' },
	  { text: 'Baikal', link: '/baikal'},
          {
            text: '💿 Choose your Install',
            collapsed: true,
            items: [
              { text: 'Installation Methods', link: '/installation' },
              { text: 'Internal Installation', link: '/internal-installation' },
              { text: 'External Installation', link: '/external-installation-alternative' },
            ],
          },
          { text: 'Ending', link: '/ending' },
        ]
      },
      {
        text: '💜 Post Installation',
        collapsed: false,
        items: [
          { text: 'Post install setup', link: '/postinstall' },
          { text: 'Distro DIY', link: '/distrodiy' },
          { text: 'Game testing', link: '/game-testing' },
        ]
      },
      {
        text: '💔 Common issues',
        collapsed: false,
        items: [
          { text: 'Common issues', link: '/issues' },
        ]
      },
      {
        text: '☠️ Legacy Content',
        collapsed: true,
        items: [
          { text: 'Legacy and preservation', link: '/legacy' },
        ]
      },
      {
        text: '🔧 Compile your own kernel',
        collapsed: true,
        items: [
          { text: 'Compile your own kernel', link: '/kernel' }
        ]
      },
      {
        text: '🚀 Performance',
        collapsed: true,
        items: [
          { text: 'Performance tweaks & optimization', link: '/performance' },
          { text: 'Hyprland', link: '/hyprland'},
   	  { text: 'Sway', link: '/sway'},
	  { text: 'Niri', link: '/niri'}
        ]
      },
      {
        text: '💻 Mesa',
        collapsed: true,
        items: [
          { text: 'Mesa drivers & tweaks', link: '/mesa' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FlyingPhantom/ps4-linux-tutorial/' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/FlyingPhantom/ps4-linux-tutorial/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025 <a href="https://github.com/FlyingPhantom">Yes</a>.'
    },

    lastUpdated: {
      text: 'Updated on',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full'
      }
    },
  }
})
