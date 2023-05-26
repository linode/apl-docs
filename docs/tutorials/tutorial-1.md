---
slug: tutorial-1
title: Installing Otomi
sidebar_label: Install Otomi
---

To go through the tutorials, you first need to install Otomi on a running Kubernetes cluster.

In this first tutorial, we'll be installing [Otomi](https://github.com/redkubes/otomi-core) using `helm` with minimal values.

## Prerequisites

- A running Kubernetes cluster on one of the [supported providers](/docs/get-started/prerequisites#supported-providers)
- Helm installed

## Instructions

1. Add Otomi helm chart repository

    ```bash
    helm repo add otomi https://otomi.io/otomi-core && \
    helm repo update
    ```

2. Install Otomi with chart values

    ```bash
    helm install otomi otomi/otomi \
    --set cluster.k8sVersion="1.24" \
    --set cluster.name=$CLUSTERNAME \
    --set cluster.provider=$PROVIDER
    ```

3. Monitoring the Chart install

    ```bash
    # The chart deploys a Job (`otomi`) in the `default` namespace
    # Monitor the status of the job
    kubectl get job otomi -w
    # watch the helm chart install status (optional)
    watch helm list -Aa
    ```

4. When the installer job is finished, go to the end of the logs

    ```bash
    kubectl logs jobs/otomi -n default -f
    ```

   There you will see the following:

    ```bash
    2022-04-01T10:01:59.239Z otomi:cmd:commit:commit:info                                                                                            
    ################################################################################################
    #  To start using Otomi, go to https://<your-ip>.nip.io and sign in to the web console         #
    #  with username "otomi-admin" and password "password".                                        #
    #  Then activate Drone. For more information see: https://otomi.io/docs/get-started/activation #
    ################################################################################################
    ```

5. Sign in to the web UI (Otomi Console)

   Once Otomi is installed, go to the url provided in the logs of the installer job and sign in to the web UI with the provided username and password.

6. Add the auto generated CA to your keychain (optional)

   Since we install Otomi without proving a custom CA or using LetsEncrypt, the installer generated a CA. This CA is of course not trusted on your local machine.
   To prevent you from clicking away lots of security warning in your browser, you can add the generated CA to your keychain:

- In the left pane of the console, click on "Download CA"
- Double click the downloaded CA.crt or add the CA to your keychain on your mac using the following command:
  
  ```bash
  # On Mac
  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt  
  ```  

  ```powershell
  # On Windows(PowerShell - Run as Administrator)
  # Use certutil:
  certutil.exe -addstore root <downloaded cert path>
  # Or 
  Import-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\LocalMachine\Root
  # Restart the browser 
  ```

    But you could also run Chrome (sorry Msft folks ;) in insecure mode:

    ```bash
    alias chrome-insecure='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'
    ```

8. Activate Drone:

- In the side menu of Otomi Console under `platform` click on `apps` and then on the `Drone` app
- Sign in locally with as `otomi-admin` and the password provided in the logs of the installer job
- Click on `Authorize Application`
- Click on `Submit` on the Complete your Drone Registration page. You don't need to fill in your Email, Full Name or Company Name if you don't want to
- Click on the `otomi/values` repository
- Click on `+ Activate Repository`