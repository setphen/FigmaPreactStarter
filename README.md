# Figma Preact Starter

A template project for Preact-powered Figma plugins

### Setup

1. Create a new plugin via Figma. Choose the "Empty" plugin type.

2. Clone this repo into your plugin folder.

  You can do `npx degit github:setphen/FigmaPreactStarter --force` to copy the
  main branch without cloning any of this template's git history.

3. Add or replace these lines in `manifest.json`

```
"main": "dist/code.js",
"ui": "dist/ui.html",
```

`npm i` to install modules

`npm run watch` to start development
