export const THEME_STORAGE_KEY = "portfolio-theme";

export type Theme = "light" | "dark";

// Runs before first paint so the page never flashes the wrong theme.
export const themeInitScript = `try{document.documentElement.dataset.theme=localStorage.getItem('${THEME_STORAGE_KEY}')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch{document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}`;

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}