import { init } from './lib/init.js'

const { name, alas, renderAlas } = init()

let selectedSeat = null

function handleStartSystem(alas) {
  for (const id in alas) {
    const seats = alas[id]
    seats.forEach(seat => {
      seat.addEventListener('click', () => {
        console.log(seat.id)
        if (seat.getAttribute('data-is-selected') === 'true') {
          seat.setAttribute('data-is-selected', 'false')

          selectedSeat.setAttribute('data-is-selected', 'false')

          selectedSeat = null
        } else {
          if (seat.getAttribute('data-is-available') !== 'true') return
          seat.setAttribute('data-is-selected', 'true')

          if (selectedSeat) {
            selectedSeat.setAttribute('data-is-selected', 'false')
          }

          selectedSeat = seat
        }
      })
    })
  }
}

handleStartSystem(alas)

document.querySelector('button').addEventListener('click', () => {
  if (!selectedSeat) return alert('Você deve escolher um acento')
  const data = window.localStorage.getItem('reservados-' + name)
  const reservados = data ? JSON.parse(data) : []

  reservados.push(selectedSeat.id)

  window.localStorage.setItem('reservados-' + name, JSON.stringify(reservados))

  selectedSeat = null

  handleStartSystem(renderAlas())
})
