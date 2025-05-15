# Action JS Template

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
