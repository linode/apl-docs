module.exports = {
  title: 'Otomi Documentation',
  tagline: '',
  url: 'https://redkubes.github.io/',
  baseUrl: '/otomi/',
  onBrokenLinks: 'throw',
  favicon: 'img/otomi.ico',
  organizationName: 'redkubes', // Usually your GitHub org/user name.
  projectName: 'otomi', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      logo: {
        alt: 'Site Logo',
        src: 'img/otomi_logo.svg',
        href: '/', // Default to `siteConfig.baseUrl`.
        target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          to: 'docs/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/installation',
          label: 'Installation',
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
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Red Kubes Site',
              to: 'https://www.redkubes.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Red Kubes. Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/redkubes/otomi/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
