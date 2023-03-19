/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    var breakpoint = {
        // Small screen / phone
        sm: 576,
        // Medium screen / tablet
        md: 768,
        // Large screen / desktop
        lg: 992,
        // Extra large screen / wide desktop
        xl: 1200
    };

    $(document).ready(function(){
        $('#slick').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            draggable: true,
            infinite: true,
            dots: false,
            arrows: false,
            speed: 1000,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover:false,
            responsive: [
                {
                    breakpoint: breakpoint.sm,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: breakpoint.md,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: breakpoint.lg,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: breakpoint.xl,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        });
    });


})(jQuery); // End of use strict

document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});

function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
        grecaptcha.execute('6LfxWXUhAAAAAAY7Cqqj7OJ_gL7EtxZxoF9DnMKy', {action: 'submit'}).then(function (token) {
            console.log('Token: ' + token);
        });
    });
}

function onSubmit(token) {
    var http = new XMLHttpRequest();
    var url = 'https://hmdowpcunl.execute-api.us-east-1.amazonaws.com/Prod/mail';
    http.open('POST', url, true);

//Send the proper header information along with the request
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("contactForm").reset();
            alert('Thank you for contacting us!');
        }
    }
    http.send(JSON.stringify({ "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "message": document.getElementById('message').value,
        "token": token }));
}
