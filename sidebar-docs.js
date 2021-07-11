module.exports = {
  mainSidebar: {
    'Installation': [
      'inst-overview', 
      'inst-prerequisites',
      'inst-chart', 
      'inst-cli'],
    'Otomi EE': [
      'ee-overview',
      'ee-configuring-apps',
      'ee-settings',
      'ee-configuring-clusters',
      'ee-configuring-teams',
      'ee-configuring-services',
      'ee-configuring-jobs',
      'ee-configuring-secrets',
      'ee-team-apps',
      'ee-deploy-changes',
    ],
    'Otomi CE': [
      'ce-overview',
      'ce-configure-teams'],
    'Otomi Apps': [
        'app-drone',
        'app-harbor',
        'app-keycloak',
        'app-kubeapps',
        'app-vault',
        'app-gatekeeper'],
    'Otomi CLI': [
      'cli-overview'],
    'SRE': [
      'sre-overview',
      'sre-daily',
      'sre-troubleshooting'],
    'Known Issues': [
      'ki-overview', 
      'ki-cli', { Apps: ['ki-harbor', 'ki-loki'] }],
    'Lifecycle Management': [
      'lm-overview', 
      'lm-upgrades'],
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
