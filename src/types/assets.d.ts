// Stylesheet imports are side effects resolved by the bundler, not by TypeScript.
// Without this, TS 5.9 reports TS2882 on every `import "./globals.css"`.
declare module "*.css";