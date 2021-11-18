// scale du logo de la navbar
let nav = document.querySelector('nav')
let logo = document.querySelector('.logo')

window.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
        logo.classList.add('logoscale')
        logo.classList.remove('logo')
        nav.classList.add('navscale')

    } else if (window.scrollY < 170) {
        logo.classList.remove('logoscale')
        logo.classList.add('logo')
        nav.classList.remove('navscale')
    }
})
