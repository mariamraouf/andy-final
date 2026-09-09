import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { AppProviders, AppContent } from "@/App";

export interface HelmetHead {
  title?: { toString(): string };
  meta?: { toString(): string };
  link?: { toString(): string };
  script?: { toString(): string };
}

export function render(url: string) {
  const helmetContext: { helmet?: HelmetHead } = {};

  const html = renderToString(
    <AppProviders helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </AppProviders>,
  );

  const h = helmetContext.helmet;
  const head = [
    h?.title?.toString() ?? "",
    h?.meta?.toString() ?? "",
    h?.link?.toString() ?? "",
    h?.script?.toString() ?? "",
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
}
