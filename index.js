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

 $('#nav-menu .menu li a').click(function(){
            $('html').css("scrollBehavior", "smooth");
        });

 $('.menu-btn').click(function(){
            $('#nav-menu .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

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




//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('#nav-menu').addClass("sticky");
//         }else{
//             $('#nav-menu').removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('#nav-menu .menu li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('#nav-menu .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: [ "Back-End Developer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: [" Back-End Developer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });