# Action JS Template

[![Test](https://github.com/renan-alm/js-action-demo/actions/workflows/2-test-action.yml/badge.svg)](https://github.com/renan-alm/js-action-demo/actions/workflows/2-test-action.yml)
[![License](https://img.shields.io/github/license/renan-alm/js-action-demo)](LICENSE)
[![Issues](https://img.shields.io/github/issues/renan-alm/js-action-demo)](https://github.com/renan-alm/js-action-demo/issues)
[![Stars](https://img.shields.io/github/stars/renan-alm/js-action-demo)](https://github.com/renan-alm/js-action-demo/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/renan-alm/js-action-demo)](https://github.com/renan-alm/js-action-demo/commits/main)

A JavaScript GitHub Action template that provides basic greeting functionality.

## Features

- Custom greeting with configurable name
- Timestamp output
- Node.js 20 runtime
- Bundled dependencies

## Inputs

| Name | Description | Required | Default |
|------|-------------|----------|---------|
| `user-name` | Name to be greeted | Yes | `'Renan'` |

## Outputs

| Name | Description |
|------|-------------|
| `greeting` | The generated greeting message |
| `time` | The timestamp when the action ran |

## Usage

```yaml
steps:
  - name: Greeting Action
    uses: renan-alm/js-action-demo@v0.3.0
    id: hello
    with:
      user-name: 'Your Name'  # Required, defaults to 'Renan'

  - name: Get Output
    run: |
      echo "Greeting: ${{ steps.hello.outputs.greeting }}"
      echo "Time: ${{ steps.hello.outputs.time }}"
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Make changes to `src/index.js`
4. Build: `npm run build`
5. Commit including the `dist` folder

## License

MIT License - see LICENSE file for details
