const redirects = require("./redirects");

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

const isBootstrapPreset = process.env.DOCUSAURUS_PRESET === "bootstrap";

module.exports = {
  title: "Otomi",
  tagline: "Get started with Otomi",
  url: "https://otomi.io",
  baseUrl: "/",
  customFields: {
    description: "Self-hosted PaaS for Kubernetes",
  },
  favicon: "img/otomi.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "redkubes", // Usually your GitHub org/user name.
  projectName: "redkubes.github.io", // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: redirects.concat(
          redirects.map((r) => ({ from: `/otomi${r.from}`, to: r.to }))
        ),
        createRedirects(existingPath) {
          return [`/otomi${existingPath}`];
        },
      },
    ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "about",
    //     path: "about",
    //     editUrl: "https://github.com/redkubes/redkubes.github.io/edit/main/",
    //     routeBasePath: "about",
    //     sidebarPath: require.resolve("./sidebar-about.js"),
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "community",
    //     path: "community",
    //     editUrl: "https://github.com/redkubes/redkubes.github.io/edit/main/",
    //     routeBasePath: "community",
    //     sidebarPath: require.resolve("./sidebar-community.js"),
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //     sidebarCollapsible: true,
    //   },
    // ],
  ],
  themeConfig: {
    metadata: [{name: 'keywords', content: 'kubernetes, kubernetes ingress, k8s, istio, grafana, loki, kubernetes dashboard, kubernetes platform'}],
    announcementBar: {
      id: "supportus",
      content:
        'If you like Otomi, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/redkubes/otomi-core">GitHub</a>!',
      // backgroundColor: '#a11900',
      // textColor: '#ffd700',
      backgroundColor: "#0d47a1",
      textColor: "#ffd700",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/otomi-logo.svg",
    algolia: {
      appId: "U3MTGFO19C",
      apiKey: "e0ead7a6f8c98c140b3fca21e9eb5381",
      indexName: `redkubes_otomi`,

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      logo: {
        alt: "Site Logo",
        src: "img/otomi-logo.svg",
        href: "/docs", // Default to `siteConfig.baseUrl`.
        target: "_self", // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        // {
        //   to: "about/",
        //   label: "About",
        //   position: "left",
        // },
        // {
        //   to: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        //{
        //  to: 'docs/console/',
        //  label: 'Otomi Console',
        //  position: 'left',
        //},
        // {
        //   to: "docs/faq",
        //   label: "FAQ",
        //   position: "left",
        // },
        // {
        //   to: "community/get-involved",
        //   label: "Community",
        //   position: "left",
        // },
        {
          href: "https://github.com/redkubes/otomi-core",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Otomi",
          items: [
            {
              label: "Introduction",
              to: "/docs",
            },
            {
              label: "Installation",
              to: "/docs/get-started/installation",
            },
            {
              label: "Get started for Devs",
              href: "/docs/for-devs/get-started/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://join.slack.com/t/otomi/shared_invite/zt-1axa4vima-E~LHN36nbLR~ay5r5pGq9A",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/groups/otomiusers",
            },
            {
              label: "Conitributing",
              to: "/docs/contributing/contributing",
            },
          ],
        },
        {
          title: "Red Kubes",
          items: [
            {
              label: "Website",
              href: "https://redkubes.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/redkubes/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/red-kubes/",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      isBootstrapPreset
        ? "@docusaurus/preset-bootstrap"
        : "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebar-docs.js"),
          editUrl: "https://github.com/redkubes/redkubes.github.io/tree/main/",
          // versions: {
          //   current: {
          //     label: `${getNextVersionName()} (unreleased)`,
          //   },
          // },
        },
        gtag: {
          trackingID: "G-KKV4ZVDEKQ",
          // Optional fields.
          anonymizeIP: false, // Should IPs be anonymized?
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
