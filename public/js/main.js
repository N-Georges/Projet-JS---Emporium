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
let dots = Array.from(document.querySelectorAll('.dot'))
let one = dots[0]
let two = dots[1]
let three = dots[2]
let four = dots[3]
let slides = Array.from(document.querySelectorAll('.carrousel .card'))
let lSofa = slides[0]
let gloves = slides[1]
let bowl = slides[2]
let bag = slides[3]
let tshirt = slides[4]
let set = slides[5]
let mSofa = slides[6]
one.addEventListener('click', () => {
    lSofa.classList.add('active')
    gloves.classList.add('active')
    bowl.classList.add('active')
    bag.classList.add('active')
    tshirt.classList.remove('active')
    set.classList.remove('active')
    mSofa.classList.remove('active')
    one.classList.add('active')
    two.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')

})
two.addEventListener('click', () => {
    lSofa.classList.remove('active')
    tshirt.classList.add('active')
    one.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    two.classList.add('active')
})
three.addEventListener('click', () => {
    lSofa.classList.remove('active')
    gloves.classList.remove('active')
    set.classList.add('active')
    three.classList.add('active')
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.remove('active')
    five.classList.remove('active')
})
four.addEventListener('click', () => {
    lSofa.classList.remove('active')
    gloves.classList.remove('active')
    bowl.classList.remove('active')
    mSofa.classList.add('active')
    three.classList.remove('active')
    one.classList.remove('active')
    two.classList.remove('active')
    four.classList.add('active')
})

// const SetActive = (i) => {
//     for (let slide of slides) {
//         // if (i == 1) {
//             lSofa.classList.remove('active');
//             tshirt.classList.add('active');
//             slides[i].classList.add('active');
//             console.log(slide)[0];
//         // }
//         for (let dot of dots) {
//             // ajout de la class active sur les indicateur quand il sont selectionner
//             dot.classList.remove('active');
//             dots[i].classList.add('active');
//         }
//     }
// }
// for (let j = 0; j<dots.length; j++){
//     dots[j].addEventListener('click', () => {
//         SetActive(j);

//     })
// }

// apparition modal
let connexion =  document.querySelector('#connexion')
let quit = document.querySelector('.quit')
let modal = document.querySelector('.modal1')
connexion.addEventListener('click', () => {
    console.log(connexion);
    modal.classList.add('active')
    console.log(modal);
})
quit.addEventListener('click', () => {
    modal.classList.remove('active')
})