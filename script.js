function $(target) { return document.querySelector(target) }

const store = (key, value) => localStorage.setItem(key, value)
const get = key => localStorage.getItem(key)
const remove = key => localStorage.removeItem(key)
const clear = () => localStorage.clear()
const stringify = target => JSON.stringify(target)
const parse = target => JSON.parse(target)
const ticketsList = $('#ticketsList')
const clearLocalStorageBtn = $('#clearLocalStorage')
let fetchedTickets

const tickets = [
  { id: 1, ticketNumber: 111, ticketHolderFirstName: 'Ashkan', ticketCheckedIn: false },
  { id: 2, ticketNumber: 222, ticketHolderFirstName: 'Xhoana', ticketCheckedIn: false },
  { id: 3, ticketNumber: 333, ticketHolderFirstName: 'Pardo', ticketCheckedIn: false }
]

if (!get('tickets')) {
  store('tickets', stringify(tickets))
  alert('Tickets added to your localStorage successfully.')
} else {
  fetchedTickets = parse(get('tickets'))
}

fetchedTickets ? console.log(fetchedTickets) : null

tickets.forEach(ticket => {
  ticketsList.innerHTML += `<li>ID: ${ticket.id} | Ticket Number: ${ticket.ticketNumber}</li>`
})


clearLocalStorageBtn.addEventListener('click', () => { clear() })