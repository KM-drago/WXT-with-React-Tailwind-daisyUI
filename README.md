# WXT-with-React-Tailwind-daisyUI

This template should help get you started developing with React in WXT using Tailwind and daisyUI for styling.

# Adding Tailwind

Used a variation of the Tailwind guide for Vite.
https://tailwindcss.com/docs/guides/vite

### Install

```
pnpm install -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

### Config

Change tailwind.config.js as following to configure your template paths.

#### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./entrypoints/popup/index.html", "./entrypoints/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

Clear App.css and add the Tailwind directives to your CSS

#### App.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Clear the style.css file to remove predefined styles.

# Adding daisyUI

Followning https://daisyui.com/docs/install/

### Install

```
pnpm add -D daisyui@latest
```

### Config

Update tailwind.config.js. Notice that only change is the `plugins: [require("daisyui")],` line

#### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./entrypoints/popup/index.html", "./entrypoints/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

```
