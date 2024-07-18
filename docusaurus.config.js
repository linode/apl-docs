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
  title: "APL",
  tagline: "Self-hosted PaaS for Kubernetes",
  url: "https://otomi.io",
  baseUrl: "/",
  customFields: {
    description: "Build, deploy and monitor apps on Kubernetes",
  },
  favicon: "img/logos/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "Linode", // Usually your GitHub org/user name.
  projectName: "redkubes.github.io", // Usually your repo name.
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "kubernetes, kubernetes ingress, k8s, istio, grafana, loki, kubernetes dashboard, kubernetes platform",
      },
    ],
    theme: "github",
    image: "img/logos/akamai-logo-color.svg",
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
        src: "img/logos/akamai-logo-color.svg",
        href: "/", // Default to `siteConfig.baseUrl`.
        target: "_self", // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          href: "https://github.com/redkubes/otomi-core",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
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
};
