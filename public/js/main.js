$(document).ready(function(){
    startTween();
    // intro timeline animation
    var tl = new TimelineMax();
    tl.from('#intro_line', 1, { drawSVG: '0', delay: 2, ease: Power0.easeIn});
    // intro text
    introtext = new SplitText(".intro__content p", {type: "words,chars"});
    tl.staggerFrom(introtext.chars, 0.6, {opacity:0, scale: .1}, 0.05);
    tl.from('#intro_text', 1.5, { x: '160', ease: Bounce.easeOut });
    tl.from('#intro_mask', 1.5, { x: '-160', ease: Bounce.easeOut, delay: -1.5});


    var tla = new TimelineMax();
    // About timeline animation
    tla.from('.project__bcg', 3, { overflow: 'hidden', opacity: '0', backgroundSize: 'inherit', ease: Power0.easeIn, delay: -1 });
    tla.from('#about_line', 1, { drawSVG: '0', delay: 2, ease: Power0.easeIn});
    tla.from('#about_text', 1.5, { x: '170', ease: Bounce.easeOut });
    tla.from('#about_mask', 1.5, { x: '-170', ease: Bounce.easeOut, delay: -1.5});
    tla.from('.project__content--text h1', 1.5, { opacity: '0', delay: -1.5});
    tla.from('.project__content--text p', 1.5, { opacity: '0', ease: Power0.easeIn});


});

function startTween() {
    /* Genealogia timeline with paper */
    var Gtl = new TimelineMax();
    Gtl.from('#tube', 1, { x: 0, y: -500 });
    Gtl.from('#paper', 1, { x:0, y: -500, delay: -1 });

    Gtl.to('#tube', 1, { x: -600, y: 0, scale: 1.6 });
    Gtl.to('#paper', 1, { x: 50, y: 0, delay: -1, scale: 1.6 });

}