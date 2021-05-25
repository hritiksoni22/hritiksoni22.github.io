$(document).ready(function() {
var typed = new Typed(".typing", {
    strings: ["blogger","Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
let hamberger = document.querySelector('.hamberger');
let times =document.querySelector('.times');
let mobileNav =document.querySelector('.mobile-nav');


hamberger.addEventListener('click', function(){
mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});
$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
});


});