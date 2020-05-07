module.exports = {
  mainSidebar: {
    About: ['about-otomi', 'roadmap'],
    Installation: [
      'installation',
      'setup',
      'configuration',
      'deployment', // how to deploy
    ],
    Administration: [
      'administration-overview',
      'configuring-team',
      'configuring-service',
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
