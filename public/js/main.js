$(document).ready(function(){
    startTween();
    function getRandom(max, min){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

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
    // Gtl.from('#tube', 3, { x: 0, y: -500 , ease:Elastic.easeOut.config(1, 0.75)});
    Gtl.to('#tube', 1, { rotation: '-5', transformOrigin: '100% 0' }, 0.5);
    Gtl.to('#tube', 1, { rotation: 0, transformOrigin: '100% 0' }, 1.2);
    Gtl.to('#tube', 1, { attr:{src:'/img/tube.png'}});
    Gtl.to('#tube', 1, { autoAlpha: 1, scale: 0.99 });
    Gtl.to('#hat', 0.1, { autoAlpha: 1 });
    Gtl.to('#paper', 0.1, { autoAlpha: 1 });
    Gtl.to('#stamp', 0.1, { autoAlpha: 1 });
// TweenMax.to(document.getElementById("myDiv"), 5, 
    
    /* TUBE OPENING */
    Gtl.to('#hat', 0.5, { x: '+=5', y: '+=5', rotation:-160, transformOrigin:"0px 0px"});
    Gtl.to('#hat', 0.01, { x: '+=5', attr:{src:'/img/hat2.png'}});
    /* TUBE LEFT 
    Gtl.to('#tube', 1, { x: -580, y: -25, scale: 1.25 });
    Gtl.to('#paper', 1, { x: -50, y: -10, delay: -1, scale: 1.2 });
    Gtl.to('#hat', 1, { x: -573, y: -15, delay: -1, scale: 1.25 });

    // Gtl.to('#stamp', 0.5, { x: 80, y: 0, delay: -1, scale: 1.6 , ease:Elastic.easeOut});
    

// {bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});
    Gtl.to('#stamp', 0.1, {x: '-=20', y: '+=20',scale: 1.4});
    Gtl.to('#stamp', 0.1, {x: '+=70', y: 60, transformOrigin:"50% 0" ,  bezier: [{x:0, y:0}, {x:50,y:10},{x:-10,y:100}]});
    Gtl.to('#stamp', 1, { x: 95, rotation: '+=90',  ease:Elastic.easeOut});
    Gtl.to('#gen_text', 1, { autoAlpha: 1 });*/
    Gtl.restart();
}