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
        // geraldika variables
        ,saber = document.getElementById('saber')
        ,scabbard = document.getElementById('scabbard')
        ,saber2 = document.getElementById('saber2')
        ,ger_overlay = document.getElementById('ger_overlay')
        ,knot = document.getElementById('knot')
        // resources variables
        ,paper3 = document.getElementById('paper3')
        ,paper1 = document.getElementById('paper1')
        ,paper2 = document.getElementById('paper2')
        ,glasses = document.getElementById('glasses')
        ,tail3 = document.getElementById('tail3')
        ,knot2 = document.getElementById('knot2')
        ,signet = document.getElementById('signet')
        ,res_text = document.getElementById('res_text')
        // publishing variables
        ,book = document.getElementById('book')
        ,lupa = document.getElementById('lupa')
        ,hand = document.getElementById('hand')
        ,pub_text = document.getElementById('pub_text')
        ,pub_overlay = document.getElementById('pub_overlay')
        // projects variables
        ,lupa2=document.getElementById('lupa2')
        ,pro_text=document.getElementById('pro_text')
        // events variables
        ,smoke1 = document.getElementById('smoke1')
        ,smoke2 = document.getElementById('smoke2')
        ,smoke3 = document.getElementById('smoke3')
        ,smoke4 = document.getElementById('smoke4')
        ,smoke5 = document.getElementById('smoke5')
        ,eve_text = document.getElementById('eve_text')
        ,arrow = document.getElementById('arrow')
        // grants variable gra_text,stamp2,knot4,paper4,hand3,hand4,wax1-9
        ,gra_text = document.getElementById('gra_text')
        ,stamp2 = document.getElementById('stamp2')
        ,knot4 = document.getElementById('knot4')
        ,paper4 = document.getElementById('paper4')
        ,hand3 = document.getElementById('hand3')
        ,hand4 = document.getElementById('hand4')
        ,wax1 = document.getElementById('wax1')
        ,wax2 = document.getElementById('wax2')
        ,wax3 = document.getElementById('wax3')
        ,wax4 = document.getElementById('wax4')
        ,wax5 = document.getElementById('wax5')
        ,wax6 = document.getElementById('wax6')
        ,wax7 = document.getElementById('wax7')
        ,wax8 = document.getElementById('wax8')
        ,wax9 = document.getElementById('wax9')
        ,smoke6 = document.getElementById('smoke6')
        // var menu
        ,triggerBttn = document.getElementById( 'trigger-overlay' )
        ,overlay = document.querySelector( 'div.overlay' );

    var bh = window.innerHeight;
    var bw = window.innerWidth;
    // console.log('bh = ' + bh + ', bw = ' + bw);


    // Init controller

    var controller = new ScrollMagic.Controller();

    // Change behavior of controller
    // to animate scroll instead of jump
    controller.scrollTo(function(target) {

        TweenMax.to(window, 0.5, {
            scrollTo : {
                y : target, // scroll position of the target along y axis
                autoKill : true // allows user to kill scroll action smoothly
            },
            ease : Cubic.easeInOut
        });

    });

    /**
     * INTRO SCENE
     */
    var tl = new TimelineMax();
    tl.from('#intro_line', 1, { drawSVG: '0', delay: 2, ease: Power0.easeIn});
    // intro text
    introtext = new SplitText(".intro__content p", {type: "words,chars"});
    tl.staggerFrom(introtext.chars, 0.6, {opacity:0, scale: .1}, 0.05);
    tl.from('#intro_text', 1.5, { x: '160', ease: Bounce.easeOut });
    tl.from('#intro_mask', 1.5, { x: '-160', ease: Bounce.easeOut, delay: -1.5});
    var sceneIntro = new ScrollMagic.Scene({ triggerElement: '#intro' })
        .addIndicators({name: "Intro:", offsetX: 200 })
        .addTo(controller)
        .setTween(tl);

    /**
     * ABOUT SCENE
    **/
    var Atl = new TimelineMax();
    Atl.from('#about_line', 1, { drawSVG: '0', delay: 2, ease: Power0.easeIn});
    Atl.from('#about_text', 1.5, { x: '170', ease: Bounce.easeOut });
    Atl.from('#about_mask', 1.5, { x: '-170', ease: Bounce.easeOut, delay: -1.5});
    Atl.from('.project__content--text h1', 1.5, { opacity: '0', delay: -1.5});
    Atl.from('.project__content--text p', 1.5, { opacity: '0', ease: Power0.easeIn});
    Atl.restart();
    var sceneAbout = new ScrollMagic.Scene({ triggerElement: '#abo_intro'})
        .addIndicators({name: "About"})
        .addTo(controller)
        .setTween(Atl);
    /**
     * GENEALOGIA SCENE
     */
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
    Gtl.to(stamp, 0.1, {x: '-=20', y: '+=15'});
    Gtl.to(stamp, 0.01, { transformOrigin:"50% 0" });
    Gtl.to(tail1, 0.01, { transformOrigin:"0 50%" } );
    Gtl.to(tail2, 0.01, { transformOrigin:"0 50%" } );
    Gtl.to(stamp, 0.1, {x: '+=70', y: 70, scale: 1.4,  bezier: [{x:0, y:0}, {x:50,y:10},{x:-10,y:100}], ease: SlowMo.ease.config(0.7, 0.7, false)});
    Gtl.to(stamp, 1, { x: 95, rotation: '+=90',  ease:Elastic.easeOut});
    Gtl.to(tail1, 0.1, { rotation: '+=140', scale: 2, bezier: [{x:0, y:0}, {x:40,y:20},{x:40,y:50},{x:50,y:125}] }, 5.7);
    Gtl.to(tail2, 0.1, { rotation: '+=170', scale: 2, bezier: [{x:0, y:0}, {x:40,y:20},{x:40,y:60},{x:70,y:100}] }, 5.7);
    Gtl.to(tail1, 0.5, { rotation: '+=130', scale: 2.6, ease: Back.easeOut.config(4) }, 5.9 );
    Gtl.to(tail2, 0.5, { rotation: '+=100', scale: 2.6, ease: Back.easeOut.config(4) }, 6 );
    Gtl.to(gen_text, 1, { autoAlpha: 1 }, 6 );
    Gtl.restart();
    var sceneGenealogia = new ScrollMagic.Scene({ triggerElement: '#gen_intro'})
        .addIndicators({name: "Genealogia"})
        .addTo(controller)
        .setTween(Gtl);

    /**
     * SFRAGISTIKA SCENE
     */
    var Sfr = new TimelineMax();
    // letter, lenta1, lenta2, stampiron
    Sfr.from(letter, 1, {y: '-500', ease:Elastic.easeOut.config(1, 0.75) }, 1);
    Sfr.from(stampiron, 1, {y: '-500', ease:Elastic.easeOut.config(1, 0.75) }, 1);
    Sfr.from(glove, 1, { bezier: [{x: '0', y: '0'}, {x: '-400', y: '200'},  {x: '-500', y: '500'}] }, 1);
    Sfr.to(letter, 0.8, { y: '+=50', ease:Elastic.easeOut }, 2.2);
    Sfr.to(stampiron, 0.8, { y: '+=50', ease:Elastic.easeOut }, 2.2);
    Sfr.to(glove, 0.8, { y: '+=50', ease:Elastic.easeOut }, 2.2);
    Sfr.to(glove, 1, { attr:{src:'/img/glove2.png'}}, 2);
    Sfr.to(stamper, 0.01, { y: '+=45' }, 2); // Correct stamper position
    Sfr.to(glove, 1, { bezier: [{x: '0', y: '0'}, {x: '-400', y: '200'},  {x: '-500', y: '500'}]  });
    Sfr.to(stampiron, 1, { bezier: [{x: '0', y: '0'}, {x: '-400', y: '200'},  {x: '-500', y: '500'}] }, 3);
    Sfr.to(stamper, 0.01, { autoAlpha: 1 }, 3);
    Sfr.to(glove, 0.01, { css:{ zIndex: 2}}, 3.4);
    Sfr.to(stampiron, 0.01, { css:{ zIndex: 1}}, 3.4);
    Sfr.to(stamper, 1.5, {scale: 6 }, 3.3);
    Sfr.to(letter, 1, { y: '+=200' }, 3.3);
    Sfr.to(sfr_text, 1, { css:{ opacity: 1 }}, 3.3);
    Sfr.restart();
    var sceneSfragistika = new ScrollMagic.Scene({ triggerElement: '#sfr_intro'})
        .addIndicators({name: "Genealogia"})
        .addTo(controller)
        .setTween(Sfr);

    /**
     * GERALDIKA SCENE
     */
    var Grl = new TimelineMax();
    Grl.to(saber, 0.2, { rotation: '+=5' });
    Grl.to(saber, 0.5, { rotation: '-=10' });
    Grl.to(saber, 1.8, { rotation: '+=5' , ease:Elastic.easeOut.config(1, 0.75)});
    Grl.to(saber, 0.01, {attr:{src:'/img/scabbard.png'}}, 1.5);
    Grl.to(saber2, 0.01, { autoAlpha: 1 }, 1.5);
    Grl.to(garda, 0.01, { autoAlpha: 1}, 1.5);
    Grl.to(saber, 1, { x: '+=100', y: '-=25', rotation: '-=4' }, 2);
    Grl.to(saber2, 1, { x: '-=500', rotation: '+=2' }, 2);
    Grl.to(garda, 1, {x: '-=500', y: '-=7', rotation: '+=2' }, 2);
    Grl.to(knot, 1, { x: '-=40', y: '-=10', rotation: '+=10', ease: Back.easeOut }, 2);
    Grl.to(ger_text, 1, { css:{ opacity: 1 }}, 2.3 );
    Grl.to(ger_overlay, 1, { autoAlpha: 1  }, 2.3 );
    Grl.restart();
    var sceneGeraldika = new ScrollMagic.Scene({ triggerElement: '#ger_intro'})
        .addIndicators({name: "Geraldika"})
        .addTo(controller)
        .setTween(Grl);

    /**
     * RESOURCES TWEEN
     */
    var Res = new TimelineMax();
    // Tail movement
    Res.to(tail3, 1, { y: '+=30', rotation: '+=2', ease: Power0 });
    Res.to(tail3, 1, { y: '+=30', rotation: '-=2', ease: Power0 });
    Res.to(tail3, 1, { y: '+=20', ease: Elastic.easeOut.config(1.5, 0.4) });
    // Papers & glasses go down
    Res.to(paper3, 0.5, { x: '-=50', y: '+=330' });
    Res.to(paper1, 0.5, { x: '+=100', y: '+=290' }, 3.2);
    Res.to(paper2, 0.8, { y: '+=300', rotation: '+=2' }, 3.8);
    Res.to(paper2, 0.2, { y: '+=60', rotation: '-=2' });
    Res.to(paper2, 0.4, { y: '-=150', rotation: '+=2' });
    Res.to(glasses, 1, { y: '+=870', rotation: '-=100' }, 4.7);
    Res.to(glasses, 0.1, { css: {zIndex: 6 }});
    Res.to(paper2, 1, { y: '+=500', rotation: '-=3' });
    Res.to(glasses, 1, { x: '-=80', y: '+=50', rotation: '-=10' }, 5.9);
    Res.to(res_text, 1, { css:{ opacity: 1 }}, 5.9 );
    // paper3, paper1
    Res.to(paper3, 0.1, { y: '-=400' }, 5.9);
    Res.to(paper1, 0.1, { y: '-=400' }, 5.9);
    Res.to(paper1, 0.1, { css: { zIndex: 8 }}, 6);
    Res.to(paper3, 0.1, { css: { zIndex: 6 }}, 6);
    Res.to(signet, 0.1, { css: { zIndex: 7 }}, 6);
    Res.to(paper1, 0.5, { y: '+=200' }, 6.3);
    Res.to(signet, 1, { y: '+=100' }, 6.2);
    Res.to(signet, 1, { rotation: '-=20', ease: Elastic.easeOut }, 6.1);
    Res.to(paper3, 0.5, { y: '+=200' }, 6.1);
    Res.restart();
    var sceneResources = new ScrollMagic.Scene({ triggerElement: '#res_intro'})
        .addIndicators({name: "Resources"})
        .addTo(controller)
        .setTween(Res);

    /**
     *  PUBLISHING SCENE
     */
    var Pub = new TimelineMax();
    Pub.to(book, 1, { y: '+=940' });
    Pub.to(lupa, 0.3, { x: '-=20', y: '-=20' }, 0.5);
    Pub.to(lupa, 0.5, { x: '+=10', y: '+=40' }, 0.8);
    Pub.to(lupa, 0.5, { rotation: '-=2' }, 0.5);
    Pub.to(lupa, 0.5, { rotation: '+=2' }, 1);
    Pub.to(pub_text, 1, { css:{ opacity: 1 } }, 1);
    Pub.to(pub_overlay, 1, {  css:{ opacity: 1 } }, 1.2);
    Pub.to(hand, 1, { x: '+=100', y: '-=300' }, 1.5);
    Pub.to(hand, 0.8, { x: '+=100', y: '-=20' }, 2.3);
    Pub.to(lupa, 0.8, { x: '+=100', y: '-=20' }, 2.3);
    Pub.to(book, 1, { y: '+=500' }, 2.3);
    Pub.restart();
    var scenePublishing = new ScrollMagic.Scene({ triggerElement: '#pub_intro'})
        .addIndicators({name: "Publishing"})
        .addTo(controller)
        .setTween(Pub);
    /**
     * PROJECTS SCENE
     */
    var Pro = new TimelineMax();
    Pro.to(lupa2, 2, { x: '+=100', y: '+=300', rotation: '-=3' });
    Pro.to(lupa2, 1, { x: '-=180', y: '-=70', rotation: '+=3', scale: 1.3 });
    Pro.to(pro_text, 1, { css:{ opacity: 1 } });
    Pro.restart();
    var sceneProjects = new ScrollMagic.Scene({ triggerElement: '#pro_intro'})
        .addIndicators({name: "Projects"})
        .addTo(controller)
        .setTween(Pro);
    /**
     * EVENTS SCENE
     */
    var Eve = new TimelineMax();
    Eve.to(smoke1, 4, { x: '+=300', y: '-=250', rotation: '-=50', scale: 2, opacity: 0.8,
        ease:Linear.easeNone });
    Eve.to(smoke2, 4, { x: '-=300', y: '-=500', rotation: '+=20', scale: 1.5, opacity: 0.7,
        ease:Linear.easeNone }, 0);
    Eve.to(smoke3, 4, { x: '+=250', y: '-=350', rotation: '-=40', scale: 1.5, opacity: 0.6,
        ease:Linear.easeNone }, 0);
    Eve.to(smoke4, 4, { x: '-=350', y: '-=400', rotation: '+=70', scale: 1.5, opacity: 0.5,
        ease:Linear.easeNone }, 0);
    Eve.to(smoke5, 4, { x: '-=200', y: '-=400', rotation: '-=30', scale: 1.5, zIndex: 3,
        ease:Linear.easeNone }, 0);
    Eve.to(eve_text, 2, { opacity: 1 }, 0.5);
    Eve.fromTo(arrow, 3, { x: '1400', y: '-40'}, { x: '-1200', y: '40', ease: SlowMo.ease.config(0.5, 0.8, false)}, 0.5);
    Eve.restart();
    var sceneEvents = new ScrollMagic.Scene({ triggerElement: '#eve_intro'})
        .addIndicators({name: "Events"})
        .addTo(controller)
        .setTween(Eve);
    /**
     * GRANTS SCENE
     */
    var Gra = new TimelineMax();
    // gra_text,stamp2,knot4,paper4,hand3,hand4,wax
    Gra.to(knot4, 1, { y: '-=10' }, 0);
    Gra.to(hand4, 0.3, { y: '-=740', ease: Power2.easeOut }, 0);
    Gra.to(hand4, 0.1, { attr:{src:'/img/glove2.png', width: 335 } });
    Gra.to(hand4, 0.7, { y: '+=540', ease: Power3.easeIn });
    Gra.to(paper4, 0.7, { y: '+=550', ease: Power3.easeIn }, 1.1);
    Gra.to(stamp2, 0.7, { y: '+=460', ease: Power3.easeIn  }, 1.15);
    Gra.to(stamp2, 0.5, { y: '+=25', ease: Power2.easeOut });
    Gra.to(gra_text, 1, { opacity: 1 }, 2);
    Gra.to(hand4, 0.4, { y: '+=300', ease: Power3.easeIn }, 2);
    Gra.to('.wax', 0.1, { opacity: 1 }, 2.5);
    Gra.to(smoke6, 0.1, { opacity: 0.7 }, 2.5);
    Gra.to(wax1, 0.7, { zIndex: 2 }, 2.6);
    Gra.to(wax2, 0.6, { zIndex: 3 }, 3.3);
    Gra.to(wax3, 0.5, { zIndex: 4 }, 3.9);
    Gra.to(wax4, 0.3, { zIndex: 5 }, 4.4);
    Gra.to(wax5, 0.2, { zIndex: 6 }, 4.7);
    Gra.to(wax6, 0.1, { zIndex: 7 }, 4.8);
    Gra.to(wax10, 0.1, { zIndex: 8 }, 4.9);
    Gra.to(hand3, 0.1, { opacity: 1 }, 3.7);
    Gra.to(hand3, 0.5, { x: '+=350', y: '-=50', rotation: '+=50', opacity: 1, ease: Power2.easeOut }, 3.8);
    Gra.to(hand3, 0.1, { attr:{ src:'/img/glove3.png', width: '335'}}, 3.9);
    Gra.to(hand3, 0.5, { scale: 1.1, y: '+=30', rotation: '-=30' }, 4);
    Gra.to(stamp2, 0.5, { y: '-=200', rotation: '-=30' }, 4);
    Gra.to(hand3, 0.3, { scale: 0.95, y: '+=330', rotation: '+=20', ease: Power4.easeIn }, 4.8);
    Gra.to(stamp2, 0.3, { y: '+=420', rotation: '+=20', ease: Power4.easeIn }, 4.8);
    Gra.to(wax11, 0.1, { zIndex: 11 }, 5.1 );
    Gra.to(smoke6, 0.1, { zIndex: 12 }, 5.1 );
    Gra.to(paper4, 0.1, { y: '-=5', scale: 1.01, rotate: '-=1' }, 5.05);
    Gra.to(paper4, 0.1, { y: '+=5', scale: 0.99, rotate: '+=1' }, 5.15);
    Gra.to(stamp2, 0.01, { attr:{ src: '/img/stamp3.png' }}, 5.6);
    Gra.to(hand3, 0.3, { x: '+=100', y: '-=230', rotation: '-=20', opacity: 1 }, 5.6);
    Gra.to(stamp2, 0.3, { x: '+=100', y: '-=230', rotation: '-=20', opacity: 1 }, 5.6);
    Gra.to(smoke6, 2, { rotation: '+=10', scale: 5, opacity: 0 }, 5.6);
    Gra.to(hand3, 0.5, { x: '-=80', rotation: '+=2', attr:{ src:'/img/glove.png' }}, 5.9);
    Gra.to(stamp2, 0.3, { x: '+=60', y: '-=60', rotation: '+=50'}, 5.9);
    Gra.to(hand3, 0.5, { x: '-=1100', y: '+=40', rotation: '+=50'}, 6.2);
    Gra.to(stamp2, 1, { rotation: '+=7', ease: Bounce.easeOut }, 6.2);
    Gra.to(stamp2, 1, { x: '+=20 '}, 6.2 );
    Gra.restart();
    var sceneGrants = new ScrollMagic.Scene({ triggerElement: '#gra_intro'})
        .addIndicators({name: "Grants"})
        .addTo(controller)
        .setTween(Gra);

    /**
     * Menu interaction
     */
    //  Bind scroll to anchor links
    $(triggerBttn).on("click", function() {
        $(overlay).toggleClass('open');
        $(triggerBttn).toggleClass('is-active');
    });
    $(document).on("click", "a[href^=#]", function(e) {
        var id = $(this).attr("href");

        if($(id).length > 0) {
            e.preventDefault();
            $(overlay).toggleClass('open');
            $(triggerBttn).toggleClass('is-active');
            // trigger scroll
            controller.scrollTo(id);

            // If supported by the browser we can also update the URL
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }

    });
    /**
     * Slide scroller
     */
    var delta = 0;
    var currentSlideIndex = 0;
    var scrollThreshold = 4;
    function elementScroll (e) {

        // --- Scrolling up ---
        if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {

            delta--;

            if ( Math.abs(delta) >= scrollThreshold) {
                console.log('prev');
            }
        }

        // --- Scrolling down ---
        else {

            delta++;

            if (delta >= scrollThreshold) {
                console.log('next');
            }
        }

        // Prevent page from scrolling
        return false;
    }

    function prevSlide() {

        currentSlideIndex--;

        if (currentSlideIndex < 0) {
            currentSlideIndex = 0;
        }

    }

    function nextSlide() {

        currentSlideIndex++;

        if (currentSlideIndex > numSlides) {
            currentSlideIndex = numSlides;
        }

    }

    $(window).on({
        'DOMMouseScroll mousewheel': elementScroll
    });
});

