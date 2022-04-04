// buttons init
const prevBtn = document.querySelector('#prev-button')
const nextBtn = document.querySelector('#next-button')
const about = document.querySelector('.about')
const frontEnd = document.querySelector('.front-end')
const backEnd = document.querySelector('.back-end')
const next = document.querySelector('.next')
const showProjects = document.querySelector('.view-projects')
const hideProjects = document.querySelector('.hide-projects')
// details containers
const aboutDetails = document.querySelector('.about-details')
const frontEndDetails = document.querySelector('.frontend-details')
const backEndDetails = document.querySelector('.backend-details')
// image slide 
const imageSlider = document.querySelector('.image-slider')
const sliderImage = document.querySelector('.image-slider img')


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
});

showProjects.addEventListener('click', () => {
    frontEndDetails.classList.remove('hide')
    backEndDetails.classList.remove('hide')
    hideProjects.classList.remove('hide')
    showProjects.classList.add('hide')
});

hideProjects.addEventListener('click', () => {
    frontEndDetails.classList.add('hide')
    backEndDetails.classList.add('hide')
    showProjects.classList.remove('hide')
    hideProjects.classList.add('hide')
});

// init count
let counter = 0;

// init width
const size = sliderImage[0].clientWidth;


imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', () => {
    counter++;
    console.log(counter)
});

prevBtn.addEventListener('click', () => {
    counter--;
    console.log(counter)
})