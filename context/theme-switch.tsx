"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Theme = "light" | "dark";
type ThemeSwitchContextType = {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
};

const initialState: ThemeSwitchContextType = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeSwitchContext = createContext<ThemeSwitchContextType>(initialState);

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("bridge-theme", newTheme);
  };

  useEffect(() => {
    setIsMounted(true);
    const localTheme =
      (localStorage.getItem("bridge-theme") as Theme) || "light";
    setTheme(localTheme);
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <ThemeSwitchContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};

export const useThemeSwitch = () => {
  const context = useContext(ThemeSwitchContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
