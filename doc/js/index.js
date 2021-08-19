// show Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId)

    // Validate that variable exists
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            // Adding the show menu class to the div tag with the nav menu class
            nav.classList.toggle('show_menu');
        })
    }
}
showMenu('nav_toggle', 'nav_menu');
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')
const navMenu = document.getElementById('nav_menu') 
function linkAction(){    
    navMenu.classList.remove('show_menu');
    console.log("You clicked me", navMenu)
}
console.log(navLink)
// SCROLL SECTION ACTIVE LINK

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + '] ').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + '] ').classList.remove('active_link')
        }
    })
}

// window.addEventListener('scroll', scrollActive)
// ================================= CHANGE THEME
const themeButton = document.getElementById('change-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'
// previously selected topic (if use selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
// Obtain current theme that the interface  has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'
// Validate if the user previously chose a topic and
if(selectedTheme){
    // if validation is true, we activate and deactivate the dark theme option
    document.body.classList[selectedTheme ==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon ==='fa-moon' ? 'add' : 'remove'](darkTheme)
}
// Active/diactivate theme manually with the button 
themeButton.addEventListener('click', () =>  {
    // Add or remove dark / icon 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save theme and current icon as user selected
    console.log("You have click this moon button")
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

//   Scale cv
// reduce size to print on A4 screen size
function scaleCv(){
    document.body.classList.add('scale-cv')
}
// reduce size to print on A4 screen size
function scaleCv(){
    document.body.classList.remove('scale-cv')
}
// All section within this div is generated in PDF 
let areaCv = document.getElementById('area-cv')
let resumeButton = document.getElementById('resume-button')

// html2pdf options
let opt = {
    margin:       0,
    filename:     'myResume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4 ', orientation: 'portrait' }
};
  
// function to call cv with html2pdf options

function generateResume(){
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () =>{
    // 1. The class scale-dv is added to the body
    scaleCv()
    // 2. The pdf is generated
    generateResume()
    // 3. The scale cv is removed from the body after 5seconds
    setTimeout(removeScale, 5000)
})