function startIntrotextTween() {


    var tla = new TimelineMax();
    // About timeline animation
    // tla.from('.project__bcg', 3, { overflow: 'hidden', opacity: '0', backgroundSize: 'inherit', ease: Power0.easeIn, delay: -1 });
    tla.from('#about_line', 1, { drawSVG: '0', delay: 2, ease: Power0.easeIn});
    tla.from('#about_text', 1.5, { x: '170', ease: Bounce.easeOut });
    tla.from('#about_mask', 1.5, { x: '-170', ease: Bounce.easeOut, delay: -1.5});
    tla.from('.project__content--text h1', 1.5, { opacity: '0', delay: -1.5});
    tla.from('.project__content--text p', 1.5, { opacity: '0', ease: Power0.easeIn});
}

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

    Grl.to(saber, 1, { x: '+=100', y: '-=25', rotation: '-=4' }, 2);
    Grl.to(saber2, 1, { x: '-=500', rotation: '+=2' }, 2);
    Grl.to(garda, 1, {x: '-=500', y: '-=7', rotation: '+=2' }, 2);
    Grl.to(knot, 1, { x: '-=40', y: '-=10', rotation: '+=10', ease: Back.easeOut }, 2);
    Grl.to(ger_text, 1, { css:{ opacity: 1 }}, 2.3 );
    Grl.to(ger_overlay, 1, { autoAlpha: 1  }, 2.3 );

    Grl.restart();
}

