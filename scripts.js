let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')
let section = document.querySelector('section')

let active = 0
let lastPosition = items.length - 1

// Gradientes para cada carro
const backgrounds = [
    "radial-gradient(circle, #b30000, #2b0000)",  
    "radial-gradient(circle, #0a1f44, #000814)",  
    "radial-gradient(circle, #e6b800, #4d3b00)"   
]

function setSlider() {

    let itemOld = container.querySelector('.list .item.active')
    if (itemOld) itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    if (dotsOld) dotsOld.classList.remove('active')

    items[active].classList.add('active')
    dots[active].classList.add('active')

    indicator.querySelector(".numbers").innerHTML =
        active + 1 < 10 ? '0' + (active + 1) : active + 1

    section.style.setProperty('--bg-gradient', backgrounds[active])
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < 0 ? lastPosition : active - 1
    setSlider()
}
