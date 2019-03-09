//test js 1 hello adwasfasdf has changed again 2
// added another line now 1
// added js hint line
// mon 17:48
// tues 12:31
// sat 12:54



//test js 2 hello 2 has changed again safdsafa
// addded another line
///we have just added jshint for the second time
// just added another line
// js hint line 2 3 4
// time is 17:11
// sat 12:54
/*
window.onload = function () {
    
    var tlOne = new TimelineLite();
    var tlTwo = new TimelineLite();
    var banner = document.getElementById("banner");
    var FrameOne = document.getElementById("FrameOne");
    var cta = document.getElementById("cta");
   
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {
		console.log("set up object positions on a new build this is after it has been watched for the 9th time");
    }

    function animateAdNew() {
      
    }
    

    initBannerAdd(); 
    //init(); ///start initialising everything   
    /////////////// /////////////// /////////////// //////////////  
};
*/
window.onload = function () {
    // sat 12:54
    //var tlOne, banner, background, backgroundimageOne, FrameOne, cta, bgexit;

    var tlOne = new TimelineLite();
    var tlTwo = new TimelineLite();
    var banner = document.getElementById("banner");
    var FrameOne = document.getElementById("FrameOne");
    var cta = document.getElementById("cta");
    var copySplitTextExample = document.getElementById("copySplitTextExample");
	
	var graphicSvgCodeOne = document.getElementById("graphicSvgCodeOne");

	var testText = document.getElementById("testText");
	
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {
		//TweenLite.set("testText", {perspective: "70px"});
		//TweenLite.set("testText", {transformStyle:"preserve-3d"})
        // TweenLite.set("testText", {rotationY:-180});
		
		//var tl = new TimelineLite();

        //tlOne.from("testText", 1, {opacity:0, scale:0});
		
		console.log(" i am animating");
  //.to(".card", 1, {rotationY:-180, repeat:1, yoyo:true});
		
    }

    function animateAdNew() {
		//weenMax.set(testText, {perspective: 70});
		
		//TweenLite.set(testText, {perspective:400} );
		//TweenLite.set(testText, {rotationY:-180});
		
		//TweenLite.set(testText, {transformStyle:"preserve-3d"});
		//TweenLite.set(testText, {width:20});
		//TweenLite.set(testText, {width:40});
		//TweenLite.set(testText, {perspective:80});
		
		
		  TweenMax.to(graphicSvgCodeOne, 0, {transformOrigin: "20% 90%", transformStyle: "preserve-3d", transformPerspective: 600, rotationX: 45, rotationY: 25,scale: 1.2});
	
		   TweenMax.to(graphicSvgCodeTwo, 0, {transformOrigin: "20% 90%", transformStyle: "preserve-3d", transformPerspective: 600, rotationX: 15, rotationY: 35,scale: 1.2});
		
		TweenMax.to(graphicSvgCodeThree, 0, {transformOrigin: "90% 10%", transformStyle: "preserve-3d", transformPerspective: 400, rotationX: -25, rotationY: 55,scale: 1.2});
		
		TweenMax.to(graphicSvgCodeFour, 0, {transformOrigin: "20% 60%", transformStyle: "preserve-3d", transformPerspective: 400, rotationX: -25, rotationY: 25,scale: 1.4});
		
		
		
		//TweenLite.set(testText, {perspective: "70px"});
		  //tlOne.from(testText,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=0")
		
		
		//var mySplitText = new SplitText(copySplitTextExample, {type:"words,chars", position:"relative"});
		
		//var mySplitText = new SplitText(copySplitTextExample,{type:"words,chars", position:"relative"});
		//TweenLite.set(copySplitTextExample, {perspective:400} );
		
		//TweenLite.to(copySplitTextExample, 0, {transformOrigin: "50% 50%", transformStyle: "preserve-3d", transformPerspective: 400, rotationX: 45, scale: 1.2});
		
		//TweenLite.set("copySplitTextExample", {perspective:800});
		//TweenLite.set("copySplitTextExample", {transformStyle:"preserve-3d"});
		//TweenLite.set("copySplitTextExample", {rotationY:-180});
		
		//TweenLite.set("copySplitTextExample", {perspective:800});
        //TweenLite.set("copySplitTextExample", {transformStyle:"preserve-3d"});
		//TweenLite.set("copySplitTextExample", {rotationY:-180});
		//TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
		
		
		
			//var tl = new TimelineLite();
    		//mySplitText = new SplitText(copySplitTextExample, {type:"words,chars", position:"relative"}), 
    		//chars = mySplitText.chars; //an array of all the divs that wrap each character
			
		    //TweenLite.to(copySplitTextExample, 0, {transformOrigin: "50% 50%", transformStyle: "preserve-3d", transformPerspective: 400, rotationX: 45, scale: 1.2});
		    //TweenMax.to(copySplitTextExample, 2, { transformOrigin: "50% 50%", transformStyle: "preserve-3d", transformPerspective: 70});
			//TweenLite.set(copySplitTextExample, {perspective:400});
			//TweenLite.set(copySplitTextExample, {perspective:400});
		    //TweenLite.set("copySplitTextExample", {perspective:800});
		
		
			//tl.staggerFrom(chars, 1.8, {opacity:0, transformStyle: "preserve-3d", transformPerspective: 0, scale:0, x:-380, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
		
			
			var tl = new TimelineLite();
			mySplitText = new SplitText(copySplitTextExample, {type:"words,chars"});
			charstoAniamte = mySplitText.chars; //an array of all the divs that wrap each character

			TweenLite.set(copySplitTextExample, {perspective:400});

			tl.staggerFrom(charstoAniamte, 12.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
		
			//var tl = new TimelineLite, 
    		//mySplitText = new SplitText(copySplitTextExample, {type:"words,chars"}), 
    		//chars = mySplitText.chars; //an array of all the divs that wrap each character

			//TweenLite.set(copySplitTextExample, {perspective:400});

			//tl.staggerFrom(chars, 12.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
		
		    //var mySplitText = new SplitText(copySplitTextExample,{type:"words,chars", position:"relative"});
			//chars = mySplitText.chars;
			//TweenLite.set(copySplitTextExample, {perspective:400} );
		
		    //tlMainAnimation = new TimelineMax();
            //tlMainAnimation.staggerFrom(chars, 0.5, {delay:0, opacity:0, transformStyle: "preserve-3d", transformPerspective: 400, scale:0.5, y:-100, x:-500,  rotationX:180, transformOrigin:"0% 50% -50", ease: Power4.easeOut}, 0.2)
		
		
		    //console.log(mySplitText.words)
		    //console.log(mySplitText.chars)
		
		
		
            //tlMainAnimation = new TimelineMax();
            //tlMainAnimation.staggerFrom(mySplitText.chars, mySpeedOne, {delay:0, opacity:0, scale:0.5, y:myypos, x:myxpos,  rotationX:180, transformOrigin:"0% 50% -50", ease: Power4.easeOut}, mySpeedTwo)
            //.to(mainskillstext, 1, {delay:5, opacity:0.5, x:myposEnd,  scale:1, ease: Power4.easeIn, onComplete:allDonethree});
		
		
		////split text code
		/*
		 var mySplitText = new SplitText(mytext,{type:"words,chars", position:"relative"});
			TweenLite.set(mytext, {perspective:400} );
            //tlMainAnimation = new TimelineMax();
            tlMainAnimation.staggerFrom(mySplitText.chars, mySpeedOne, {delay:0, opacity:0, scale:0.5, y:myypos, x:myxpos,  rotationX:180, transformOrigin:"0% 50% -50", ease: Power4.easeOut}, mySpeedTwo)
            .to(mainskillstext, 1, {delay:5, opacity:0.5, x:myposEnd,  scale:1, ease: Power4.easeIn, onComplete:allDonethree});
		*/
		
		
       /*
        tlTwo.from(FrameTwoImage,6, {y:-1000}, "-=0");
        
       
        tlOne.to(copyOne,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyOne,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyTwo,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyTwo,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyThree,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(copyThree,1, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        
        .to(copyFour,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        
        .to(printerBottom,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(FrameOneImage,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(printer,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(FrameTwoImage,1, {delay: 0, opacity:0, ease:Power4.easeout}, "-=1.5")
        .to(cta,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(cta,3, {delay: 0, opacity:1, onComplete:restartAnimation}, "-=0");
        
        
        tlOne.totalDuration(12);
		*/
    }
    

    ////timer
    var myVar = setInterval(function () {myTimer();}, 1000);
    function myTimer() {
        var d = new Date();
        //tlOne.totalDuration(10);
    }

    var animationLoop = 1;
    function restartAnimation() {
        if (animationLoop === 1) {
            /*
            animationLoop = animationLoop + 1;
            tlOne.restart();
            tlTwo.restart();
            */
        }
    }
    initBannerAdd(); 
    //init(); ///start initialising everything   
    /////////////// /////////////// /////////////// //////////////  
};