function startResourcesTween() {
    /* Resources timeline */
    var Res = new TimelineMax();
    // Tail movement
    Res.to(tail3, 1, { y: '+=30', rotation: '+=2', ease: Power0 });
    Res.to(tail3, 1, { y: '+=30', rotation: '-=2', ease: Power0 });
    Res.to(tail3, 1, { y: '+=20', ease: Elastic.easeOut.config(1.5, 0.4) });
    // Papers & glasses go down
    Res.to(paper3, 0.5, { x: '-=50', y: '+=330' });
    Res.to(paper1, 0.5, { x: '+=100', y: '+=290' }, 3.2);
    Res.to(paper2, 0.8, { y: '+=300', rotation: '+=2' }, 3.8);
    Res.to(paper2, 0.2, { y: '+=60', rotation: '-=2' });
    Res.to(paper2, 0.4, { y: '-=150', rotation: '+=2' });
    Res.to(glasses, 1, { y: '+=870', rotation: '-=100' }, 4.7);
    Res.to(glasses, 0.1, { css: {zIndex: 6 }});
    Res.to(paper2, 1, { y: '+=500', rotation: '-=3' });
    Res.to(glasses, 1, { x: '-=80', y: '+=50', rotation: '-=10' }, 5.9);
    Res.to(res_text, 1, { css:{ opacity: 1 }}, 5.9 );
    // paper3, paper1
    Res.to(paper3, 0.1, { y: '-=400' }, 5.9);
    Res.to(paper1, 0.1, { y: '-=400' }, 5.9);
    Res.to(paper1, 0.1, { css: { zIndex: 8 }}, 6);
    Res.to(paper3, 0.1, { css: { zIndex: 6 }}, 6);
    Res.to(signet, 0.1, { css: { zIndex: 7 }}, 6);
    Res.to(paper1, 0.5, { y: '+=200' }, 6.3);
    Res.to(signet, 1, { y: '+=100' }, 6.2);
    Res.to(signet, 1, { rotation: '-=20', ease: Elastic.easeOut }, 6.1);
    Res.to(paper3, 0.5, { y: '+=200' }, 6.1);

    Res.restart();
}

