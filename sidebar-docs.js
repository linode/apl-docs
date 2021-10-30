module.exports = {
  mainSidebar: {
    'Installing Otomi': ['inst-overview', 'inst-prerequisites', 'inst-optional', 'inst-chart', 'post-install'],
    'Otomi Console': [
      'overview',
      'teams',
      'services',
      'jobs',
      'secrets',
      'platform-apps',
      {
        Settings: [
          'settings-alerts',
          'settings-azure',
          'settings-dns',
          'settings-home',
          'settings-kms',
          'settings-oidc',
          'settings-otomi',
          'settings-policies',
          'settings-smtp',
        ],
      },
      'clusters',
      'team-apps',
      'deploy-changes',
    ],
    'Otomi Apps': ['app-drone', 'app-harbor', 'app-keycloak', 'app-kubeapps', 'app-vault', 'app-gatekeeper'],
    'Otomi CLI': [
      'cli-overview',
      'cli-working-with',
      {
        'CLI Commands': [
          'cli-apply',
          'cli-bash',
          'cli-bootstrap',
          'cli-check-policies',
          'cli-commit',
          'cli-decrypt',
          'cli-destroy',
          'cli-diff',
          'cli-encrypt',
          'cli-lint',
          'cli-pull',
          'cli-rotate-keys',
          'cli-status',
          'cli-sync',
          'cli-template',
          'cli-test',
          'cli-validate-templates',
          'cli-validate-values',
          'cli-values',
          'cli-x',
        ],
      },
    ],
    Tutorials: ['tutorial-overview', 'tutorial-0', 'tutorial-1', 'tutorial-2', 'tutorial-3', 'tutorial-4', 'tutorial-5'],
    SRE: [
      'sre-overview',
      'sre-daily',
      'sre-troubleshooting',
      { 'Known Issues': ['ki-overview', 'ki-cli', 'ki-harbor', 'ki-istio', 'ki-loki', 'ki-staging-certs'] },
      'lm-upgrades',
    ],
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
