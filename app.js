// Nav Start

let navMenu = $("nav .icon");
let menu = $("nav .icon span");
let cross = $("nav .icon i");
let links = $("nav .links");
let body = $("body");
let link = $("nav .links a");

navMenu.click(function() {

    body.toggleClass("overflow");
    links.slideToggle("slow");
    menu.toggleClass("span-hidden");
    cross.toggleClass("cross-display");

});

link.click(function() {

    links.slideUp("slow");
    body.removeClass("overflow");

});

// Nav End

// Home Start

let homeText = $(".home-section .text");
let homeImage = $(".home-section .image");

window.onload = function() {

    homeText.addClass("home-text-animation");
    homeImage.addClass("home-image-animation");
    
};

// Home End

// Services Start

$(window).scroll(function() {

    let services = $(".services-section");
    let servicesTop = services.offset().top - $(window).scrollTop();

    if(servicesTop <= 100) {
        
        let card = $(".services-section .container .cards .card div");

        card.addClass("card-animation");
        
    }

});

// Services End

// Skills Start

$(window).scroll(function () {

    let skills = $(".skills-section");
    let skillsTop = skills.offset().top - $(window).scrollTop();

    if(skillsTop <= 200) {
        
        let one = $(".one .progress");
        let two = $(".two .progress");
        let three = $(".three .progress");
        let four = $(".four .progress");
        let five = $(".five .progress");

        one.addClass("one-animation");
        two.addClass("two-animation");
        three.addClass("three-animation");
        four.addClass("four-animation");
        five.addClass("five-animation");

    }

});

// Skills End

// About Start

$(window).scroll(function () {

    let about = $(".about-section");
    let aboutTop = about.offset().top - $(window).scrollTop();

    if(aboutTop <= 200) {
        
        setTimeout(function() {
            $(".about-section span").css("display", "none");
        }, 999);
        
        setTimeout(function() {
            $(".about-section .container").css("opacity", "1");
        }, 2100);

        $(".about-section .container").addClass("appear");
        $(".about-section span").addClass("slideBottom");

    }

});

// About End

// Portfolio Start
let offcanvas = $(".offcanvas");
let offcanvas1 = $(".offcanvas-1");
let offcanvas2 = $(".offcanvas-2");
let offcanvas3 = $(".offcanvas-3");
let offcanvas4 = $(".offcanvas-4");
let offcanvas5 = $(".offcanvas-5");
let offcanvas6 = $(".offcanvas-6");
let offcanvas7 = $(".offcanvas-7");
let offcanvas8 = $(".offcanvas-8");
let nav = $("nav");

$(window).scroll(function () {

    let portfolio = $(".portfolio-section");
    let portfolioTop = portfolio.offset().top - $(window).scrollTop();

    if(portfolioTop <= 100) {
        
        $(".portfolio-section .container").css("opacity", "1");

    }

});

$(".readiing").click(function() {

    body.toggleClass("overflow");
    offcanvas1.slideToggle("slow");

    nav.css("display", "none");

});

$(".leon").click(function() {

    body.toggleClass("overflow");
    offcanvas2.slideToggle("slow");

    nav.css("display", "none");

});

$(".kasper").click(function() {

    body.toggleClass("overflow");
    offcanvas3.slideToggle("slow");

    nav.css("display", "none");

});

$(".insure").click(function() {

    body.toggleClass("overflow");
    offcanvas4.slideToggle("slow");

    nav.css("display", "none");

});

$(".elzero").click(function() {

    body.toggleClass("overflow");
    offcanvas5.slideToggle("slow");

    nav.css("display", "none");

});

$(".easybank").click(function() {

    body.toggleClass("overflow");
    offcanvas6.slideToggle("slow");

    nav.css("display", "none");

});

$(".bookmark").click(function() {

    body.toggleClass("overflow");
    offcanvas7.slideToggle("slow");

    nav.css("display", "none");

});

$(".blogr").click(function() {

    body.toggleClass("overflow");
    offcanvas8.slideToggle("slow");

    nav.css("display", "none");

});

$(".offcanvas .icon").click(function() {

    offcanvas.slideUp("slow");
    body.removeClass("overflow");
    nav.css("display", "block");

});

// Portfolio End