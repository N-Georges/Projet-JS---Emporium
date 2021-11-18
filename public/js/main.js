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

// caroussel
let dots = document.querySelectorAll('.dot')
let slides = Array.from(document.querySelectorAll('.carrousel .card')) 
const SetActive = (i) => {
    for (slide of slides)
    if (i == 1) {
        slide.classList.remove('active')[0];
        slides[i].classList.add('active')[4];
    }
    for(dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
    console.log(slide)[0];
    // slides[i].classList.add('active');
    // ajout de la class active sur les indicateur quand il sont selectionner
}
for (let j = 0; j<dots.length; j++){
    dots[j].addEventListener('click', () => {
        SetActive(j);

    })
}

