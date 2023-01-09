let nav = document.querySelector('#nav-menu');
let scroll  = document.querySelector('.scroll-up-btn')

 changenavBack();

 window.addEventListener('scroll', changenavBack);
 function changenavBack()
 {
     if (window.scrollY >= 25) {
         nav.classList.add('sticky');
     } else {
         nav.classList.remove('sticky');
     }

     if(window.scrollY > 500){
            scroll.classList.add("show");
    }else{
             scroll.classList.remove("show");
        }

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });


 }

 var typed = new Typed(".typing", {
    strings: [ "Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: [" Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });




