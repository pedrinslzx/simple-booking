import { generateContainer } from './generateContainer.js'
import { generateAla } from './generateAla.js'
import { generateLine } from './generateLine.js'
import { generateSeat } from './generateSeat.js'

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


/**
 * @param {Layout} options 
 * @returns {Layout & { alas:{ [key:string]: HTMLDivElement[] }, renderAlas: () => { [key:string]: HTMLDivElement[] } }}
 */
export function init(options = window.Layout) {
  const container = generateContainer()

  const { alas, gap, alasPorLinha } = options

  const finalAlas = {}

  function renderAlas() {
    const alaLines = []

    const alaConfig = {}

    let totalSeatsAgo = 0
    container.innerHTML = ''

    alas.forEach((ala, incrementalID) => {
      const { id: _Letter, totalDeFileiras, totalDeColunas, style, gap: alaGap } = ala

      const letter = _Letter.toUpperCase()

      alaConfig[letter] = alaConfig[letter] || { total: 0 }

      const total = totalDeColunas * totalDeFileiras

      if (incrementalID % alasPorLinha === 0) alaLines.push(generateLine(container, { marginBottom: gap.vertical, gap: gap.horizontal }))

      const line = alaLines[alaLines.length - 1]
      const alaContainer = generateAla(line, { id: letter, style: { ...style, gap: alaGap, marginBottom: alaGap } })

      const lines = []

      for (let id = 0; id < total; id++) {
        if (id % totalDeColunas === 0) {
          lines.push(generateLine(alaContainer, { gap: alaGap, marginBottom: alaGap }))
        }
        const line = lines[lines.length - 1]

        const data = window.localStorage.getItem('reservados-' + options.name)
        const reservados = data ? JSON.parse(data) : []


        const seat = generateSeat(line, {
          id: totalSeatsAgo,
          letter: letter,
          number: alaConfig[letter].total + id + 1,
          isAvailable: !reservados.some(reservado => reservado === String(totalSeatsAgo).padStart(2, '0')),
          isReserved: reservados.some(reservado => reservado === String(totalSeatsAgo).padStart(2, '0')),
          isSelected: false
        })

        totalSeatsAgo++

        finalAlas[letter] = finalAlas[letter] || []
        finalAlas[letter].push(seat)
      }
      alaConfig[letter].total = alaConfig[letter].total + total
    })

    return finalAlas
  }

  renderAlas()

  return { ...options, alas: finalAlas, renderAlas }
}