function startPublishingTween() {
    var Pub = new TimelineMax();

    Pub.to(book, 1, { y: '+=940' });
    Pub.to(lupa, 0.3, { x: '-=20', y: '-=20' }, 0.5);
    Pub.to(lupa, 0.5, { x: '+=10', y: '+=40' }, 0.8);
    Pub.to(lupa, 0.5, { rotation: '-=2' }, 0.5);
    Pub.to(lupa, 0.5, { rotation: '+=2' }, 1);
    Pub.to(pub_text, 1, { css:{ opacity: 1 } }, 1);
    Pub.to(pub_overlay, 1, {  css:{ opacity: 1 } }, 1.2);
    Pub.to(hand, 1, { x: '+=100', y: '-=300' }, 1.5);
    Pub.to(hand, 0.8, { x: '+=100', y: '-=20' }, 2.3);
    Pub.to(lupa, 0.8, { x: '+=100', y: '-=20' }, 2.3);
    Pub.to(book, 1, { y: '+=500' }, 2.3);

    Pub.restart();
}

function startProjectsTween() {
    var Pro = new TimelineMax();

    Pro.to(lupa2, 2, { x: '+=100', y: '+=300', rotation: '-=3' });
    Pro.to(lupa2, 1, { x: '-=180', y: '-=70', rotation: '+=3', scale: 1.3 });
    Pro.to(pro_text, 1, { css:{ opacity: 1 } });

    Pro.restart();
}

