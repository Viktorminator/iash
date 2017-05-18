$(document).ready(function(){
    var tubebad = document.getElementById('tubebad')
        ,tube = document.getElementById('tube')
        ,hat = document.getElementById('hat')
        ,paper = document.getElementById('paper')
        ,stamp = document.getElementById('stamp')
        ,swatch = document.getElementById('swatch')
        ,tail1 = document.getElementById('tail1')
        ,tail2 = document.getElementById('tail2')
        ,gen_text = document.getElementById('gen_text');

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
   // tla.from('.project__bcg', 3, { overflow: 'hidden', opacity: '0', backgroundSize: 'inherit', ease: Power0.easeIn, delay: -1 });
    tla.from('#about_line', 1, { drawSVG: '0', delay: 2, ease: Power0.easeIn});
    tla.from('#about_text', 1.5, { x: '170', ease: Bounce.easeOut });
    tla.from('#about_mask', 1.5, { x: '-170', ease: Bounce.easeOut, delay: -1.5});
    tla.from('.project__content--text h1', 1.5, { opacity: '0', delay: -1.5});
    tla.from('.project__content--text p', 1.5, { opacity: '0', ease: Power0.easeIn});


});

function startTween() {
    /* Genealogia timeline with paper */
    var Gtl = new TimelineMax();
    Gtl.from(tubebad, 3, { x: 0, y: -500 , ease:Elastic.easeOut.config(1, 0.75)});
    Gtl.to(tubebad, 1, { rotation: '-5', transformOrigin: '100% 0' }, 0.5);
    Gtl.to(tubebad, 1, { rotation: 0, transformOrigin: '100% 0' }, 1.2);
    Gtl.to(swatch, 0.01, { autoAlpha: 1});
    Gtl.to(tube, 0.1, { width: '+=6', attr:{src:'/img/tube.png'}});
    Gtl.to(hat, 0.1, { autoAlpha: 1 });
    Gtl.to(tube, 0.1, { autoAlpha: 1 });
    Gtl.to(tubebad, 0.1, { autoAlpha: 0 });
    Gtl.to(paper, 0.1, { autoAlpha: 1 });
    Gtl.to(stamp, 0.1, { autoAlpha: 1 });
    
    /* TUBE OPENING */
    Gtl.to(swatch, 0.2, { x: '+=4', y: '+=2', rotation: 100, transformOrigin: "0 0", ease: Back.easeOut.config(4)});
    Gtl.to(hat, 0.5, { x: '-=1', y: '+=5', rotation:-160, transformOrigin:"0px 0px"});
    Gtl.to(hat, 0.01, { x: '+=5', attr:{src:'/img/hat2.png'}});

    /* TUBE LEFT */
    Gtl.to(tube, 1, { x: -668, y: -10, scale: 1.25 });
    Gtl.to(paper, 1, { x: -50, y: '-=8', delay: -1, scale: 1.2 });
    Gtl.to(hat, 1, { x: -582, y: -13, delay: -1, scale: 1.25 });
    Gtl.to(swatch, 1, { x: '-=593', y: '+=4', delay: -1, scale: 1.2 });
    Gtl.to(swatch, 1, { rotation: '-=30', ease: Back.easeOut.config(4) }, 3.8);
    Gtl.to(swatch, 0.5, { rotation: '+=10', ease: Back.easeOut.config(4) }, 4.4);
    Gtl.to(tail1, 0.1, { autoAlpha: 1 }, 4.5);
    Gtl.to(tail2, 0.1, { autoAlpha: 1 }, 4.5);


// {bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});
    Gtl.to(stamp, 0.1, {x: '-=20', y: '+=15'});
    Gtl.to(stamp, 0.01, { transformOrigin:"50% 0" });
    Gtl.to(tail1, 0.01, { transformOrigin:"0 50%" } );
    Gtl.to(tail2, 0.01, { transformOrigin:"0 50%" } );

   /**/ Gtl.to(stamp, 0.1, {x: '+=70', y: 70, scale: 1.4,  bezier: [{x:0, y:0}, {x:50,y:10},{x:-10,y:100}], ease: SlowMo.ease.config(0.7, 0.7, false)});

    Gtl.to(stamp, 1, { x: 95, rotation: '+=90',  ease:Elastic.easeOut});
    Gtl.to(tail1, 0.1, { rotation: '+=140', scale: 2, bezier: [{x:0, y:0}, {x:40,y:20},{x:40,y:50},{x:50,y:125}] }, 5.7);
    Gtl.to(tail2, 0.1, { rotation: '+=170', scale: 2, bezier: [{x:0, y:0}, {x:40,y:20},{x:40,y:60},{x:70,y:100}] }, 5.7);
    Gtl.to(tail1, 0.5, { rotation: '+=130', scale: 2.6, ease: Back.easeOut.config(4) }, 5.9 );
    Gtl.to(tail2, 0.5, { rotation: '+=100', scale: 2.6, ease: Back.easeOut.config(4) }, 6 );
    Gtl.to(gen_text, 1, { autoAlpha: 1 }, 6 ); 
    Gtl.restart();
}