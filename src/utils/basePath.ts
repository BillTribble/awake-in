export const BASE_PATH =
  typeof window !== 'undefined' &&
  (window.location.pathname === '/awake-in' || window.location.pathname.startsWith('/awake-in/'))
    ? '/awake-in'
    : '';

export function withBase(path: string | null | undefined): string {
  if (!path) return '';
  if (BASE_PATH && path.startsWith('/') && !path.startsWith('/awake-in/')) {
    return `${BASE_PATH}${path}`;
  }
  return path;
}

export function withBaseHtml(html: string): string {
  if (!html || !BASE_PATH) return html;
  return html.replace(/(src|href)="\/(wp-content\/)/g, `$1="${BASE_PATH}/$2`);
}
