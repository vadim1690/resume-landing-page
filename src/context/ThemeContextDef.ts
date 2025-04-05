import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create and export the context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
