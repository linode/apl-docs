module.exports = {
  title: 'Otomi Stack Documentation',
  tagline: 'Documentation for Otomi Stack',
  url: 'https://redkubes.github.io/otomi/',
  baseUrl: '/otomi/',
  favicon: 'img/favicon.ico',
  organizationName: 'redkubes', // Usually your GitHub org/user name.
  projectName: 'otomi', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      links: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs',
          label: 'Overview',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Red Kubes',
              to: 'https://www.redkubes.com',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/redkubes/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Red Kubes. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
