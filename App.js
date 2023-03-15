const showMenuBar = document.querySelector('.mobile_menu_bar')
const Button = document.querySelector('.BurgerLogo')
const triangle = document.querySelector('.triangle')
Button.addEventListener('click', () => {

    if (showMenuBar.style.display === 'none') {
        triangle.style.opacity = '1'
        showMenuBar.style.display = 'block'
    } else {
        showMenuBar.style.display = 'none'
        triangle.style.opacity = '0'
    }
})