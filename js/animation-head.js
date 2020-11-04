/* variables */
const blocks = document.querySelectorAll(".block-reveal");
const menuBottom = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");
const menuLinks = document.querySelectorAll(".nav-menu")
const textWrapper = document.querySelector(".intro-title");
const generalContent = document.querySelector("#general-content");
const mainContent = document.querySelector('#content');


/* listerers */
function listeners() {
    /* event load for charge the site */
    document.addEventListener('DOMContentLoaded', chargeSite);
    menuBottom.addEventListener('click', menuAnim);
}
listeners()

/* functions */

/* replace of intro-title */
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);
/* put the transition when the web site was charge with gsap */
function chargeSite(e) {
    if (e) {

        gsap.to('.loader', 2.2, {
            delay: 3.5,
            top: '-100%',
            ease: Expo.easeInOut
        });

    }
}

/* anime fuctions from loader */
anime
    .timeline({
        loop: false
    })
    .add({
        targets: '.intro-title .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 50 * i
    }).add({
        targets: '.intro-title .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 700 + 50 * i
    });

/* menu Animation */
function menuAnim(e) {
    if (blockAnimation.reversed()) {
        blockAnimation.play();
        menuItems.setAttribute('style', 'display:block');
        setTimeout(() => {
            mainContent.setAttribute('style', 'display: none');
        }, 600);
    } else {
        blockAnimation.reverse();
        setTimeout(() => {
            mainContent.setAttribute('style', 'display: block');
        }, 600);
    }

    hiddenMenu()
}
/* call a new instance tween */
let blockAnimation = new TimelineMax({
    paused: true,
    reversed: true
});
/* working with an animation */
blockAnimation
    .staggerTo(blocks, 0.6, {
        width: '25%',
        ease: Circ.easeInOut
    }, 0.05)

.staggerFromTo(menuLinks, 0.6, {
    y: 20,
    autoAlpha: 0,
    ease: Circ.easeInOut
}, {
    y: 0,
    autoAlpha: 1
}, 0.2)