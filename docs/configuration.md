---
id: configuration
title: Configuration & validation
---

Assuming the setup steps are completed, you need to now configure Otomi Stack. This can be done most easily through the Otomi UI. So if you have a license please refer to the [Administration Overview](./administration-overview.md).

For manual configuration follow these steps:

1. Open the [Otomi Stack openapi docs](/otomi/docApi) for reference.
2. Configure `env/clusters.yaml`
3. Add cloud config: `env/$CLOUD/default.yaml`
4. Add cluster configs `env/$CLOUD/$CLUSTER.(yaml|sh)`

Once these needed files are configured, validate the results:
```bash
cd otomi-stack
bin/validate-repo.sh ../otomi-values
```

When successful move on to the next phase: [Deployment](./deployment.md)