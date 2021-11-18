let nav = document.querySelector('nav')
let logo = document.querySelector('.logo')
let  = document.querySelector('header')

window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
        logo.classList.add('logoscale')
        logo.classList.remove('logo')
        nav.classList.add('navscale')

    } else if (window.scrollY < 160) {
        logo.classList.remove('logoscale')
        logo.classList.add('logo')
        nav.classList.remove('navscale')
    }
})