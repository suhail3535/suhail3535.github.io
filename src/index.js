import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/theme.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme";
import reportWebVitals from "./reportWebVitals";

// ChakraProvider and BrowserRouter were dropped: the site is a single
// scrolling page with no routes, and the design system now owns all styling.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
