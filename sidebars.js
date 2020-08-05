module.exports = {
  mainSidebar: {
    About: ['about-otomi', 'roadmap'],
    Installation: [
      'setup',
      'configuration',
      'deployment', // how to deploy
    ],
    Administration: [
      'administration-overview',
      'configuring-teams',
      'configuring-services',
      'configuring-apps',
      'configuring-dashboard',
      'configuring-clusters',
      'settings',
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
