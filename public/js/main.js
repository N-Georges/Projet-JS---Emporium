/////////////////////////////// scale du logo de la navbar
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

/////////////////////////fin

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

//////////////////////////////////////////fin

///////////////////////// apparition modal
let connexion =  document.querySelector('#connexion')
let quit = document.querySelector('.quit')
let modal = document.querySelector('.modal1')
let connected = document.querySelector('.btnConnect')
let connect = document.querySelector('#connected')
let inscript = document.querySelector('.inscrip')
let inscriptDiv = document.querySelector('.inscription2')
let connectForm = document.querySelector('.connex')
let formCheck = document.querySelector('.formCheck')
connexion.addEventListener('click', () => {
    modal.classList.add('active')
    modal.classList.add('overflow')
})
quit.addEventListener('click', () => {
    modal.classList.remove('active')
})

inscript.addEventListener('click', () => {
    inscriptDiv.classList.add('active')
    formCheck.style.display = 'none'
})
connectForm.addEventListener('click', () => {
    inscriptDiv.classList.remove('active')
    formCheck.style.display = 'inline-block'
})


/////////////////////////// fin

//////////////////////////////////////// dark mode
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')
let body = document.body
dark.addEventListener('click', () =>{
    console.log('dark');
    document.body.style.backgroundColor = "black";
})
light.addEventListener('click', () => {
    document.body.style.backgroundColor = "white";

})

//////////////////////////////fin


//////////////////////////////////////// menuBurger
let menu = document.querySelector('.toggleBurger')
let navbar = document.querySelector('.navbar2')
menu.addEventListener('click', () => {
    navbar.classList.toggle('navbar1')
})

///////////////////////////////////////fin