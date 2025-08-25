import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ElementHome } from "./screens/ElementHome/ElementHome";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <ElementHome />
    </ThemeProvider>
  </StrictMode>,
);
