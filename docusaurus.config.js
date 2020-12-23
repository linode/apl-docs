const redirects = require('./redirects')

// const versions = require('./versions.json')

// // This probably only makes sense for the alpha phase, temporary
// function getNextVersionName() {
//   const lastReleasedVersion = versions.sort().reverse()[0]
//   return `v${lastReleasedVersion}`
// }

// const allDocHomesPaths = [
//   '/docs/',
//   '/docs/next/',
//   ...versions.slice(1).map((version) => `/docs/${version}/`),
// ]

const isBootstrapPreset = process.env.DOCUSAURUS_PRESET === 'bootstrap'

module.exports = {
  title: 'Otomi',
  tagline: 'Otomi is like OSX for Kubernetes',
  url: 'https://otomi.io/',
  baseUrl: '/',
  favicon: 'img/otomi.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  organizationName: 'redkubes', // Usually your GitHub org/user name.
  projectName: 'redkubes', // Usually your repo name.
  plugins: [],
  themeConfig: {
    sidebarCollapsible: true,
    announcementBar: {},
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    // algolia: {
    //   apiKey: '9c75393c761f1434854cef114eb80e64',
    //   indexName: 'redkubes_otomi',
    // },
    gtag: {
      trackingID: 'G-KKV4ZVDEKQ',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    navbar: {
      logo: {
        alt: 'Site Logo',
        src: 'img/otomi-logo.svg',
        href: '/', // Default to `siteConfig.baseUrl`.
        target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          to: '/',
          label: 'About',
          position: 'left',
        },
        {
          to: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/',
          label: 'Otomi Console',
          position: 'left',
        },
        {
          to: '/',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: '/',
          label: 'Community',
          position: 'left',
        },
        {
          to: '/',
          label: 'Blog',
          position: 'left',
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
              to: '/',
            },
            {
              label: 'Community Edition',
              to: '/',
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
              href: 'https://github.com/redkubes/redkubes/issues',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/redkubes/community',
            },
            {
              label: 'Help',
              to: '/',
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
        src: 'img/otomi-logo-small.svg',
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
          editUrl: 'https://github.com/redkubes/redkubes/tree/master/',
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
