module.exports = {
  mainSidebar: {
    "Akamai App Platform": [
      "akamai-app-platform/introduction",
    ],
    "Getting Started": [
      "get-started/overview",
      {
        Installation: [
          "get-started/installation/overview",
          "get-started/installation/akamai-connected-cloud",
          "get-started/installation/linode",
          "get-started/installation/custom",
          "get-started/installation/helm",
          "get-started/installation/dns",
          "get-started/installation/oidc",
          "get-started/installation/sops",
          "get-started/installation/entrypoint",
          "get-started/installation/byo-wildcard",
        ],
      },
      "get-started/installation/post-install-steps",
      {
        "Hands-on Labs": [
          "get-started/labs/labs-overview",
          "get-started/labs/labs-prerequisites",
          "get-started/labs/create-repos",
          "get-started/labs/build-images",
          "get-started/labs/trigger-builds",
          "get-started/labs/push-images",
          "get-started/labs/create-sealed-secrets",
          "get-started/labs/using-argo-cd",
          "get-started/labs/use-catalog",
          "get-started/labs/create-workloads",
          "get-started/labs/expose-services",
          "get-started/labs/auto-image-update",
          "get-started/labs/create-projects",
          "get-started/labs/create-postgresql-db",
          "get-started/labs/scan-images",
          "get-started/labs/scan-containers",
          "get-started/labs/detect-threats",
          "get-started/labs/view-logs",
          "get-started/labs/view-metrics",
          "get-started/labs/monitor-services",
          "get-started/labs/custom-metrics",
          "get-started/labs/create-netpols",
          "get-started/labs/use-otel",
          "get-started/labs/canary-deployment",
          "get-started/labs/create-rabbitmq-cluster",
        ],
      },
    ],
    "For Developers": [
      {
        "Console - Team View": [
          "for-devs/console/overview",
          "for-devs/console/dashboard",
          "for-devs/console/apps",
          "for-devs/console/catalog",
          "for-devs/console/projects",
          "for-devs/console/builds",
          "for-devs/console/workloads",
          "for-devs/console/netpols",
          "for-devs/console/services",
          "for-devs/console/security-policies",
          "for-devs/console/usermgnt",
          "for-devs/console/settings",
          "for-devs/console/sealed-secrets",
          "for-devs/console/shell",
          
        ],
      },
    ],
    "For Platform Adminstrators": [
      {
        "Console - Platform View": [
          "for-ops/console/overview",
          "for-ops/console/dashboard",
          "for-ops/console/apps",
          "for-ops/console/teams",
          "for-ops/console/usermgnt",
          "for-ops/console/projects",
          "for-ops/console/builds",
          "for-ops/console/workloads",
          "for-ops/console/netpols",
          "for-ops/console/services",
          "for-ops/console/backups",
          "for-ops/console/maintenance",
          {
            Settings: [
              "for-ops/console/settings/cluster",
              "for-ops/console/settings/platform",
              "for-ops/console/settings/key-management",
              "for-ops/console/settings/alerts",
              "for-ops/console/settings/dns",
              "for-ops/console/settings/ingress",
              "for-ops/console/settings/oidc",
              "for-ops/console/settings/backup",
              "for-ops/console/settings/obj",
            ],
          },
        ],
      },
      {
        "How To": [
          "for-ops/how-to/overview",
          "for-ops/how-to/use-catalog",
          "for-ops/how-to/ingress-classes",
          "for-ops/how-to/use-team-admin",
          // "for-ops/how-to/core-only",
          "for-ops/how-to/backups",
          "for-ops/how-to/clone-apl",
          "for-ops/how-to/manage-age",
          "for-ops/how-to/change-admin-password",
          "for-ops/how-to/change-user-passwords",
        ],
      },
      {
        "CLI": [
          "for-ops/cli/installation",
          "for-ops/cli/deploying",
          "for-ops/cli/known-issues",
          {
            "CLI Commands": [
              "for-ops/cli/apply",
              "for-ops/cli/bash",
              "for-ops/cli/bootstrap",
              "for-ops/cli/commit",
              "for-ops/cli/decrypt",
              "for-ops/cli/destroy",
              "for-ops/cli/diff",
              "for-ops/cli/encrypt",
              "for-ops/cli/lint",
              "for-ops/cli/pull",
              "for-ops/cli/rotate-keys",
              "for-ops/cli/status",
              "for-ops/cli/sync",
              "for-ops/cli/template",
              "for-ops/cli/test",
              "for-ops/cli/validate-templates",
              "for-ops/cli/validate-values",
              "for-ops/cli/values",
              "for-ops/cli/x",
            ],
          },
        ],
      },
      {
        SRE: [
          "for-ops/sre/overview",
          "for-ops/sre/daily",
          "for-ops/sre/known-issues",
          "for-ops/sre/troubleshooting",
        ],
      },
      {
        "Integrated Apps": [
          "apps/overview",
          "apps/alertmanager",
          "apps/argocd",
          "apps/certmanager",
          "apps/cloudnativepg",
          "apps/external-dns",
          "apps/falco",
          "apps/gitea",
          "apps/grafana",
          "apps/harbor",
          "apps/ingress-nginx",
          "apps/istio",
          "apps/jaeger",
          "apps/keycloak",
          "apps/knative",
          "apps/kiali",
          "apps/kyverno",
          "apps/kured",
          "apps/loki",
          "apps/minio",
          "apps/otel",
          "apps/prometheus",
          "apps/rabbitmq",
          "apps/sealedsecrets",
          "apps/tempo",
          "apps/trivy",
          "apps/tekton",
          "apps/velero",
        ],
      },
    ],
  },
};
