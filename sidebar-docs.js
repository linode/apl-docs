module.exports = {
  mainSidebar: {
    Installation: ['inst-overview', 'inst-prerequisites', 'inst-setup', 'inst-configuration', 'inst-deployment'],
    'Otomi Console': [
      'cons-overview',
      'cons-configuring-apps',
      'cons-configuring-clusters',
      'cons-configuring-teams',
      'cons-configuring-services',
      'cons-configuring-secrets',
      'cons-settings',
      'cons-deploy-changes',
    ],
    'Known Issues': ['ki-overview', 'ki-cli', { Apps: ['ki-harbor'] }],
    'Lifecycle Management': ['lm-overview', 'lm-upgrades'],
    // Reference: [
    //   'ref-app-suite',
    //   {
    //     type: 'link',
    //     label: 'Values Schema',
    //     href: '/schema-viewer',
    //   },
    // ],
    // FAQ: ['faq'],
  },
}
