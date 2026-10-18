# claude-plugin-design-system

Design tokens, base components and patterns for the web interfaces of Claude Code plugins, so that every plugin interface looks and behaves alike. React components with TypeScript declarations, a light and a dark theme, IBM Plex fonts embedded.

## Install

```bash
npm install --save-exact @cawin/claude-plugin-design-system
```

`react` and `react-dom` are peer dependencies.

## Use

Import the stylesheet once, at the entry of the interface, then the components:

```tsx
import "@cawin/claude-plugin-design-system/styles.css";
import { Button, iconSend } from "@cawin/claude-plugin-design-system";

<Button variant="primary" icon={iconSend}>Send</Button>;
```

The theme follows the system's light or dark preference; `data-theme="light"` or `data-theme="dark"` on any element forces one theme on its subtree. Style the interface's own parts with the semantic tokens the stylesheet defines (`var(--color-…)`, `var(--space-…)`, `var(--radius-…)`), never with literal values.

## Contents

- **Tokens**: surfaces, lines, text, accent and tones (neutral, info, accent, waiting, success, danger) in both themes; type, space, shapes and sizes.
- **Base components**: `Button` (primary, secondary, ghost; icon, loading), `IconButton`, `Link`, `TextField`, `TextArea`, `Radio`, `Checkbox`, `Icon`.
- **Icons**: a closed set from Lucide, one export per icon (`iconSend`, `iconPencil`, `iconClock`…), so that a bundle keeps only the icons it imports.
- **Patterns**: `Card`, `Badge`, `StatusBadge`, `CollapsibleRow`, `AppHeader`, `LiveIndicator`, `Banner`, `Figure`, `Prose`.
- **Rendered text**: `Prose` styles rich text an interface has already rendered, such as Markdown: paragraphs, headings, lists, code, tables, quotes and strikethrough. `density="block"` holds a long text; `density="inline"` holds a one-line text inside a row, such as a radio label, without block margins. Make its links with `Link`, for instance by mapping the renderer's `a` element to it.

## License

MIT. Fonts: SIL Open Font License 1.1. Icons: Lucide, ISC License.
