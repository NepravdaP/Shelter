console.log('test');

const burger = document.querySelector ('.burger-menu')
const burgerMenu = document.querySelector('.menu-block')
const links = document.querySelectorAll('.menu-block-item')
cons

const toggleMenu = () => {
    burger.classList.toggle('opened')
    burgerMenu.classList.toggle('opened')
    if ([...burger.classList].includes('opened')) {

        [...links].map((el) => {
            el.style.visibility = 'visible'
        })
    }
    else {
            [...links].map((el) => {
                el.style.visibility = 'hidden'
            })  
        }
    
}
const toggleActiveLink = () => {

}

burger.addEventListener('click', toggleMenu)