import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementHome } from "./screens/ElementHome/ElementHome";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementHome />
  </StrictMode>,
);
