/**
 * @typedef {{
 *  id: string,
 *  totalDeFileiras: number,
 *  totalDeColunas: number,
 *  gap: string,
 *  style: CSSStyleDeclaration
 * }} Ala
 */

/**
 * @typedef {{
 *  name: string,
 *  alasPorLinha: number,
 *  gap: { vertical: number, horizontal: number },
 *  alas: Ala[]
 * }} Layout
 */

const corredorPrincipal = '20px'

/**
 * @type {Layout}
 */
window.Layout = {
  name: 'Igreja Sede',
  alasPorLinha: 4,
  gap: {
    vertical: '20px',
    horizontal: '50px'
  },
  alas: [
    {
      id: 'A',
      totalDeFileiras: 6,
      totalDeColunas: 5,
      gap: '10px',
    },
    {
      id: 'B',
      totalDeFileiras: 6,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginRight: corredorPrincipal,
      }
    },
    {
      id: 'C',
      totalDeFileiras: 6,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginLeft: corredorPrincipal,
      }
    },
    {
      id: 'd',
      totalDeFileiras: 6,
      totalDeColunas: 5,
      gap: '10px',
    },
    {
      id: 'E',
      totalDeFileiras: 6,
      totalDeColunas: 5,
      gap: '10px',
    },
    {
      id: 'F',
      totalDeFileiras: 6,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginRight: corredorPrincipal,
      }
    },
    {
      id: 'G',
      totalDeFileiras: 6,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginLeft: corredorPrincipal,
      }
    },
    {
      id: 'H',
      totalDeFileiras: 6,
      totalDeColunas: 5,
      gap: '10px'
    },
  ]
}
