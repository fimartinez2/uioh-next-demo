# UI-OH · Web Demo (Next.js)

This repository is the **Web demonstration** of **UI-OH**, a cross-platform Design System built for **React** and **React Native**.

It showcases how the same design tokens, theming logic and UI components can power both **web** and **mobile** interfaces from a single NPM package.

> 📦 NPM package: https://www.npmjs.com/package/uioh  
> 🧩 Core repository: https://github.com/fimartinez2/uioh

## ✨ What this demo shows

- Shared **design tokens** (colors, typography, spacing)
- **Light / Dark mode**
- The same components working across **Next.js** and **Expo**
- Token-driven UI — no local colors, no duplicated styles
- A scalable architecture ready for real products

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 🧠 How it works

```tsx
import { UiOhProvider, Heading, Text, ColorModeToggle } from "uioh";
```

```tsx
<UiOhProvider defaultMode="light">{children}</UiOhProvider>
```

Switching theme mode instantly updates all colors and typography — no component-level overrides required.

## 🧪 Architecture Highlights

- Token-first design
- Platform-agnostic components
- No duplicated styles between web & native
- Production-ready theming model
- Built to scale
