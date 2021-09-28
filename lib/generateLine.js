/**
 * @param {HTMLDivElement | Element} root 
 * @param {CSSStyleDeclaration?} style
 * @returns {HTMLDivElement}
 */
export function generateLine(root, style) {
  if (!root) throw new Error('root is required');
  const line = document.createElement('div');

  if (style) {
    for (const key in style) {
      line.style[key] = style[key];
    }
  }

  root.appendChild(line)

  return line
}
