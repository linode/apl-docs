module.exports = {
  mainSidebar: {
    Installation: ['inst-overview', 'inst-prerequisites', 'inst-chart', 'inst-cli'],
    'Enterprise Edition': [
      'ee-overview',
      'ee-configuring-apps',
      'ee-settings',
      'ee-configuring-clusters',
      'ee-configuring-teams',
      'ee-configuring-services',
      'ee-configuring-jobs',
      'ee-configuring-secrets',
      'ee-team-apps',
      'ee-deploy-changes'],
    'Community Edition': ['ce-overview', 'ce-configure-teams', 'ce-configure-services'],
    'Applications': ['app-drone', 'app-harbor', 'app-keycloak', 'app-kubeapps', 'app-vault', 'app-gatekeeper'],
    'Otomi CLI': ['cli-overview','cli-apply', 'cli-bash', 'cli-bootstrap', 'cli-check-policies', 'cli-commit'],
    SRE: ['sre-overview', 'sre-daily', 'sre-troubleshooting', { 'Known Issues': ['ki-overview', 'ki-cli', 'ki-harbor', 'ki-istio', 'ki-loki'] }, 'lm-upgrades'],
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
