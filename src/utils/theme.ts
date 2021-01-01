import { THEME_KEY } from "@/utils/constants/app";

export function isDarkModeSet(): boolean {
  return window.localStorage.getItem(THEME_KEY) === "true";
}
