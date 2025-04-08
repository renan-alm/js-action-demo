# js-action-demo

This is a template for creating JavaScript GitHub Actions. It provides a basic structure and workflow for building, testing, and releasing actions.

Key files:

-   [`action.yml`](action.yml): Defines the action's metadata, inputs, outputs, and runtime.
-   [`src/index.js`](src/index.js): The main JavaScript file that contains the action's logic.
-   `.github/workflows/`: Contains workflow files for testing and releasing the action.
    -   [`1-release.yml`](.github/workflows/1-release.yml): Workflow for releasing the action to GitHub Packages.
    -   [`2-test-action.yml`](.github/workflows/2-test-action.yml): Workflow for testing the action.
-   [`package.json`](package.json): Defines the project's dependencies and scripts.


## Usage

To use this action in your workflow, you'll need to:

1.  **Create a workflow file:**  If you don't already have one, create a `.github/workflows/your-workflow.yml` file in your repository.
2.  **Add a step to use the action:**  Use the `uses` keyword to specify the action in your workflow.  You'll need to specify the repository where the action is located and the ref (branch, tag, or commit SHA) you want to use.

    ```yaml
    jobs:
      my_job:
        steps:
          - name: Use Demo Action
            uses: renan-alm/js-action-demo@main  # Replace with your username and the action's release tag
            with:
              # Add any inputs your action requires here
              user-name: 'Renan Alm'
              another-input: 'value'
    ```

    *   Replace `renan-alm/js-action-demo` with the actual repository where your action is located.
    *   Replace `@main` with the specific tag or branch you want to use (e.g., `@v0.2.2`, `@main`).  Using a tag is recommended for stability.
    *   The `with` section is used to provide inputs to your action.  Refer to your action's [`action.yml`](action.yml) file to see the available inputs and their descriptions.

3.  **Configure inputs (optional):**  If your action requires inputs, use the `with` keyword to provide them.  The inputs will be passed to your action's JavaScript code.

Refer to the [GitHub Actions documentation](https://docs.github.com/en/actions) for more information on creating and configuring workflows.


______________________________

