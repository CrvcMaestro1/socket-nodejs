
const socket = io();


socket.on('estado-actual', (ultimos4) => {
    const audio = new Audio('./audio/new-ticket.mp3')
    audio.play()

    Array.from({ length: ultimos4.length }, (x, i) => {
        const lblTicket = document.querySelector(`#lblTicket${i + 1}`)
        const lblEscritorio = document.querySelector(`#lblEscritorio${i + 1}`)
        const ticket = ultimos4[i]
        lblTicket.innerText = ticket.numero
        lblEscritorio.innerText = ticket.escritorio
    })
})