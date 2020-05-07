module.exports = {
  title: 'Otomi Documentation',
  tagline: '',
  url: 'https://redkubes.github.io/',
  baseUrl: '/otomi/',
  favicon: 'img/otomi-stack.ico',
  organizationName: 'redkubes', // Usually your GitHub org/user name.
  projectName: 'otomi', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      links: [
        {
          to: 'docs/about-otomi',
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
          to: '/docApi',
          label: 'API',
          position: 'left',
        },
        {
          to: 'docs/administration-overview',
          label: 'Administration',
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
