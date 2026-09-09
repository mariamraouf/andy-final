import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

const container = document.getElementById("root")!;

// Prerendered pages ship with server-rendered markup already inside #root,
// so hydrate them instead of throwing the HTML away and rendering from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
