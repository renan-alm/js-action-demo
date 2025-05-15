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

1.  **Create a workflow file:** Create a `.github/workflows/your-workflow.yml` file in your repository.
2.  **Add a step to use the action:** Use the `uses` keyword to specify the action in your workflow:

    ```yaml
    jobs:
      my_job:
        steps:
          - name: Use Demo Action
            uses: renan-alm/js-action-demo@v0.3.0  # Use specific version tag
            with:
              user-name: 'Your Name'  # Optional, defaults to 'Renan'
    ```

## Inputs

| Name | Description | Required | Default |
|------|-------------|----------|---------|
| `user-name` | Name to be greeted | No | `'Renan'` |

## Outputs

| Name | Description |
|------|-------------|
| `greeting` | The greeting message |
| `time` | The time when the action ran |

## Example Workflow

```yaml
name: Greeting Workflow
on: [push]

jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Send Greeting
        uses: renan-alm/js-action-demo@v0.3.0
        id: greet
        with:
          user-name: 'GitHub Actions'
      
      - name: Get Results
        run: |
          echo "Greeting: ${{ steps.greet.outputs.greeting }}"
          echo "Time: ${{ steps.greet.outputs.time }}"
