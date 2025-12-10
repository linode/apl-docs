---
slug: code-repositories
title: Code Repositories
sidebar_label: Code Repositories
---

The Code Repositories self-service feature can be used to register code repositories and use them to create container images in the [Container Images](container-images.md) self-service feature.

## Code Repositories (all)

All registered code repositories of the Team are listed here.

| Column      | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| Name        | The name of the registered code repository used to identify the code repository in App Platform |
| URL         | The URL of the registered code repository                                                       |
| Git service | The Git service of the registered code repository (Gitea, GitHub or GitLab)                     |

## Register a code repository

1. Click `ADD CODE REPOSITORY`

2. Enter a name for the code repository. This name is used to identify the code repository in App Platform.,

3. Select the Git service

- Use `Gitea` if the code repository is hosted by the in-cluster self-hosted Git service powered by Gitea.

- Use `GitHub` if the code repository is hosted by the external GitHub Git service.

- Use `GitLab` if the code repository is hosted by the external GitLab Git service.

### Gitea

1. Use the drop-down option to select a repository that is available within the Team's organization in Gitea. 

2. If no repository is available: Click on the `Create Repository` link to be redirected to the Team's organization in Gitea and click on `New Repository` to create a new repository.

3. Click `Add Code Repository` to save the repository.

### GitHub

1. Provide a link (HTTPS or SSH) to a repository in GitHub.

2. Optionally: Select `Private` If the repository in GitHub is private.

3. Optionally: Select a secret that contains the authentication credentials. Only secrets of type `basic-auth` and `ssh-auth` will be shown. If no secret is available, then first [create a secret](secrets.md).

4. Optionally: Test the connection to see if the authentication credentials are valid and App Platform can use the credentials to access the private repository.

5. Click `Add Code Repository` to save the repository. The code repository can be added even if the test connection fails.


### GitLab

1. Provide a link (HTTPS or SSH) to a repository in GitLab.

2. Optionally: Select `Private` If the repository in GitLab is private.

3. Optionally: Select a secret that contains the authentication credentials. Only secrets of type `basic-auth` and `ssh-auth` will be shown. If no secret is available, then first [create a secret](secrets.md).

4. Optionally: Test the connection to see if the authentication credentials are valid and App Platform can use the credentials to access the private repository.

5. Click `Add Code Repository` to save the repository. The code repository can be added even if the test connection fails.
