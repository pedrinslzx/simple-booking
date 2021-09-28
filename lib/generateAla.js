/**
 * @param {HTMLDivElement | Element} root 
 * @param {Object} options
 * @param {string} options.id
 * @param {CSSStyleDeclaration?} options.style
 * @returns {HTMLDivElement}
 */
export function generateAla(root, options) {
  if (!root) throw new Error('root is required');
  const ala = document.createElement('div');
  ala.classList.add("ala")

  ala.setAttribute('id', options.id.toUpperCase());

  if (options.style) {
    for (const key in options.style) {
      ala.style[key] = options.style[key];
    }
  }

  root.appendChild(ala)

  return ala
}
