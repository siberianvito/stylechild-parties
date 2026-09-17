// Prefix for static assets so the same build works on GitHub Pages
// (served under /<repo>/) and on a root domain.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;
