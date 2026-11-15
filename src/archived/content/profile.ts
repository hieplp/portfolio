export interface Profile {
  name: string;
  familyName: string;
  middleName: string;
  givenName: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
}

export const profile: Profile = {
  name: "Ly Phuoc Hiep",
  familyName: "Ly",
  middleName: "Phuoc",
  givenName: "Hiep",
  role: "Software engineer",
  email: "",
  github: "",
  linkedin: "",
};

export const initials =
  (profile.familyName[0] + profile.givenName[0]).toUpperCase() || "LH";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

/** Inline before first paint so the page never flashes the wrong theme. */
export const themeInitScript = `try{document.documentElement.dataset.theme=localStorage.getItem('${THEME_STORAGE_KEY}')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch{document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}addEventListener('DOMContentLoaded',function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',document.documentElement.dataset.theme==='dark'?'#15181f':'#f8f9fb')})`;

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#15181f" : "#f8f9fb");
}