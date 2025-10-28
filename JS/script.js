let btn = document.getElementById('btnSapa')
let model = document.getElementById('model')
let card = document.getElementById('card')
let body = document.getElementById('body')
let chTheme = document.getElementById('chTheme')


btn.addEventListener('click', () => {
    model.classList.toggle('d-none')
    card.classList.toggle('shaking')
    setTimeout(() => {
        card.classList.toggle('shaking')
        model.classList.toggle('d-none')
    }, 1000)
})

chTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})
