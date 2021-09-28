/**
 * @param {HTMLDivElement} container
 */
function generateContainer(container) {
  const [...alas] = container.querySelectorAll('div[data-seats-ala]')

  let i = 0
  const totalPorLinha = container.getAttribute('data-alas')

  const lines = alas.reduce((lines, ala) => {
    const isNewLine = i % totalPorLinha === 0
    if (isNewLine) lines.push(document.createElement('div'))
    const line = lines[lines.length - 1]
    line.appendChild(forEachAla(ala))
    line.style.gap = container.getAttribute('data-alas-v-gap')
    line.style.marginBottom = container.getAttribute('data-alas-h-gap')
    i++
    return lines
  }, [])

  lines.forEach(l => container.appendChild(l))

  /*
    column-gap: attr(data-alas-v-gap);
    row-gap: attr(data-alas-h-gap);
   */
  /**
   * @param {HTMLDivElement} ala
   */
  function forEachAla(ala) {
    const fileiras = +ala.getAttribute('data-fileiras')
    const cadeiras = +ala.getAttribute('data-cadeiras')
    const total = fileiras * cadeiras

    const letra = ala.getAttribute('data-letter')

    const lines = []

    for (let id = 0; id < total; id++) {
      const isNewLine = id % cadeiras === 0
      if (isNewLine) lines.push(document.createElement('div'))
      const line = lines[lines.length - 1]


      const cadeira = document.createElement('div')
      cadeira.classList.add('cadeira')


      line.style.marginBottom = ala.getAttribute('data-cadeiras-gap')
      line.style.gap = ala.getAttribute('data-cadeiras-gap')

      cadeira.textContent = `${letra.toUpperCase()}${String(id + 1).padStart(String(total).length, '0')}`

      line.appendChild(cadeira)
    }

    lines.forEach(l => ala.appendChild(l))


    return ala
  }

}

document.querySelectorAll('div[data-seats-container]').forEach(generateContainer)