function startEventsTween() {
    var Eve = new TimelineMax();

    Eve.to(smoke1, 4, { x: '+=300', y: '-=250', rotation: '-=50', scale: 2, opacity: 0.8,
        ease:Linear.easeNone });
    Eve.to(smoke2, 4, { x: '-=300', y: '-=500', rotation: '+=20', scale: 1.5, opacity: 0.7,
        ease:Linear.easeNone }, 0);
    Eve.to(smoke3, 4, { x: '+=250', y: '-=350', rotation: '-=40', scale: 1.5, opacity: 0.6,
        ease:Linear.easeNone }, 0);
    Eve.to(smoke4, 4, { x: '-=350', y: '-=400', rotation: '+=70', scale: 1.5, opacity: 0.5,
        ease:Linear.easeNone }, 0);
    Eve.to(smoke5, 4, { x: '-=200', y: '-=400', rotation: '-=30', scale: 1.5, zIndex: 3,
        ease:Linear.easeNone }, 0);
    Eve.to(eve_text, 2, { opacity: 1 }, 0.5);
    Eve.fromTo(arrow, 3, { x: '1400', y: '-40'}, { x: '-1200', y: '40', ease: SlowMo.ease.config(0.5, 0.8, false)}, 0.5);

    Eve.restart();
}

