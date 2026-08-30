const STYLE_ID = "ae-text-animator-styles";

const CSS = `
.ae-text-root {
  position: relative;
  display: inline-block;
  max-width: 100%;
  transform-style: preserve-3d;
  line-height: 1.04;
}
.ae-text-unit {
  display: inline-block;
  white-space: pre;
  will-change: transform, opacity, filter;
}
.ae-text-line,
.ae-text-font-line {
  display: block;
  white-space: nowrap;
}
.ae-text-wrapper {
  display: inline-block;
}
`;

export function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}
