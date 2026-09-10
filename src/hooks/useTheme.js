import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

/**
 * Dark is the default. The inline script in public/index.html has already
 * applied it (or the visitor's stored choice) to <html> before first paint,
 * so read it back and start React in agreement with the DOM rather than
 * briefly rendering the wrong theme.
 */
function readAppliedTheme() {
  if (typeof document === "undefined") return "dark";
  const applied = document.documentElement.getAttribute("data-theme");
  return applied === "light" ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readAppliedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      // Private mode or blocked storage: the theme still applies for this visit.
    }

    // Keep the browser UI colour (mobile address bar) in step with the page.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f6f7f9" : "#08090d");
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