function startGrantsTween() {
    var Gra = new TimelineMax();
    // gra_text,stamp2,knot4,paper4,hand3,hand4,wax
    Gra.to(knot4, 1, { y: '-=10' }, 0);
    Gra.to(hand4, 0.3, { y: '-=740', ease: Power2.easeOut }, 0);
    Gra.to(hand4, 0.1, { attr:{src:'/img/glove2.png', width: 335 } });
    Gra.to(hand4, 0.7, { y: '+=540', ease: Power3.easeIn });
    Gra.to(paper4, 0.7, { y: '+=550', ease: Power3.easeIn }, 1.1);
    Gra.to(stamp2, 0.7, { y: '+=460', ease: Power3.easeIn  }, 1.15);
    Gra.to(stamp2, 0.5, { y: '+=25', ease: Power2.easeOut });
    Gra.to(gra_text, 1, { opacity: 1 }, 2);
    Gra.to(hand4, 0.4, { y: '+=300', ease: Power3.easeIn }, 2);
    Gra.to('.wax', 0.1, { opacity: 1 }, 2.5);
    Gra.to(smoke6, 0.1, { opacity: 0.7 }, 2.5);
    Gra.to(wax1, 0.7, { zIndex: 2 }, 2.6);
    Gra.to(wax2, 0.6, { zIndex: 3 }, 3.3);
    Gra.to(wax3, 0.5, { zIndex: 4 }, 3.9);
    Gra.to(wax4, 0.3, { zIndex: 5 }, 4.4);
    Gra.to(wax5, 0.2, { zIndex: 6 }, 4.7);
    Gra.to(wax6, 0.1, { zIndex: 7 }, 4.8);
    Gra.to(wax10, 0.1, { zIndex: 8 }, 4.9);
    Gra.to(hand3, 0.1, { opacity: 1 }, 3.7);
    Gra.to(hand3, 0.5, { x: '+=350', y: '-=50', rotation: '+=50', opacity: 1, ease: Power2.easeOut }, 3.8);
    Gra.to(hand3, 0.1, { attr:{ src:'/img/glove3.png', width: '335'}}, 3.9);
    Gra.to(hand3, 0.5, { scale: 1.1, y: '+=30', rotation: '-=30' }, 4);
    Gra.to(stamp2, 0.5, { y: '-=200', rotation: '-=30' }, 4);
    Gra.to(hand3, 0.3, { scale: 0.95, y: '+=330', rotation: '+=20', ease: Power4.easeIn }, 4.8);
    Gra.to(stamp2, 0.3, { y: '+=420', rotation: '+=20', ease: Power4.easeIn }, 4.8);
    Gra.to(wax11, 0.1, { zIndex: 11 }, 5.1 );
    Gra.to(smoke6, 0.1, { zIndex: 12 }, 5.1 );
    Gra.to(paper4, 0.1, { y: '-=5', scale: 1.01, rotate: '-=1' }, 5.05);
    Gra.to(paper4, 0.1, { y: '+=5', scale: 0.99, rotate: '+=1' }, 5.15);
    Gra.to(stamp2, 0.01, { attr:{ src: '/img/stamp3.png' }}, 5.6);
    Gra.to(hand3, 0.3, { x: '+=100', y: '-=230', rotation: '-=20', opacity: 1 }, 5.6);
    Gra.to(stamp2, 0.3, { x: '+=100', y: '-=230', rotation: '-=20', opacity: 1 }, 5.6);
    Gra.to(smoke6, 2, { rotation: '+=10', scale: 5, opacity: 0 }, 5.6);
    Gra.to(hand3, 0.5, { x: '-=80', rotation: '+=2', attr:{ src:'/img/glove.png' }}, 5.9);
    Gra.to(stamp2, 0.3, { x: '+=60', y: '-=60', rotation: '+=50'}, 5.9);
    Gra.to(hand3, 0.5, { x: '-=1100', y: '+=40', rotation: '+=50'}, 6.2);
    Gra.to(stamp2, 1, { rotation: '+=7', ease: Bounce.easeOut }, 6.2);
    Gra.to(stamp2, 1, { x: '+=20 '}, 6.2 );

    Gra.restart();
}