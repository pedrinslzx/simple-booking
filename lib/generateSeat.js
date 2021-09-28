/**
 * @param {HTMLDivElement | Element} root 
 * @param {Object} options 
 * @param {number | string} options.id 
 * @param {number | string} options.number 
 * @param {string} options.letter 
 * @param {boolean} options.isAvailable
 * @param {boolean} options.isReserved
 * @param {boolean} options.isSelected
 * @returns {HTMLDivElement}
 */
export function generateSeat(root, options) {
  if (!root) throw new Error('root is required');

  const { id, isSelected, isReserved, isAvailable } = options

  const letter = String(options.letter).toUpperCase();
  const number = String(options.number).padStart(2, '0')

  const seat = document.createElement('div');

  seat.classList.add('seat');
  seat.setAttribute('id', String(id).padStart(2, '0'));
  seat.setAttribute('data-letter', letter);
  seat.setAttribute('data-number', number);
  seat.setAttribute('data-is-selected', isSelected);
  seat.setAttribute('data-is-reserved', isReserved);
  seat.setAttribute('data-is-available', isAvailable);
  seat.textContent = `${letter}${number}`;

  root.appendChild(seat);

  return seat
}
