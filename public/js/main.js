$(document).ready(function(){
    var tubebad = document.getElementById('tubebad')
        ,tube = document.getElementById('tube')
        ,hat = document.getElementById('hat')
        ,paper = document.getElementById('paper')
        ,stamp = document.getElementById('stamp')
        ,swatch = document.getElementById('swatch')
        ,tail1 = document.getElementById('tail1')
        ,tail2 = document.getElementById('tail2')
        ,gen_text = document.getElementById('gen_text')
        ,letter = document.getElementById('letter')
        ,stampiron = document.getElementById('stampiron')
        ,glove = document.getElementById('glove')
        ,fingers = document.getElementById('fingers')
        ,stamper = document.getElementById('stamper')
        ,sfr_text = document.getElementById('sfr_text')
        ,saber = document.getElementById('saber')
        ,scabbard = document.getElementById('scabbard')
        ,saber2 = document.getElementById('saber2')
        ,ger_overlay = document.getElementById('ger_overlay')
    ;
    var bh = window.innerHeight;
    var bw = window.innerWidth;
    console.log('bh = ' + bh + ', bw = ' + bw);
    //start Genealogia Tween();
    // startGenealogiaTween();
    // startSfragistikaTween();
    startGeraldikaTween(bw);

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

function startGenealogiaTween() {
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

function startSfragistikaTween() {
    /* Sfragistika timeline */
    var Stl = new TimelineMax();
    // letter, lenta1, lenta2, stampiron
    Stl.from(letter, 1, {y: '-500', ease:Elastic.easeOut.config(1, 0.75) }, 1);
    Stl.from(stampiron, 1, {y: '-500', ease:Elastic.easeOut.config(1, 0.75) }, 1);
    Stl.from(glove, 1, { bezier: [{x: '0', y: '0'}, {x: '-400', y: '200'},  {x: '-500', y: '500'}] }, 1);
    Stl.to(letter, 0.8, { y: '+=50', ease:Elastic.easeOut }, 2.2);
    Stl.to(stampiron, 0.8, { y: '+=50', ease:Elastic.easeOut }, 2.2);
    Stl.to(glove, 0.8, { y: '+=50', ease:Elastic.easeOut }, 2.2);
    Stl.to(glove, 1, { attr:{src:'/img/glove2.png'}}, 2);
    Stl.to(stamper, 0.01, { y: '+=45' }, 2); // Correct stamper position

    Stl.to(glove, 1, { bezier: [{x: '0', y: '0'}, {x: '-400', y: '200'},  {x: '-500', y: '500'}]  });
    Stl.to(stampiron, 1, { bezier: [{x: '0', y: '0'}, {x: '-400', y: '200'},  {x: '-500', y: '500'}] }, 3);

    Stl.to(stamper, 0.01, { autoAlpha: 1 }, 3);
    Stl.to(glove, 0.01, { css:{ zIndex: 2}}, 3.4);
    Stl.to(stampiron, 0.01, { css:{ zIndex: 1}}, 3.4);
    Stl.to(stamper, 1.5, {scale: 6 }, 3.3);
    Stl.to(letter, 1, { y: '+=200' }, 3.3);
    Stl.to(sfr_text, 1, { css:{ opacity: 1 }}, 3.3);

    Stl.restart();
}

function startGeraldikaTween(bw) {
    /* Geraldika timeline */
    var Grl = new TimelineMax();
    var leftSaber2 = bw/3;
    var rightSaber = bw/7;
    Grl.to(saber, 0.2, { rotation: '+=5' });
    Grl.to(saber, 0.5, { rotation: '-=10' });
    Grl.to(saber, 1.8, { rotation: '+=5' , ease:Elastic.easeOut.config(1, 0.75)});
    Grl.to(saber, 0.01, {attr:{src:'/img/scabbard.png'}}, 1.5);
    Grl.to(saber2, 0.01, { autoAlpha: 1 }, 1.5);
    Grl.to(garda, 0.01, { autoAlpha: 1}, 1.5);

    Grl.to(saber, 1, { x: '+=100', y: '-=25', rotation: '-=4'  }, 2);
    Grl.to(saber2, 1, { x: '-=500', rotation: '+=2' }, 2);
    Grl.to(garda, 1, {x: '-=500', y: '-=7', rotation: '+=2'}, 2);
    Grl.to(ger_text, 1, { css:{ opacity: 1 }}, 2.3 );
    Grl.to(ger_overlay, 1, { autoAlpha: 1  }, 2.3 );

    Grl.restart();
}