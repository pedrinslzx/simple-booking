/**
 * @param {HTMLDivElement | HTMLBodyElement | Element} root 
 * @returns {HTMLDivElement}
 */
export function generateContainer(root) {
  const container = document.createElement('div');
  container.classList.add('container');

  (root || document.body).appendChild(container);

  return container;
}
