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
      id: '',
      totalDeFileiras: 6,
      totalDeColunas: 5,
      gap: '10px',
    },
    {
      id: '',
      totalDeFileiras: 6,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginRight: corredorPrincipal,
      }
    },
    {
      id: '',
      totalDeFileiras: 6,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginLeft: corredorPrincipal,
      }
    },
    {
      id: '',
      totalDeFileiras: 6,
      totalDeColunas: 5,
      gap: '10px',
    },
    {
      id: '',
      totalDeFileiras: 10,
      totalDeColunas: 5,
      gap: '10px',
    },
    {
      id: '',
      totalDeFileiras: 10,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginRight: corredorPrincipal,
      }
    },
    {
      id: '',
      totalDeFileiras: 10,
      totalDeColunas: 6,
      gap: '10px',
      style: {
        marginLeft: corredorPrincipal,
      }
    },
    {
      id: '',
      totalDeFileiras: 10,
      totalDeColunas: 5,
      gap: '10px'
    },
  ]
}
