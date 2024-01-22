// wow init//
new WOW().init();

//SHADOW HEADER//

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, and the shadow-header  class to the //
    this.scrollY >=  50 ? header.classList.add('header_shadow')
                        : header.classList.remove('header_shadow')
}
window.addEventListener('scroll', shadowHeader)

// SHOW SCROLL UP //
const scrollUP = () =>{
    const scrollUP = document.getElementById('scroll-up')
    // When the scroll is higher than 75 viewport height, and the show-scroll class to the a tag with the scrollup class //

    this.scrollY >= 75 ? scrollUP.classList.add('show_scroll')
                        :scrollUP.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUP)

// SHOW MENU //
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')

      // MENU SHOW //
      // Validate if constant exists //
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show_menu')
        })
      }

      // HIDDEN MENU //
      //Validate if constant exists //
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show_menu')
        })
      }



