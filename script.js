let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

 let shoppingcart = document.querySelector('.shopping-cart');

 document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
 }


 let loginForm = document.querySelector('.login-form');

 document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
 }


 let navbar = document.querySelector('.navbar');

 document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
 }

 var swiper = new Swiper(".product-slider", {
   loop:true,
   spaceBetween: 20,
   autoplay: {
       delay: 7500,
       disableOnInteraction: false,
   },
   centeredSlides: true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(` .box`, {
  interval: 200
});



