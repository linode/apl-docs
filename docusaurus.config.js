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
  url: 'https://otomi.io',
  baseUrl: '/',
  customFields: {
    description:
      'Turn Kubernetes into a full container platform in minutes. Our OSX like experience offers preconfigured industry proven applications, and gives teams self-service deployment for containerized workloads.',
  },
  favicon: 'img/otomi.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  organizationName: 'redkubes', // Usually your GitHub org/user name.
  projectName: 'redkubes', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: redirects.concat(redirects.map((r) => ({ from: `/otomi${r.from}`, to: r.to }))),
        createRedirects: function (existingPath) {
          return [`/otomi${existingPath}`]
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        editUrl: 'https://github.com/redkubes/redkubes/edit/master/',
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
        editUrl: 'https://github.com/redkubes/redkubes/edit/master/',
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
    image: 'img/otomi-logo.svg',
    algolia: {
      apiKey: '9c75393c761f1434854cef114eb80e64',
      indexName: `redkubes_otomi`,

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
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
          to: 'about/',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/installation/',
          label: 'Docs',
          position: 'left',
        },
        //{
        //  to: 'docs/console/',
        //  label: 'Otomi Console',
        //  position: 'left',
        //},
        {
          to: 'docs/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'community/get-involved',
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
              to: '/about/',
            },
            {
              label: 'Community Edition',
              to: '/docs/ce/',
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
              label: 'Get Involved',
              to: '/community/get-involved',
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
              label: 'LinkedIn',
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
