---
slug: configure-cname
title: Configuring a CNAME
sidebar_label: Configure a CNAME
---

## Configure a Service with a CNAME

Select `Use CNAME` when the URL of the service is used as a value in a CNAME.

### With TLS Termination at the NGINX Controller

Follow the steps below to set up a CNAME when the TLS termination happens on the NGINX controller.

1. Configure a CNAME entry with your domain name provider.

2. Generate or copy your domain certificates and store them as a TLS secret in your team's namespace.

3. Go to the service configuration section in the Console.

4. Create a new service by selecting the k8s service and port that you want to expose.

5. Check the "Use CNAME" checkbox. Two text boxes will appear: "domain" and "tlsSecretName".

6. Fill in both text boxes accordingly. Example: domain=`demo.example.com`, tlsSecretName=`my-cname-cert`.

7. Click on the "Submit" button, followed by the "Deploy" button.

### With TLS Termination at the Application (Pod) Level

Follow the steps below to set up a CNAME when the TLS termination happens on the application (pod) running on the cluster. It is expected that the certificates are already embedded or mounted in the application/pod.

1. Configure a CNAME entry with your domain name provider.

2. Go to the service configuration section in the Console.

3. Create a new service by selecting the k8s service and port that you want to expose.

3. Check the "TLS Passthrough" checkbox.

4. Check the "Use CNAME" checkbox. Fill the domain field(leave the tlsSecretName field empty).

5. Provide your cname domain in the text box.

6. Click on the "Submit" button, followed by the "Deploy" button.