# claude-plugin-design-system

Design tokens, base components and patterns for the web interfaces of Claude Code plugins, so that every plugin interface looks and behaves alike. React components with TypeScript declarations, a light and a dark theme, IBM Plex fonts embedded.

## Install

```bash
npm install --save-exact @cocofly59/claude-plugin-design-system
```

`react` and `react-dom` are peer dependencies.

## Use

Import the stylesheet once, at the entry of the interface, then the components:

```tsx
import "@cocofly59/claude-plugin-design-system/styles.css";
import { Button } from "@cocofly59/claude-plugin-design-system";
```

The theme follows the system's light or dark preference. Style the interface's own parts with the semantic tokens the stylesheet defines (`var(--color-…)`, `var(--space-…)`), never with literal values.

## License

MIT. Fonts: SIL Open Font License 1.1. Icons: Lucide, ISC License.
