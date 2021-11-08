const $ = (target) => document.querySelector(target)
const store = (key, value) => localStorage.setItem(key, value)
const get = key => localStorage.getItem(key)
const remove = key => localStorage.removeItem(key)
const clear = () => localStorage.clear()
const stringify = target => JSON.stringify(target)
const parse = target => JSON.parse(target)

const ticketsList = $('#ticketsList')
const resetBtn = $('#reset')
const form = $('#form')
const input = $('#input')
const totalTicketsCount = $('#totalTicketsCount')
const checkedInTicketsCount = $('#checkedInTicketsCount')
let tickets

const toastify = (message, type = 'success') => {
  Toastify({
    text: message,
    duration: 2500,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: type == 'success' ? '#00FF00' : '#FF0000',
      color: type == 'success' ? '#000000' : '#FFFFFF'
    },
    onClick: function () { } // Callback after click
  }).showToast();
}

if (!get('tickets')) {
  tickets = originalTickets
  store('tickets', stringify(tickets))
  toastify('New tickets loaded successfully')
} else {
  tickets = parse(get('tickets'))
}

const render = (tickets) => {
  sortTickets(tickets)
  totalTicketsCount.textContent = tickets.length
  let num = tickets.filter(ticket => {
    return ticket.ticketCheckedIn
  })
  checkedInTicketsCount.textContent = num.length
  ticketsList.innerHTML = ''
  tickets.forEach(ticket => {
    ticketsList.innerHTML += `
      <tr class=${ticket.ticketCheckedIn ? 'text-primary' : ''}>
        <td>${ticket.ticketNumber}</td>
        <td>${ticket.ticketHolderFirstName}</td>
        <td>${ticket.ticketHolderLastName}</td>
        <td>${ticket.ticketHolderEmail}</td>
        <td>${ticket.ticketCheckedIn ? 'Checked in' : ''} </td>
      </tr >
  `
  })
}

const updateLocalStorage = (target) => {
  store('tickets', stringify(target))
  render(target)
}

const focusInput = () => {
  input.value = ''
  input.focus()
}

const reset = (tickets) => {
  clear()
  tickets = originalTickets
  store('tickets', stringify(tickets))
  render(tickets)
}

const sortTickets = (target) => {
  target.sort(item => {
    return item.ticketCheckedIn ? 1 : -1 // `false` values first
  })
}

const checkTicket = () => {
  if (!input.value || input.value.length != 10) {
    toastify('Enter a valid ticket number', 'error')
    focusInput()
    return
  }

  let ticketNumber = tickets.filter(ticket => {
    return ticket.ticketNumber == input.value
  })

  if (!ticketNumber.length) {
    toastify('TICKET NOT FOUND', 'error')
    focusInput()
    return
  }

  if (ticketNumber[0].ticketCheckedIn) {
    if (confirm('Ticket already checked in. Check out?')) {
      ticketNumber[0].ticketCheckedIn = false
      ticketNumber[0].ticketCheckInDateTime = null
      toastify('Ticket checked out')
    }
  } else {
    ticketNumber[0].ticketCheckedIn = true
    ticketNumber[0].ticketCheckInDateTime = new Date().getTime()
    toastify('Ticket checked in')
  }

  updateLocalStorage(tickets)

  focusInput()
}

render(tickets)

resetBtn.addEventListener('click', () => {
  if (confirm('Are you sure? This will reset ALL the information.')) {
    if (confirm('Are you REALLY SURE? This action cannot be undone!')) {
      reset()
    }
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkTicket()
})