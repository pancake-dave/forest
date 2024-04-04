const burgerBtn = document.querySelector('.burger-btn')
const navMobile = document.querySelector('.nav-mobile')
const navMobileItems = document.querySelectorAll('.nav-mobile__link')

const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active')
    burgerBtn.classList.toggle('burger-btn--animation')
}

navMobileItems.forEach(item => {
    item.addEventListener('click', handleNav)
    
});

burgerBtn.addEventListener('click', handleNav)