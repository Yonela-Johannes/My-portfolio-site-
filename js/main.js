const navMenu = document.getElementById('nav_menu')
const navToggle = document.getElementById('nav_toggle')
const navClose = document.getElementById('nav_close'); 

// ================Show Menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');

    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}
const navLink = document.querySelectorAll(".nav_link");

function linkAction(){
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// // ================= SKILLS TABS ====================
const skillsContent = document.querySelector('.skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
    if(itemClass === 'skills_content skills_open'){
        this.parentNode.className = 'skills_content skills_close'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
// // ================= QUALIFICATION TABS ====================

const tabs = document.querySelectorAll('[data-target]');
const tabsContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active'); 

        tab.classList.remove('qualification_active');
    })
})

// ================= SERVICES MODAL ====================

const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal_close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active_modal')
        })
    })
})

// // ==================PORTFOLIO SWIPER

let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    // optional parameters
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ================== SCROLL SECTION ACTIVE

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionIid = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionIid + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionIid + ']').classList.remove('active_link')            
        }
    })
}

window.addEventListener('scroll', scrollActive)

  // ================== SCROLL TOP ACTIVE

function scrolllHeader(){
    const nav = document.getElementById('header');
    // when scroll is higher than 80 viewport height,  add the scroll-header class to the tag  
    if(this.scrollY >= 80)nav.classList.add('scroll_header'); else nav.classList.remove('scroll_header')
}

window.addEventListener('scroll', scrolllHeader)

  // ================== SHOW SCROLL UP

  function scrollUp(){
    const scrollUp = document.getElementById('scroll_up');
    // when scroll is higher than 200 viewport height,  add the scroll-class tag with scroll
    if(this.scrollY >= 500) scrollUp.classList.add('show_scroll'); else scrollUp.classList.remove('show_scroll')
  }
  window.addEventListener('scroll', scrollUp)


const itemOne = document.getElementById('one')
const itemTwo = document.getElementById('two')
const itemThree = document.getElementById('three')
const itemFour = document.getElementById('four')


const mobile = document.getElementById('mobile')
const web = document.getElementById('web')
const online = document.getElementById('online')
const ngo = document.getElementById('ngo')


mobile.addEventListener('mouseenter', () => {
   itemTwo.document.add('.hide')
    console.log('I am the mobile')
});
web.addEventListener('mouseenter', () => {
   
    console.log('I am the web')
});
online.addEventListener('mouseenter', () => {
   
    console.log('I am online')
});
ngo.addEventListener('mouseenter', () => {
   
    console.log('I am ngp')
});
mobile();

console.log(mobile)