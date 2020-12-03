// const versions = require('./versions.json')

// // This probably only makes sense for the alpha phase, temporary
// function getNextVersionName() {
//   const lastReleasedVersion = versions.sort().reverse()[0]
//   return `v${lastReleasedVersion}`
// }

// const allDocHomesPaths = [
//   '/otomi/docs/',
//   '/otomi/docs/next/',
//   ...versions.slice(1).map((version) => `/otomi/docs/${version}/`),
// ]

const isBootstrapPreset = process.env.DOCUSAURUS_PRESET === 'bootstrap'

const isVersioningDisabled = true

module.exports = {
  title: 'Otomi Documentation',
  tagline: 'Online documentation for Otomi Container Platform',
  url: 'https://redkubes.github.io/',
  baseUrl: '/',
  favicon: 'img/otomi.ico',
  onBrokenLinks: isVersioningDisabled ? 'warn' : 'throw',
  organizationName: 'redkubes', // Usually your GitHub org/user name.
  projectName: 'otomi', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        editUrl: 'https://github.com/redkubes/otomi/edit/master/',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebar-about.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        editUrl: 'https://github.com/redkubes/otomi/edit/master/',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebar-community.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  themeConfig: {
    sidebarCollapsible: true,
    announcementBar: {
      id: 'supportus',
      content:
        'If you like Otomi, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/redkubes/otomi-core">GitHub</a>!',
      // backgroundColor: '#a11900',
      // textColor: '#ffd700',
      backgroundColor: '#0d47a1',
      textColor: '#ffd700',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      apiKey: '9c75393c761f1434854cef114eb80e64',
      indexName: 'redkubes_otomi',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    gtag: {
      trackingID: 'G-L2BWYL31EZ',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    navbar: {
      logo: {
        alt: 'Site Logo',
        src: 'img/otomi_logo.svg',
        href: '/', // Default to `siteConfig.baseUrl`.
        target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          to: 'about/intro',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/installation',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/console',
          label: 'Otomi Console',
          position: 'left',
        },
        {
          to: 'docs/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'community/support',
          label: 'Community',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/redkubes/otomi-core',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Otomi',
          items: [
            {
              label: 'Introduction',
              to: '/about/intro',
            },
            {
              label: 'Community Edition',
              to: '/docs/console',
            },
            {
              label: 'Product sheet',
              href: 'https://redkubes.com/otomi-container-platform-product-sheet/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Feedback',
              href: 'https://github.com/redkubes/otomi/issues',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/redkubes/community',
            },
            {
              label: 'Help',
              to: '/community/support',
            },
          ],
        },
        {
          title: 'Red Kubes',
          items: [
            {
              label: 'Website',
              href: 'https://redkubes.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/redkubes/',
            },
            {
              label: 'LinkedIN',
              href: 'https://www.linkedin.com/company/red-kubes/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Otomi Open Source Logo',
        src: 'img/otomi_logo_small.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Red Kubes. Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>`,
    },
  },
  presets: [
    [
      isBootstrapPreset ? '@docusaurus/preset-bootstrap' : '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar-docs.js'),
          editUrl: 'https://github.com/redkubes/otomi/tree/master/',
          // versions: {
          //   current: {
          //     label: `${getNextVersionName()} (unreleased)`,
          //   },
          // },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
