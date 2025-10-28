let btn = document.getElementById('btnSapa')
let model = document.getElementById('model')


btn.addEventListener('click', () => {
    model.classList.toggle('d-none')
    setTimeout(() => {
        model.classList.toggle('d-none')
    }, 500)
})