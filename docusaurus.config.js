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
  tagline: "Self-hosted PaaS for Kubernetes",
  url: "https://otomi.io",
  baseUrl: "/",
  customFields: {
    description: "Build, deploy and monitor apps on Kubernetes",
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
        redirects: redirects.map((r) => ({
          from: r.from.concat(r.from.map((f) => (`/otomi${f}`))),
          to: r.to,
        })),
        createRedirects(existingPath) {
          return [`/otomi${existingPath}`];
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "product",
        path: "product",
        breadcrumbs: false,
        editUrl: "https://github.com/redkubes/redkubes.github.io/edit/main/",
        routeBasePath: "product",
        sidebarPath: require.resolve("./sidebar-product.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        breadcrumbs: false,
        editUrl: "https://github.com/redkubes/redkubes.github.io/edit/main/",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebar-community.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarCollapsible: true,
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "kubernetes, kubernetes ingress, k8s, istio, grafana, loki, kubernetes dashboard, kubernetes platform",
      },
    ],
    announcementBar: {
      id: "supportus",
      content:
        'If you like Otomi, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/redkubes/otomi-core">GitHub</a>!',
      // backgroundColor: '#a11900',
      // textColor: '#ffd700',
      backgroundColor: "#0d47a1",
      textColor: "#ffd700",
    },
    theme: "github",
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
        href: "/", // Default to `siteConfig.baseUrl`.
        target: "_self", // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          to: "product/introduction",
          label: "Product",
          position: "left",
        },
        {
          to: "docs/get-started/overview",
          label: "Docs",
          position: "left",
        },
        {
          to: "community/welcome",
          label: "Community",
          position: "left",
        },
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
              label: "Installation",
              to: "/docs/get-started/installation/overview",
            },
            {
              label: "Labs",
              href: "/docs/get-started/labs/overview",
            },
            {
              label: "Roadmap",
              href: "/product/roadmap",
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
              label: "Start contributing",
              to: "/community/welcome",
            },
          ],
        },
      ],
    },
  },
  trailingSlash: false,
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
  scripts: [
    {
      src: "/scripts/reo.js"
    },
  ],
};
