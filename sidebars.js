module.exports = {
  mainSidebar: {
    About: ['about-otomi', 'roadmap'],
    Installation: [
      'installation-overview',
      'setup',
      'configuration',
      'deployment', // how to deploy
    ],
    Administration: [
      'administration-overview',
      'configuring-apps',
      'configuring-clusters',
      'configuring-teams',
      'configuring-services',
      'settings',
      'configuring-dashboard',
      'deploy-changes',
    ],
    Reference: [
      'app-suite',
      {
        type: 'link',
        label: 'API',
        href: '/otomi/docApi',
      },
    ],
    FAQ: ['faq'],
  },
}
