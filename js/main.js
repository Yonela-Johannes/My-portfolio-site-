// buttons init
const about = document.querySelector('.about')
const frontEnd = document.querySelector('.front-end')
const backEnd = document.querySelector('.back-end')
const next = document.querySelector('.next')
// details containers
const aboutDetails = document.querySelector('.about-details')
const frontEndDetails = document.querySelector('.frontend-details')
const backEndDetails = document.querySelector('.backend-details')


about.addEventListener('click', () => {
    // buttons active style
    about.classList.add('button_active')
    frontEnd.classList.remove('button_active')
    backEnd.classList.remove('button_active')

    // Toggling details
    aboutDetails.classList.remove('hide')
    frontEndDetails.classList.add('hide')
    backEndDetails.classList.add('hide')
    next.classList.add('hide')
});

frontEnd.addEventListener('click', () => {
    // buttons active style
    frontEnd.classList.add('button_active')
    about.classList.remove('button_active')
    backEnd.classList.remove('button_active')

    // Toggling details
    frontEndDetails.classList.remove('hide')
    aboutDetails.classList.add('hide')
    backEndDetails.classList.add('hide')
    next.classList.remove('hide')
});

backEnd.addEventListener('click', () => {
    // buttons active style
    backEnd.classList.add('button_active')
    about.classList.remove('button_active')
    frontEnd.classList.remove('button_active')

    // Toggling details
    backEndDetails.classList.remove('hide')
    aboutDetails.classList.add('hide')
    frontEndDetails.classList.add('hide')
    next.classList.remove('hide')
})