---
slug: projects
title: Team Projects
sidebar_label: Projects
---

A Project in APL is a collection of a Build, a Workload and a Service in ONE form.

## Create a Project

1. In the left menu click on `Projects` and then on `Create project`.
2. Provide a name for the project.

Note: The name of the project will be used for all created APL resources (build, workload and service).

3. Select `Create build form source` or `Use an existing image`
4. If `Create build from source` is selected: follow the [instruction](builds.md) for creating a Build
5. If `Use an existing image` is selected: follow the [instruction](workloads.md) for creating a Workload

Note: The `image.repository` and `image.tag` parameters in the values of the workload are automatically set when `Create build form source` is used. If `Use an existing image` is selected, the `image.repository` and `image.tag` parameters need to be set manually.

6. Follow the [instruction](services.md) for creating a Service to expose the workload
7. Click `Submit` and then `Deploy changes`
