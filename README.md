# js-action-demo

This is a template for creating JavaScript GitHub Actions. It provides a basic structure and workflow for building, testing, and releasing actions.

Key files:

-   [`action.yml`](action.yml): Defines the action's metadata, inputs, outputs, and runtime.
-   [`src/index.js`](src/index.js): The main JavaScript file that contains the action's logic.
-   `.github/workflows/`: Contains workflow files for testing and releasing the action.
    -   [`1-release.yml`](.github/workflows/1-release.yml): Workflow for releasing the action to GitHub Packages.
    -   [`2-test-action.yml`](.github/workflows/2-test-action.yml): Workflow for testing the action.
-   [`package.json`](package.json): Defines the project's dependencies and scripts.
