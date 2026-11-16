/* @ts-self-types="./mod.d.ts" */
const escapeXml = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'})[c]);
/** Render a short animated text SVG. */
export function renderText(text, { width = 800, height = 300, color = '#222222', duration = 1.5 } = {}) {
  if (!String(text).trim() || String(text).length > 120) throw new TypeError('text must contain 1 to 120 characters');
  if (!Number.isInteger(width) || width < 200 || !Number.isInteger(height) || height < 100 || !/^#[0-9a-fA-F]{6}$/.test(color) || !Number.isFinite(duration) || duration <= 0) throw new TypeError('invalid options');
  const safe = escapeXml(text);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${safe}"><rect width="100%" height="100%" fill="#ffffff"/><text x="50%" y="55%" text-anchor="middle" font-family="Arial,sans-serif" font-size="52" fill="${color}" opacity="0">${safe}<animate attributeName="opacity" from="0" to="1" dur="${duration}s" fill="freeze"/></text></svg>`;
}
