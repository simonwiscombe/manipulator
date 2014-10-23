/*** MANIPULATOR INTERACTIVE MUSIC VIDEO
 * "MUSIC GAMEO"
 * 
 * 2014
 * Designer/Code: 	Simon Wiscombe
 * Director:		Matt Yoka
 * Song: 		"Manipulator", Ty Segall
 * 
 */

//debug options
var debug = true;
var FPS = 24;
var wContent;

var isLoaded = false;
var loadingImage;
var loadCount;
var loadProgress = 0;

var playTime = 0;
var startTime = 0;
var deltaTime = 0;
var prevTime = 0;

var canvasBG;
var canvasFG;
var canvasC;
var canvasM;

var canvasBGelement;
var canvasFGelement;
var canvasCelement;
var canvasMelement;

var CANVAS_WIDTH = 1200;
var CANVAS_HEIGHT = 800;

var mode;
var playSection;
var menuSection;
var showMenu;
var isPlaying;
var frameNo = 0;
var mFrame = 0;

var timeSinceLastTap = 0;
var totalClicks = 0;

var frameCounter = 0;

var mouseX;
var mouseY;

//MENU VARS //////////
var bx0 = 700;
var by0 = 600;
var bx1 = 970;
var by1 = 670;

//VIDEO SECTIONS TRIGGERS
var trans01 = 0;		// House into room. 0:00 - 0:10
var startOf1 = 0;		// House Scene. 0:10 - 1:10
var trans12 = 70.5;		// NO ANIMATION, JUST CLOSE UP.
var startOf2 = 70.5;		// Close Up. 1:10 - 1:30
var trans23 = 91;		// Explosion of house. 1:30 - 1:38
var trans23end = 99.25;
var startOf3 = 99;		// Descend to desert. 1:38 - 1:47
var startOf4 = 108;		// Desert. 1:47-3:00
var transEnd = 185.3;	// Fish Bash. 3:00 - End.
var endTime = 189.7;

var tFrame = 0;
var hasTrans01;
var showTrans23;

//AUDIO AND VIDEO FILES /////////
var audio;
var vidRender1;
var vidRender2;
var vidRender3;
var vidR1ctx;
var vidR2ctx;
var vidR3ctx;

var transRender;
var canvasT;

var vidTrans;
var vidTctx;

var video1;
var vid1x = 65;
var vid1y = 370;

var video2;
var vid2x = -40;
var vid2y = 80;

var video3;
var vid3x = 220;

var vid3y = CANVAS_HEIGHT;

var videoFist;

var vidTV;
var tvCtx;
var tv1;
var tv2;
var tv3;
var tv4;
var tv5;
var tvChannel = 0;
var cTVShowing = 0;

var vid1Offset = 0.1;
var vid2Offset = 10.42;
var vid3Offset = 9.8;

var currentJet = 0;
var goJet = false;

var tyClicked = false;
var tyCounter = 0;

function setup() {
	playTime = 0;
	loadingImage = document.getElementById('loadingScreen');
	loadCount = 0;
	timeSinceLastTap = 0;

	//AUDIO ELEMENTS
	audio = document.getElementById('song');
	audio.volume = 0.7;
//	audio.load();

	//VIDEO ELEMENTS
	/*
	For each video file, you need to (1) have a canvas dedicated to it and (2) you need to add an event listener
	that calls a filtering effect on the file. Since each of the video files had a slightly different color
	pattern, I needed to make a different one for each.
	*/
	video1 = document.getElementById('video1');
	video1.autoplay = false;
	video1.addEventListener("play", filterEffect1, false);

	video2 = document.getElementById('video2');
	video2.autoplay = false;
	video2.addEventListener("play", filterEffect2, false);

	video3 = document.getElementById('video3');
	video3.autoplay = false;
	video3.addEventListener("play", filterEffect3, false);

	videoFist = document.getElementById('videoFist');
	videoFist.autoplay = false;
	videoFist.addEventListener("play", filterEffectTrans, false);
	videoFist.loop = false;
	
	// Each TV video file.
	/*
	Unlike the video files above, these don't need a filter placed on them, but I did need to know
	when they were playing so I added an event listener to each of them.
	*/
	tv1 = document.getElementById('tv1');
	tv1.autoplay = false;
	tv1.loop = true;
	tv1.volume = 0;
	tv1.addEventListener("play", renderTV1, false);

	tv2 = document.getElementById('tv2');
	tv2.autoplay = false;
	tv2.loop = true;
	tv2.volume = 0;
	tv2.addEventListener("play", renderTV2, false);

	tv3 = document.getElementById('tv3');
	tv3.autoplay = false;
	tv3.loop = true;
	tv3.volume = 0;
	tv3.addEventListener("play", renderTV3, false);

	tv4 = document.getElementById('tv4');
	tv4.autoplay = false;
	tv4.volume = 0;
	tv4.loop = true;
	tv4.addEventListener("play", renderTV4, false);

	tv5 = document.getElementById('tv5');
	tv5.autoplay = false;
	tv5.volume = 0;
	tv5.loop = true;
	tv5.addEventListener("play", renderTV5, false);

	// CANVAS ELEMENTS. GETTING THEM.
	canvasBGelement = document.getElementById('canvasBG');
	canvasFGelement = document.getElementById('canvasFG');
	canvasCelement = document.getElementById('canvasC');
	sectionElement = document.getElementById('gameo');
	canvasMelement = document.getElementById('canvasMenu');

	transRender = document.getElementById('canvasTransition');
	canvasT = transRender.getContext("2d");

	vidRender1 = document.getElementById("canvasM1");
	vidR1ctx = vidRender1.getContext("2d");

	vidRender2 = document.getElementById("canvasM2");
	vidR2ctx = vidRender2.getContext("2d");

	vidRender3 = document.getElementById("canvasM3");
	vidR3ctx = vidRender3.getContext("2d");

	vidTrans = document.getElementById("canvasVT");
	vidTctx = vidTrans.getContext("2d");

	vidTV = document.getElementById("canvasTV");
	tvCtx = vidTV.getContext("2d");

	// FOR TRACKING ANIMATIONS.
	hasTrans01 = false;

	// ADD MOUSE EVENT LISTENER TO CLICK CANVAS.
	// So I know where on the screen the user is clicking. If you look at the HTML file, you can
	// see that this CLICK canvas is on the top layer. 
	canvasCelement.addEventListener("click", mouseClicked, false);
	window.addEventListener("keypress", keyPressed, false );

	// GETTING THE 2D DRAWING TECHNIQUES YO
	canvasBG = canvasBGelement.getContext('2d');
	canvasFG = canvasFGelement.getContext('2d');
	canvasM = canvasMelement.getContext('2d');
	canvasC = canvasCelement.getContext('2d');

	mode = "menu";
	showMenu = true;
	isPlaying = false;
	playSection = 0;
	menuSection = 0;
	
	// SETTING THE FRAME RATE
	// Note that this won't be exactly 24 fps since 1000/24 isn't an even number, but it
	// was approximate enough. None of the things that need to be video synced rely on this.
	setInterval(function() {
		update();
		draw();
	}, 1000/FPS);

	// IMAGE FILE INITIALIZATION - See imageimporter.js.
	initImages();
}

////IMAGE FILES ///////// --> moved to imageimporter.js

function filterEffect1() {
	renderCanvas1(video1);
}

function filterEffect2() {
	renderCanvas2(video2);
}

function filterEffect3() {
	renderCanvas3(video3);
}

function filterEffectTrans() {
	renderCanvasT(videoFist);
}

// THE RENDER CANVAS FUNCTIONS.
/*
Each renderCanvasX function is very similar to the others, so I'll only comment one. 
*/
function renderCanvas1(vid) {
	// Don't run this script if the video is paused.
	if ( vid.paused || vid.embed ) return false;
	
	// Step 1: Draw the video frame onto the canvas.
	vidR1ctx.drawImage(vid,0,0);
	
	// Step 2: Pull the image data from said canvas.
	var vidData = vidR1ctx.getImageData(0,0,vidRender1.width, vidRender1.height);
	
	// Step 3: Go pixel by pixel and detect whether or not we're at the green screen.
	for ( var i=0; i<vidData.data.length; i+=4 ) {
		var makeTrans = false;

		// if green is super high, filter it out, since it's green screen.
		if ( vidData.data[i+1] > 230 ) {
			makeTrans = true;
		}
		// if green is high but not super high, check other colors.
		else if ( vidData.data[i+1] > 100 ) {
			// if the ratio of the average of green to the other colors is > 1.7, it's green screen.
			if ( vidData.data[i+1]/((vidData.data[i]+vidData.data[i+2])/2) > 1.7 ) {
				makeTrans = true;
			}
			// left side filter, since there is color blending at the edges of Ty.
			if ( vidData.data[i+1] > 130 && vidData.data[i-1]==0 ) {
				makeTrans = true;
			}
			// right side filter, for the same reason.
			if ( vidData.data[i+1] > 130 && (vidData.data[i+5]/((vidData.data[i+4]+vidData.data[i+6])/2) > 1.6 || vidData.data[i+5] > 230) ) {
				makeTrans = true;
			}
		}
		// Otherwise, reduce the overall green of that pixel. The green bounced back onto his face
		// during filming, the colors blended, etc. Basically reduce the green effect.
		else {
			vidData.data[i+1] *= 0.7;
		}
		
		// Make transparent the green screen pixel.
		if ( makeTrans ) { vidData.data[i+3] = 0; }
	}
	
	// Step 4: Render the modified image data back onto the canvas.
	vidR1ctx.putImageData(vidData,0,0);

	// Restart the function.
	setTimeout(function(){
		renderCanvas1(vid);
	}, 20);
}

function renderCanvas2(vid) {
	if ( vid.paused || vid.embed ) return false;
	vidR2ctx.drawImage(vid,-140,-257);
	var vidData = vidR2ctx.getImageData(0,0,vidRender2.width, vidRender2.height);

	for ( var i=0; i<vidData.data.length; i+=4 ) {
		var makeTrans = false;

		// if green is super high, filter it out.
		if ( vidData.data[i+1] > 240 && vidData.data[i] < 200 && vidData.data[i+2] < 200 ) {
			makeTrans = true;
		}
		// if green is high, check other colors.
		else if ( vidData.data[i+1] > 100 ) {
//			if the ratio of the average of green to the other colors is > 1.7, make trans.
			if ( vidData.data[i+1]/((vidData.data[i]+vidData.data[i+2])/2) > 1.7 ) {
				makeTrans = true;
			}
			// left side filter.
			if ( vidData.data[i+1] > 130 && vidData.data[i-1] == 0 ) {
				makeTrans = true;
			}
			// right side filter.
//			if ( vidData.data[i+1] > 130 && (vidData.data[i+5]/((vidData.data[i+4]+vidData.data[i+6])/2) > 1.6 || vidData.data[i+5] > 230) ) {
////			makeTrans = true;
//			}
		}
		else if ( vidData.data[i] == 25 && vidData.data[i+1] == 19 && vidData.data[i+2] == 26 ) {
			makeTrans = true;
		}
		else {
			vidData.data[i+1] *= 0.7;
		}

		if ( makeTrans ) { vidData.data[i+3] = 0; }
	}

	vidR2ctx.putImageData(vidData,0,0);

	setTimeout(function(){
		renderCanvas2(vid);
	}, 20);
}

function renderCanvas3(vid) {
	if ( vid.paused || vid.embed ) return false;
	
	vidR3ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	vidR3ctx.drawImage(vid,-250,vid3y);
	var vidData = vidR3ctx.getImageData(0,0,vidRender3.width, vidRender3.height);

	for ( var i=0; i<vidData.data.length; i+=4 ) {
		var makeTrans = false;

		// if green is super high, filter it out.
		if ( vidData.data[i] >= 253 && vidData.data[i+1] >= 253 && vidData.data[i+2] >= 253 ) {
			makeTrans = true;
		}
		if ( vidData.data[i+1] == 255 && vidData.data[i] < 240 && vidData.data[i+2] < 240) {
			makeTrans = true;
		}
		else if ( vidData.data[i+1] > 180 && vidData.data[i] < 180 && vidData.data[i+2] < 180 ) {
			makeTrans = true;
		}
		// if green is high, check other colors.
		else if ( vidData.data[i+1] > 80 ) {
			// if the ratio of the average of green to the other colors is > 1.7, make trans.
			if ( vidData.data[i+1]/vidData.data[i] > 1.2 && vidData.data[i+1]/vidData.data[i+2] > 1.5 ) {
				makeTrans = true;
			}
		}
		else {
			vidData.data[i+1] *= 0.8;
		}

		if ( makeTrans ) {
			vidData.data[i+3] = 0;
		}
	}

	vidR3ctx.putImageData(vidData,0,0);

	setTimeout(function(){
		renderCanvas3(vid);
	}, 20);
}

function renderCanvasT(vid) {
	if ( vid.paused || vid.embed ) return false;

	vidTctx.drawImage(vid,-111,0);
	var vidData = vidTctx.getImageData(0,0,vidTrans.width,vidTrans.height);

	for ( var i=0; i<vidData.data.length; i+=4 ) {
		var makeTrans = false;

		// if green is super high, filter it out.
		if ( vidData.data[i+1] > 240 && (vidData.data[i] < 200 || vidData.data[i+2] < 200) ) {
			makeTrans = true;
		}
		else if ( vidData.data[i+1]/((vidData.data[i]+vidData.data[i+2])/2) > 1.5 ) {
			makeTrans = true;
		}

		if ( makeTrans ) {
			vidData.data[i+3] = 0;
		}
		else {
			vidData.data[i] += 20;
			vidData.data[i+1] *= 0.8;
			vidData.data[i+2] = 150;
		}
	}

	vidTctx.putImageData(vidData,0,0);

	setTimeout(function(){
		renderCanvasT(vid);
	}, 20);
}

function renderTV1() {
	if ( tv1.paused || tv1.embed) return false;
	tvCtx.drawImage(tv1,0,0);
	setTimeout(function(){
		renderTV1(tv1);
	}, 20);
}

function renderTV2() {
	if ( tv2.paused || tv2.embed) return false;
	tvCtx.drawImage(tv2,0,0);
	setTimeout(function(){
		renderTV2(tv2);
	}, 20);
}

function renderTV3() {
	if ( tv3.paused || tv3.embed) return false;
	tvCtx.drawImage(tv3,0,0);
	setTimeout(function(){
		renderTV3(tv3);
	}, 20);
}

function renderTV4() {
	if ( tv4.paused || tv4.embed) return false;
	tvCtx.drawImage(tv4,0,0);
	setTimeout(function(){
		renderTV4(tv4);
	}, 20);
}

function renderTV5() {
	if ( tv5.paused || tv5.embed) return false;
	tvCtx.drawImage(tv5,0,0);
	setTimeout(function(){
		renderTV5(tv5);
	}, 20);
}

function update() {
	if ( !isLoaded ) {
		if ( checkLoaded() ) {
			loadingImage.style.visibility = 'hidden';
			loadingImage.style.display = 'none';

			isLoaded = true;
		}
	}
	else {
		timeSinceLastTap++;;

		if ( showMenu ) {
			if ( menuSection == 0 ) {
				if ( mFrame == 0 ) {
					mCurtainR.moveTo(CANVAS_WIDTH, 0);
					mCurtainL.moveTo(-mCurtainL.img.width, 0);
				}
				
				mFrame++;
				
				if ( mFrame >= 5*FPS && mFrame <= 6*FPS ) {
					mCurtainR.move( -24, 0);
					mCurtainL.move( 24, 0);
				}
				else if ( mFrame > 6*FPS ) {
					mCurtainL.resetPos();
					mCurtainR.resetPos();
					menuSection = 1;
					mFrame = 0;
				}
			}
			if ( menuSection >= 2 ) {
				mFrame++;

				if ( mFrame%4 == 0 ) {
					if ( c0l == mLogo.length-1 ) {
						c0l = 0;
					}
					else {
						c0l++;
					}
				}

				if ( menuSection == 2 ) {
					// MENU ANIMATIONS
					if ( mFrame < 5 ) 	  {
						mRopeL.move(0,156);
						mRopeR.move(0,156);
						for ( var i=0; i<mLogo.length; i++ ) {
							mLogo[i].move(0,156);
						}
					}
					else if (mFrame < 7)  {
						mRopeL.move(0,-30);
						mRopeR.move(0,-30);
						for ( var i=0; i<mLogo.length; i++ ) {
							mLogo[i].move(0,-30);
						}
					}
					else if (mFrame < 9)  {
						mRopeL.move(0,30);
						mRopeR.move(0,30);
						for ( var i=0; i<mLogo.length; i++ ) {
							mLogo[i].move(0,30);
						}
					}
					else if (mFrame < 10) {
						mRopeL.move(0,5);
						mRopeR.move(0,5);
						for ( var i=0; i<mLogo.length; i++ ) {
							mLogo[i].move(0,5);
						}
					}
					else if (mFrame < 11) {
						mRopeL.move(0,-5);
						mRopeR.move(0,-5);
						for ( var i=0; i<mLogo.length; i++ ) {
							mLogo[i].move(0,-5);
						}
					}

					if ( mFrame >= 11 ) {
						menuSection = 3;
						mFrame = 0;
					}
				}

				if ( menuSection == 4 ) {
					if ( mode != "play") {
						mFrame = 1;
						mode = "play";
					}
					// Animations

					if ( mFrame < 5 ) {
						for ( var i=0; i<mLogo.length; i++ ) {
							mLogo[i].move(0, 70*mFrame);
						}
					}

					if ( mFrame>30 && mFrame<60 ) {
						mRopeL.move(0,-10);
						mRopeR.move(0,-10);
					}

					if ( mFrame >= 70 ) {
						mCurtainL.move(-25,0);
						mCurtainR.move(25,0);
					}

					if ( mFrame > 100 ) {
						showMenu = false;
						mFrame = 0;
					}
				}
			}
		}

		if ( mode == "play" ) {
			if ( startTime == 0 ) {
				startTime = new Date().getTime();
				playTime = 0;
			}
			else {
				prevTime = playTime;
				var cTime = new Date().getTime();
				playTime = (cTime - startTime)/1000;
				deltaTime = playTime - prevTime;
			}

			frameNo++;
			
			if (frameNo%(4*FPS)==0) {
				checkSync();
			}

			// Handle the switches between each section of
			// music video.
			if ( playTime>=startOf1 && playTime<startOf2 && playSection < 1 ) {
				// start the audio
				audio.play();

				// in house
				video1.play();
				video1.currentTime = vid1Offset;
				video1.volume = 0;
				playSection = 1;
			}
			else if (playTime>=startOf2 && playTime<startOf3 && playSection<2 ) {
				// close up
				playSection = 2;
				video2.play();
				video2.currentTime = vid2Offset;		// FIXME needs to be adjusted.
				video2.volume = 0;
				resetVideo(1);
				resetVideo("tv1");
				resetVideo("tv2");
				resetVideo("tv3");
				resetVideo("tv4");
				resetVideo("tv5");
				tyCounter = 0;
			}
			else if ( playTime>=startOf3 && playTime<startOf4 && playSection<3) {
				// transition from sky to desert
				playSection = 3;
				video3.currentTime = vid3Offset;
				video3.play();
				video3.volume = 0;
				resetVideo(2);

				// set the location of all the outsite objects to below the screen.
				for ( var i=0; i<oGround.length; i++) { oGround[i].moveTo(false,oGround[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oSkyC.length; i++ ) { oSkyC[i].moveTo(false,oSkyC[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oMtnR.length; i++) { oMtnR[i].moveTo(false,oMtnR[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oMtnL.length; i++) { oMtnL[i].moveTo(false,oMtnL[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oSkyC.length; i++) { oSkyC[i].moveTo(false,oSkyC[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oWalnut.length; i++) { oWalnut[i].moveTo(false, oWalnut[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oLegs.length; i++) { oLegs[i].moveTo(false, oLegs[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oBush.length; i++) { oBush[i].moveTo(false, oBush[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oTree.length; i++) { oTree[i].moveTo(false, oTree[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oMan.length; i++) { oMan[i].moveTo(false, oMan[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oCloudL.length; i++) { oCloudL[i].moveTo(false, oCloudL[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oCloudR.length; i++) { oCloudR[i].moveTo(false, oCloudR[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oScrap.length; i++) { oScrap[i].moveTo(false, oScrap[i].y0+CANVAS_HEIGHT); }
				for ( var i=0; i<oBuild.length; i++) { oBuild[i].moveTo(false, oBuild[i].y0+CANVAS_HEIGHT); }
				
				vid3y = CANVAS_HEIGHT;
			}
			else if ( playTime>=startOf4 && playTime<transEnd && playSection<4) {
				// desert
				playSection = 4;
				tyCounter = 0;
			}
			else if (playTime>=transEnd && playTime<endTime && playSection<5) {
				// trigger the fist video. transition to the end.
				playSection = 5;
				videoFist.currentTime = 0;
				videoFist.play();
				videoFist.volume = 0;
			}
			else if (playTime>=endTime && playSection < 6) {
				// is end.
				playSection = 6;
			}

			// dealing with the TV
			if ( playSection == 1 ) {
				if ( tvChannel != cTVShowing ) {
					resetVideo("tv1");
					resetVideo("tv2");
					resetVideo("tv3");
					resetVideo("tv4");
					resetVideo("tv5");
					
					switch(tvChannel) {
					case 1:
						tv1.play();
						cTVShowing = 1;
						break;
					case 2:
						tv2.play();
						cTVShowing = 2;
						break;
					case 3:
						tv3.play();
						cTVShowing = 3;
						break;
					case 4:
						tv4.play();
						cTVShowing = 4;
						break;
					case 5:
						tv5.play();
						cTVShowing = 5;
						break;
					}
				}
			}

			// --- Animations below. Some in code, some not. ---
			// curtains closing at end of gameo.
			if ( playSection == 3 ) {
				for ( var i=0; i<oGround.length; i++) { oGround[i].move(0,-deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oSkyC.length; i++ ) { oSkyC[i].move(0,-deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oMtnR.length; i++) { oMtnR[i].move(0,-deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oMtnL.length; i++) { oMtnL[i].move(0,-deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oWalnut.length; i++) { oWalnut[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oLegs.length; i++) { oLegs[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oBush.length; i++) { oBush[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oTree.length; i++) { oTree[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oMan.length; i++) { oMan[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oCloudR.length; i++ ) { oCloudR[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oCloudL.length; i++ ) { oCloudL[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oScrap.length; i++ ) { oScrap[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				for ( var i=0; i<oBuild.length; i++ ) { oBuild[i].move(0, -deltaTime*CANVAS_HEIGHT/(startOf4-startOf3)); }
				
				vid3y -= deltaTime*CANVAS_HEIGHT/(startOf4-startOf3);
			}
			
			// jet and satellite trigger
			if ( playSection == 4 ) {
				if ( frameNo%240 == 0 && playTime < transEnd-5 ) {
					goJet = true;
				}
				
				if ( goJet ) {
					if ( currentJet == 0 ) {
						// jet 1
						for(var i=0; i<oJet1.length; i++ ) { oJet1[i].move(-20,0); }
						if ( oJet1[0].x < -oJet1[0].img.width ) {
							goJet = false;
							for(var i=0; i<oJet1.length; i++ ) { oJet1[i].moveTo(oJet1[i].x0, oJet1[i].y0); }
							currentJet=1;
						}
					}
					else if ( currentJet == 1 ) {
						// jet 2
						for(var i=0; i<oJet2.length; i++ ) { oJet2[i].move(25,0); }
						if ( oJet2[0].x > CANVAS_WIDTH ) {
							goJet = false;
							for(var i=0; i<oJet2.length; i++ ) { oJet2[i].moveTo(oJet2[i].x0, oJet2[i].y0); }
							currentJet=2;
						}

					}
					else if ( currentJet == 2 ) {
						// sat
						for(var i=0; i<oSat.length; i++ ) { oSat[i].move(-11,0); }
						if ( oSat[0].x < -oSat[0].img.width ) {
							goJet = false;
							for(var i=0; i<oSat.length; i++ ) { oSat[i].moveTo(oSat[i].x0, oSat[i].y0); }
							currentJet=0;
						}

					}
				}
			}

			if ( playSection == 6 ) {
				if ( frameCounter == 0 ) {
					mCurtainL.moveTo(-mCurtainL.img.width, 0 );
					mCurtainR.moveTo(CANVAS_WIDTH,0);
				}
				frameCounter += deltaTime;
				 
				if ( frameCounter <= 1.1 ) {
					if ( mCurtainL.x < 0 ) {
						mCurtainL.move((mCurtainL.img.width)*deltaTime,0);
					}
					else {
						mCurtainL.moveTo(mCurtainL.x0, mCurtainL.y0);
					}
					
					if ( mCurtainR.x > mCurtainR.x0 ) {
						mCurtainR.move(-(mCurtainR.img.width)*deltaTime,0);
					}
					else {
						mCurtainR.moveTo(mCurtainR.x0, mCurtainR.y0);
					}
				}
				else if ( frameCounter >= 1 ) {
					mCurtainL.moveTo(mCurtainL.x0, mCurtainL.y0);
					mCurtainR.moveTo(mCurtainR.x0, mCurtainR.y0);
				}
				
				if (frameCounter >= 1) {
					playSection = 0;
					mode = "menu";
					resetAll();
				}
			}

			if ( playTime>=trans23 && playTime<=trans23end ) {
				if ( !showTrans23 ) {
					console.log("transition from 2 to 3");
					showTrans23 = true;
				}
			}
			else if ( showTrans23 ) {
				showTrans23 = false;
			}
		}
	}
}

function draw() {
	// clear everything
	canvasBG.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	canvasFG.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	canvasM.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	canvasT.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	canvasC.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

	// draw a black background
	canvasBG.fillStyle = "rgb(0,0,0)";
	canvasBG.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

	if (mode=="play"){
		if ( playSection == 1 ) {
			if ( timeSinceLastTap >= 240 && totalClicks < 5) {
				drawHelp();
			}
			// indoors
			canvasBG.drawImage(roomBG[c1bg].img, roomBG[c1bg].x, roomBG[c1bg].y);

			canvasBG.drawImage(iWall[c1wa].img, iWall[c1wa].x, iWall[c1wa].y);
			canvasBG.drawImage(iWall2[c1w2].img, iWall2[c1w2].x, iWall2[c1w2].y);
			canvasBG.drawImage(iWall3[c1w3].img, iWall3[c1w3].x, iWall3[c1w3].y);
			canvasBG.drawImage(iCeiling[c1c].img, iCeiling[c1c].x, iCeiling[c1c].y);
			canvasBG.drawImage(iFloor[c1f].img, iFloor[c1f].x, iFloor[c1f].y);
			canvasBG.drawImage(iWindow[c1w].img, iWindow[c1w].x, iWindow[c1w].y);
			canvasBG.drawImage(iCurtainL[c1cL].img, iCurtainL[c1cL].x, iCurtainL[c1cL].y);
			canvasBG.drawImage(iCurtainR[c1cR].img, iCurtainR[c1cR].x, iCurtainR[c1cR].y);
			canvasBG.drawImage(iPoster[c1p].img, iPoster[c1p].x, iPoster[c1p].y);
			canvasBG.drawImage(iBoard[c1b].img, iBoard[c1b].x, iBoard[c1b].y);
			canvasBG.drawImage(iBed[c1bed].img, iBed[c1bed].x, iBed[c1bed].y);
			canvasBG.drawImage(iTrash[c1t].img, iTrash[c1t].x, iTrash[c1t].y);
			canvasBG.drawImage(iShelft[c1st].img, iShelft[c1st].x, iShelft[c1st].y);
			canvasBG.drawImage(iShelf1[c1s1].img, iShelf1[c1s1].x, iShelf1[c1s1].y);
			canvasBG.drawImage(iShelf2[c1s2].img, iShelf2[c1s2].x, iShelf2[c1s2].y);
			canvasBG.drawImage(iShelf3[c1s3].img, iShelf3[c1s3].x, iShelf3[c1s3].y);
			canvasBG.drawImage(iMuy[c1m].img, iMuy[c1m].x, iMuy[c1m].y);
			
			canvasBG.drawImage(iChair[c1ch].img, iChair[c1ch].x, iChair[c1ch].y);
			canvasBG.drawImage(iTVBlank.img, iTVBlank.x, iTVBlank.y);
			canvasFG.drawImage(iTV.img, iTV.x, iTV.y);
			
			if ( tyClicked ) {
				tyCounter++;
				var j = 2;
				
				if ( tyCounter >= j*0 ) {
					canvasBG.drawImage(iHand1[0].img, iHand1[0].x, iHand1[0].y);
				}
				if ( tyCounter >= j*1 ) {
					canvasBG.drawImage(iHand1[1].img, iHand1[1].x, iHand1[1].y);
				}
				if ( tyCounter >= j*2 ) {
					canvasBG.drawImage(iHand1[2].img, iHand1[2].x, iHand1[2].y);
				}
				if ( tyCounter >= j*3 ) {
					canvasBG.drawImage(iHand1[3].img, iHand1[3].x, iHand1[3].y);
				}
				if ( tyCounter >= j*4 ) {
					canvasBG.drawImage(iHand1[4].img, iHand1[4].x, iHand1[4].y);
				}
				if ( tyCounter >= j*5 ) {
					canvasBG.drawImage(iHand1[5].img, iHand1[5].x, iHand1[5].y);
				}
				if ( tyCounter >= j*6 ) {
					canvasBG.drawImage(iHand1[6].img, iHand1[6].x, iHand1[6].y);
				}
				if ( tyCounter >= j*7 ) {
					canvasBG.drawImage(iHand1[7].img, iHand1[7].x, iHand1[7].y);
				}
				if ( tyCounter >= j*8 ) {
					canvasBG.drawImage(iHand1[8].img, iHand1[8].x, iHand1[8].y);
				}
				if ( tyCounter >= j*9 ) {
					canvasBG.drawImage(iHand1[9].img, iHand1[9].x, iHand1[9].y);
				}
				if ( tyCounter >= j*10 ) {
					canvasBG.drawImage(iHand1[10].img, iHand1[10].x, iHand1[10].y);
				}
				if ( tyCounter >= j*11 ) {
					canvasBG.drawImage(iHand1[11].img, iHand1[11].x, iHand1[11].y);
				}
				
				if ( tyCounter == j*1 ) {
					c1cR = Math.floor((Math.random()*iCurtainR.length));
				}
				else if ( tyCounter == j*2 ) {
					c1ch = Math.floor((Math.random()*iChair.length));
				}
				else if ( tyCounter == j*3 ) {
					c1c = Math.floor((Math.random()*iCeiling.length));
				}
				else if ( tyCounter == j*4 ) {
					c1t = Math.floor((Math.random()*iTrash.length));
				}
				else if ( tyCounter == j*5 ) {
					c1p = Math.floor((Math.random()*iPoster.length));
					c1w3 = Math.floor((Math.random()*iWall3.length));
				}
				else if ( tyCounter == j*6 ) {
					c1bed = Math.floor((Math.random()*iBed.length));
				}
				else if ( tyCounter == j*7 ) {
					c1s1 = Math.floor((Math.random()*iShelf1.length) );
					c1s2 = Math.floor((Math.random()*iShelf2.length) );
					c1s3 = Math.floor((Math.random()*iShelf3.length) );
					c1st = Math.floor((Math.random()*iShelft.length) );
					
					c1w2 = Math.floor((Math.random()*iWall2.length));
				}
				else if ( tyCounter == j*8 ) {
					c1wa = Math.floor((Math.random()*iWall.length) );
					c1b = Math.floor((Math.random()*iBoard.length));
				}
				else if ( tyCounter == j*9 ) {
					c1cL = Math.floor((Math.random()*iCurtainL.length) );
				}
				else if ( tyCounter == j*10 ) {
					c1w = Math.floor((Math.random()*iWindow.length) );
				}
				else if ( tyCounter == j*11 ) {
					c1f = Math.floor((Math.random()*iFloor.length));
				}
				else if ( tyCounter == j*12 ) {
					tvChannel = Math.floor((Math.random()*5));
				}
				else if ( tyCounter > j*12 ){
					tyClicked = false;
					tyCounter = 0;
				}
			}
		}
		else if ( playSection == 2 ) {
			// close up
			canvasBG.drawImage(uBG[c2bg].img, uBG[c2bg].x, uBG[c2bg].y);
			
			canvasBG.drawImage(uIcu[c2icu].img, uIcu[c2icu].x, uIcu[c2icu].y);
			canvasBG.drawImage(uIcuR[c2icuR].img, uIcuR[c2icuR].x, uIcuR[c2icuR].y);
			
			canvasBG.drawImage(uWall1[c2w1].img, uWall1[c2w1].x, uWall1[c2w1].y);
			canvasBG.drawImage(uWall2[c2w2].img, uWall2[c2w2].x, uWall2[c2w2].y);
			canvasBG.drawImage(uWall3[c2w3].img, uWall3[c2w3].x, uWall3[c2w3].y);
			canvasBG.drawImage(uWall4[c2w4].img, uWall4[c2w4].x, uWall4[c2w4].y);
			canvasBG.drawImage(uWall5[c2w5].img, uWall5[c2w5].x, uWall5[c2w5].y);
			
			if ( frameNo%16 == 0) {
				if ( c2s == uScalp.length-1 ) {
					c2s = 0;
				}
				else {
					c2s++;
				}
			}
			canvasFG.drawImage(uScalp[c2s].img, uScalp[c2s].x, uScalp[c2s].y);
			
			if ( !showScalp ) {
				canvasBG.drawImage(uHead[c2h].img, uHead[c2h].x, uHead[c2h].y);
			}
			
			canvasFG.drawImage(uShirt[c2sh].img, uShirt[c2sh].x, uShirt[c2sh].y);
			canvasFG.drawImage(uBeard[c2Brd].img, uBeard[c2Brd].x, uBeard[c2Brd].y);
			canvasFG.drawImage(uEyes[c2e].img, uEyes[c2e].x, uEyes[c2e].y);
		}
		else if ( playSection == 3 ) {
			canvasBG.drawImage(sBG[c5bg].img, sBG[c5bg].x, sBG[c5bg].y);
			// sky down onto ground
			canvasBG.drawImage(oSkyC[c3sC].img, oSkyC[c3sC].x, oSkyC[c3sC].y);
			
			canvasBG.drawImage(oCloudL[c3cL].img, oCloudL[c3cL].x, oCloudL[c3cL].y);
			canvasBG.drawImage(oCloudR[c3cR].img, oCloudR[c3cR].x, oCloudR[c3cR].y);
			
			canvasBG.drawImage(oMtnR[c3mR].img, oMtnR[c3mR].x, oMtnR[c3mR].y);
			canvasBG.drawImage(oMtnL[c3mL].img, oMtnL[c3mL].x, oMtnL[c3mL].y);
			
			canvasBG.drawImage(oGround[c3g].img, oGround[c3g].x, oGround[c3g].y);
			
			canvasBG.drawImage(oScrap[c3ss].img, oScrap[c3ss].x, oScrap[c3ss].y);
			canvasBG.drawImage(oBuild[c3bu].img, oBuild[c3bu].x, oBuild[c3bu].y);
			
			canvasBG.drawImage(oLegs[c3l].img, oLegs[c3l].x, oLegs[c3l].y);
			canvasBG.drawImage(oMan[c3m].img, oMan[c3m].x, oMan[c3m].y);
			
			canvasBG.drawImage(oTree[c3t].img, oTree[c3t].x, oTree[c3t].y);
			canvasBG.drawImage(oWalnut[c3w].img, oWalnut[c3w].x, oWalnut[c3w].y);
			canvasBG.drawImage(oBush[c3b].img, oBush[c3b].x, oBush[c3b].y);
		}
		else if ( playSection >= 4 ) {
			// chilling in desert

			canvasBG.drawImage(sBG[c5bg].img, sBG[c5bg].x, sBG[c5bg].y);

			// COPY AND PASTE FROM OUTDOOR SECTION...
			canvasBG.drawImage(oSkyC[c3sC].img, oSkyC[c3sC].x, oSkyC[c3sC].y);
			
			canvasBG.drawImage(oCloudL[c3cL].img, oCloudL[c3cL].x, oCloudL[c3cL].y);
			canvasBG.drawImage(oCloudR[c3cR].img, oCloudR[c3cR].x, oCloudR[c3cR].y);
			
			canvasBG.drawImage(oMtnR[c3mR].img, oMtnR[c3mR].x, oMtnR[c3mR].y);
			canvasBG.drawImage(oMtnL[c3mL].img, oMtnL[c3mL].x, oMtnL[c3mL].y);
			
			canvasBG.drawImage(oGround[c3g].img, oGround[c3g].x, oGround[c3g].y);
			
			canvasBG.drawImage(oScrap[c3ss].img, oScrap[c3ss].x, oScrap[c3ss].y);
			canvasBG.drawImage(oBuild[c3bu].img, oBuild[c3bu].x, oBuild[c3bu].y);
			
			canvasBG.drawImage(oSat[c3sat].img, oSat[c3sat].x, oSat[c3sat].y);
			canvasBG.drawImage(oJet1[c3j1].img, oJet1[c3j1].x, oJet1[c3j1].y);
			canvasBG.drawImage(oJet2[c3j2].img, oJet2[c3j2].x, oJet2[c3j2].y);
			
			canvasBG.drawImage(oLegs[c3l].img, oLegs[c3l].x, oLegs[c3l].y);
			canvasBG.drawImage(oMan[c3m].img, oMan[c3m].x, oMan[c3m].y);
			
			canvasBG.drawImage(oTree[c3t].img, oTree[c3t].x, oTree[c3t].y);
			canvasBG.drawImage(oWalnut[c3w].img, oWalnut[c3w].x, oWalnut[c3w].y);
			canvasBG.drawImage(oBush[c3b].img, oBush[c3b].x, oBush[c3b].y);
			
			if ( tyClicked ) {
				tyCounter++;
				var j = 2;
				
				if ( tyCounter >= j*0 ) {
					canvasBG.drawImage(oHand[0].img, oHand[0].x, oHand[0].y);
				}
				if ( tyCounter >= j*1 ) {
					canvasBG.drawImage(oHand[1].img, oHand[1].x, oHand[1].y);
				}
				if ( tyCounter >= j*2 ) {
					canvasBG.drawImage(oHand[2].img, oHand[2].x, oHand[2].y);
				}
				if ( tyCounter >= j*3 ) {
					canvasBG.drawImage(oHand[3].img, oHand[3].x, oHand[3].y);
				}
				if ( tyCounter >= j*4 ) {
					canvasBG.drawImage(oHand[4].img, oHand[4].x, oHand[4].y);
				}
				if ( tyCounter >= j*5 ) {
					canvasBG.drawImage(oHand[5].img, oHand[5].x, oHand[5].y);
				}
				if ( tyCounter >= j*6 ) {
					canvasBG.drawImage(oHand[6].img, oHand[6].x, oHand[6].y);
				}
				if ( tyCounter >= j*7 ) {
					canvasBG.drawImage(oHand[7].img, oHand[7].x, oHand[7].y);
				}
				if ( tyCounter >= j*8 ) {
					canvasBG.drawImage(oHand[8].img, oHand[8].x, oHand[8].y);
				}
				if ( tyCounter >= j*9 ) {
					canvasBG.drawImage(oHand[9].img, oHand[9].x, oHand[9].y);
				}
				if ( tyCounter >= j*10 ) {
					canvasBG.drawImage(oHand[10].img, oHand[10].x, oHand[10].y);
				}
				
				if ( tyCounter == j*1 ) {
					c3w = Math.floor((Math.random()*oWalnut.length));
				}
				else if ( tyCounter == j*2 ) {
					c3t = Math.floor((Math.random()*oTree.length));
				}
				else if ( tyCounter == j*3 ) {
					c3mL = Math.floor((Math.random()*oMtnL.length));
				}
				else if ( tyCounter == j*4 ) {
					c3bu = Math.floor((Math.random()*oBuild.length));
				}
				else if ( tyCounter == j*5 ) {
					c3mR = Math.floor((Math.random()*oMtnR.length));
				}
				else if ( tyCounter == j*6 ) {
					c3m = Math.floor((Math.random()*oMan.length));
				}
				else if ( tyCounter == j*7 ) {
					c3b = Math.floor((Math.random()*oBush.length) );
				}
				else if ( tyCounter == j*8 ) {
					c5bg = Math.floor((Math.random()*sBG.length) );
				}
				else if ( tyCounter == j*9 ) {
					c3cR = Math.floor((Math.random()*oCloudR.length) );
				}
				else if ( tyCounter == j*10 ) {
					c3s = Math.floor((Math.random()*oSkyC.length) );
					c3ss = Math.floor((Math.random()*oScrap.length) );
				}
				else if ( tyCounter == j*11 ) {
					c3cL = Math.floor((Math.random()*oCloudL.length));
				}
				else if ( tyCounter > j*12 ){
					tyClicked = false;
					tyCounter = 0;
				}
			}
		}

		if ( playSection >= 5 ) {
			if ( playTime >= endTime-2.2 ) {
				canvasT.drawImage(cracks[2].img, cracks[2].x, cracks[2].y);
			}
			else if ( playTime >= endTime-2.8 ) {
				canvasT.drawImage(cracks[1].img, cracks[1].x, cracks[1].y);
			}
			else if ( playTime >= endTime-3.8 ) {
				canvasT.drawImage(cracks[0].img, cracks[0].x, cracks[0].y);
			}
		}
		

		if ( playSection == 6 ) {
			canvasM.drawImage(mCurtainL.img, mCurtainL.x, mCurtainL.y);
			canvasM.drawImage(mCurtainR.img, mCurtainR.x, mCurtainR.y);
		}

		if ( debug ) {
			
		}
	}

	if (showMenu) {
		if ( menuSection == 0 ) {
			canvasM.drawImage(mInstructions.img, mInstructions.x, mInstructions.y);
			canvasM.drawImage(mCurtainL.img, mCurtainL.x, mCurtainL.y);
			canvasM.drawImage(mCurtainR.img, mCurtainR.x, mCurtainR.y);
		}
		if ( menuSection == 1 || menuSection == 3 ) {
			if ( timeSinceLastTap >= 360 && totalClicks < 6 ) {
				drawHelp();
			}
		}
		
		if ( menuSection == 1 ) {
			canvasM.drawImage(mCurtainL.img, mCurtainL.x, mCurtainL.y);
			canvasM.drawImage(mCurtainR.img, mCurtainR.x, mCurtainR.y);
		}
		else if ( menuSection >= 2 ) {
			canvasM.drawImage(mCurtainL.img, mCurtainL.x, mCurtainL.y);
			canvasM.drawImage(mCurtainR.img, mCurtainR.x, mCurtainR.y);

			canvasM.drawImage(mRopeL.img, mRopeL.x, mRopeL.y);
			canvasM.drawImage(mRopeR.img, mRopeR.x, mRopeR.y);
			canvasM.drawImage(mLogo[c0l].img, mLogo[c0l].x, mLogo[c0l].y);
		}
	}

	// TRANSITIONS
	if ( showTrans23 ) {
		// 8 seconds ==> 192
		tFrame++;
		if ( tFrame < 20 ) {
			if ( tFrame%16==0 ) {
				canvasT.drawImage(chaos23[0],0,0);
			}
			if ( tFrame%6 == 0 ) {
				canvasT.drawImage(chaos23[1],0,0);
			}
		}
		if ( tFrame >= 50 && tFrame <= 70 ) {
			if ( tFrame%16 == 0 ) {
				canvasT.drawImage(chaos23[0],0,0);
			}
			if ( tFrame%4 == 0 ) {
				canvasT.drawImage(chaos23[1],0,0);
				canvasT.drawImage(chaos23[2],0,0);
			}
			if ( tFrame%3 == 0 ) {
				canvasT.drawImage(chaos23[3],0,0);
			}
			if ( tFrame%25 == 0 ) {
				canvasT.drawImage(chaos23[6],0,0);
			}
		}

		if ( tFrame > 90 ) {
			if ( tFrame%16 == 0 ) {
				canvasT.drawImage(chaos23[0],0,0);
			}
			if ( tFrame%4 == 0 ) {
				canvasT.drawImage(chaos23[1],0,0);
				canvasT.drawImage(chaos23[2],0,0);
			}
			if ( tFrame%3 == 0 ) {
				canvasT.drawImage(chaos23[3],0,0);
			}
			if ( tFrame%25 == 0 ) {
				canvasT.drawImage(chaos23[6],0,0);
			}
			if ( tFrame%2 == 0 ) {
				canvasT.drawImage(chaos23[4],0,0);
			}
			if ( tFrame%6 == 0 ) {
				canvasT.drawImage(chaos23[5],0,0);
			}
		}

		if ( tFrame> 120 ) {
			if ( tFrame%6==0 ) {
				canvasT.drawImage(chaos23[6],0,0);
			}
		}

		if ( tFrame>150 ) {
			if ( tFrame%2 == 0 ) {
				canvasT.drawImage(chaos23[7],0,0);
			}
			else {
				canvasT.drawImage(chaos23[8],0,0);
			}
		}

		if ( playTime >= trans23end-1 ) {
			canvasT.drawImage(explosion23[tFrame%4].img, 0, 0);
		}
	}

	if ( debug ) {

	}
}

var click = false;

function mouseClicked(e) {
	timeSinceLastTap = 0;
	totalClicks++;
	
	mouseX = (e.offsetX || e.clientX - $(gameo).offset().left + window.pageXOffset );
	mouseY = (e.offsetY || e.clientY - $(gameo).offset().top + window.pageYOffset );
	
//	mouseX = (event.hasOwnProperty("offsetLeft") ? event.offsetLeft: event.layerX);
//	mouseY = (event.hasOwnProperty("offsetTop") ? event.offsetTop: event.layerY);
//	mouseX = event.x - sectionElement.offsetLeft;
//	mouseY = event.y - sectionElement.offsetTop;

	if (mode=="menu"){
		if ( menuSection == 1 ) {
			menuSection = 2;
		}
		if ( menuSection == 3 ) {
			if ( mouseX > mLogo[c0l].x && mouseX < mLogo[c0l].x+mLogo[c0l].img.width ) {
				if ( mouseY > mLogo[c0l].y && mouseY < mLogo[c0l].y+mLogo[c0l].img.height) {
					menuSection = 4;
				}
			}
		}
	}
	else if (mode=="play") {
		// INDOOR
		if ( playSection == 1 && showMenu == false ) {
			// ty
			if ( (mouseX>138 && mouseX<138+127) && (mouseY>373 && mouseY<373+245) ) {
				if ( !tyClicked ) {
					tyClicked = true;
				}
			}
			// TV
			else if ( (mouseX>iTV.x && mouseX<iTV.x+iTV.img.width) && (mouseY>iTV.y && mouseY<iTV.y+iTV.img.height)) {
				if(tvChannel>=5) { tvChannel=1; }
				else { tvChannel++; }
			}
			// chair
			else if( (mouseX>iChair[c1ch].x && mouseX<iChair[c1ch].x+iChair[c1ch].img.width) && (mouseY>iChair[c1ch].y && mouseY<iChair[c1ch].y+iChair[c1ch].img.height) ) {
				if(c1ch==iChair.length-1) { c1ch=0; }
				else { c1ch++; }
			}
			// muybridge
			else if( (mouseX>iMuy[c1m].x && mouseX<iMuy[c1m].x+iMuy[c1m].img.width) && (mouseY>iMuy[c1m].y && mouseY<iMuy[c1m].y+iMuy[c1m].img.height)) {
				if(c1m==iMuy.length-1) { c1m=0; }
				else { c1m++; }
			}
			// second shelf
			else if( (mouseX>iShelf2[c1s2].x && mouseX<iShelf2[c1s2].x+iShelf2[c1s2].img.width) && (mouseY>iShelf2[c1s2].y && mouseY<iShelf2[c1s2].y+iShelf2[c1s2].img.height) ) {
				if(c1s2==iShelf2.length-1) { c1s2=0; }
				else { c1s2++; }
			}
			// first shelf
			else if( (mouseX>iShelf1[c1s1].x && mouseX<iShelf1[c1s1].x+iShelf1[c1s1].img.width) && (mouseY>iShelf1[c1s1].y && mouseY<iShelf1[c1s1].y+iShelf1[c1s1].img.height) ) {
				if(c1s1==iShelf1.length-1) { c1s1=0; }
				else { c1s1++; }
			}
			// third shelf
			else if( (mouseX>iShelf3[c1s3].x && mouseX<iShelf3[c1s3].x+iShelf3[c1s3].img.width) && (mouseY>iShelf3[c1s3].y && mouseY<iShelf3[c1s3].y+iShelf3[c1s3].img.height) ) {
				if(c1s3==iShelf3.length-1) { c1s3=0; }
				else { c1s3++; }
			}
			// top shelf
			else if( (mouseX>iShelft[c1st].x && mouseX<iShelft[c1st].x+iShelft[c1st].img.width) && ( mouseY>iShelft[c1st].y && mouseY<iShelft[c1st].y+iShelft[c1st].img.height) ) {
				if(c1st==iShelft.length-1) { c1st=0; }
				else { c1st++; }
			}
			// bed -- draw 2 rectangles for this one.
			else if( ( (mouseX>0 && mouseX<320) && (mouseY>iBed[c1bed].y && mouseY<624) ) || ((mouseX>0 && mouseX<554) && (mouseY>623 && mouseY<800))  ) {
				if(c1bed==iBed.length-1) { c1bed=0; }
				else { c1bed++; }
			}
			// poster
			else if ((mouseX>iPoster[c1p].x && mouseX<iPoster[c1p].x+iPoster[c1p].img.width) && (mouseY>iPoster[c1p].y && mouseY<iPoster[c1p].y+iPoster[c1p].img.height)) {
				if(c1p==iPoster.length-1) { c1p=0; }
				else { c1p++; }
			}
			// trash can
			else if ((mouseX>iTrash[c1t].x && mouseX<iTrash[c1t].x+iTrash[c1t].img.width) && (mouseY>iTrash[c1t].y && mouseY<iTrash[c1t].y+iTrash[c1t].img.height)) {
				if(c1t==iTrash.length-1) { c1t=0; }
				else { c1t++; }
			}
			// curtainR
			else if ((mouseX>iCurtainR[c1cR].x && mouseX<iCurtainR[c1cR].x+iCurtainR[c1cR].img.width) && (mouseY>iCurtainR[c1cR].y && mouseY<iCurtainR[c1cR].y+iCurtainR[c1cR].img.height)) {
				if(c1cR==iCurtainR.length-1) { c1cR=0; }
				else { c1cR++; }
			}
			// curtainL
			else if ((mouseX>iCurtainL[c1cL].x && mouseX<iCurtainL[c1cL].x+iCurtainL[c1cL].img.width) && (mouseY>iCurtainL[c1cL].y && mouseY<iCurtainL[c1cL].y+iCurtainL[c1cL].img.height)) {
				if(c1cL==iCurtainL.length-1) { c1cL=0; }
				else { c1cL++; }
			}
			// window
			else if ((mouseX>iWindow[c1w].x && mouseX<iWindow[c1w].x+iWindow[c1w].img.width) && (mouseY>iWindow[c1w].y && mouseY<iWindow[c1w].y+iWindow[c1w].img.height)) {
				if(c1w==iWindow.length-1) { c1w=0; }
				else { c1w++; }
			}
			// board
			else if ((mouseX>iBoard[c1b].x && mouseX<iBoard[c1b].x+iBoard[c1b].img.width) && (mouseY>iBoard[c1b].y && mouseY<iBoard[c1b].y+iBoard[c1b].img.height)) {
				if(c1b==iBoard.length-1) { c1b=0; }
				else { c1b++; }
			}
			// ceiling
			else if ((mouseX>iCeiling[c1c].x && mouseX<iCeiling[c1c].x+iCeiling[c1c].img.width) && (mouseY>iCeiling[c1c].y && mouseY<iCeiling[c1c].y+iCeiling[c1c].img.height)) {
				if(c1c==iCeiling.length-1) { c1c=0; }
				else { c1c++; }
			}
			// wall
			else if ((mouseX>iWall[c1wa].x && mouseX<iWall[c1wa].x+iWall[c1wa].img.width) && (mouseY>iWall[c1wa].y && mouseY<iWall[c1wa].y+iWall[c1wa].img.height)) {
				if(c1wa==iWall.length-1) { c1wa=0; }
				else { c1wa++; }
			}
			// wall 2
			else if ((mouseX>iWall2[c1w2].x && mouseX<iWall2[c1w2].x+iWall2[c1w2].img.width) && (mouseY>iWall2[c1w2].y && mouseY<iWall2[c1w2].y+iWall2[c1w2].img.height)) {
				if(c1w2==iWall2.length-1) { c1w2=0; }
				else { c1w2++; }
			}
			// wall 3
			else if ((mouseX>iWall3[c1w3].x && mouseX<iWall3[c1w3].x+iWall3[c1w3].img.width) && (mouseY>iWall3[c1w3].y && mouseY<iWall3[c1w3].y+iWall3[c1w3].img.height)) {
				if(c1w3==iWall3.length-1) { c1w3=0; }
				else { c1w3++; }
			}
			// floor
			else if ( (mouseX>iFloor[c1f].x && mouseX<iFloor[c1f].x+iFloor[c1f].img.width) && (mouseY>iFloor[c1f].y && mouseY<iFloor[c1f].y+iFloor[c1f].img.height) ) {
				if ( c1f==iFloor.length-1 ) { c1f=0; }
				else {c1f++;}
			}
		}
		// CLOSE UP
		else if ( playSection == 2 ) {
			if( (mouseX>uEyes[c2e].x && mouseX<uEyes[c2e].x+uEyes[c2e].img.width) && (mouseY>uEyes[c2e].y && mouseY<uEyes[c2e].y+uEyes[c2e].img.height) ) {
				if( c2e==uEyes.length-1 ) { c2e=0; }
				else { c2e++; }
			}
			// beard
			else if((mouseX>uBeard[c2Brd].x && mouseX<uBeard[c2Brd].x+uBeard[c2Brd].img.width) && (mouseY>uBeard[c2Brd].y && mouseY<uBeard[c2Brd].y+uBeard[c2Brd].img.height)) {
				if(c2Brd==uBeard.length-1) { c2Brd=0; }
				else { c2Brd++; }
			}
			// shirt
			else if((mouseX>uShirt[c2sh].x && mouseX<uShirt[c2sh].x+uShirt[c2sh].img.width) && (mouseY>uShirt[c2sh].y && mouseY<uShirt[c2sh].y+uShirt[c2sh].img.height)) {
				if(c2sh==uShirt.length-1) { c2sh=0; }
				else { c2sh++; }
			}
			else if( (mouseX>uScalp[0].x && mouseX<uScalp[0].x+uScalp[0].img.width) && (mouseY>uScalp[0].y && mouseY<uScalp[0].y+uScalp[0].img.height) ) {
				if ( showScalp ) {
					for(var i=0;i<uScalp.length;i++) { uScalp[i].y = -35; }
					showScalp = false;
				}
				else {
					for(var i=0;i<uScalp.length;i++) { uScalp[i].y = uScalp[i].y0; }
					showScalp = true;
				}
			}
			// top of head
			else if( (mouseX>uHead[c2h].x && mouseX<uHead[c2h].x+uHead[c2h].img.width) && (mouseY>uHead[c2h].y && mouseY<uHead[c2h].y+uHead[c2h].img.height) ) {
				if ( !showScalp ) {
					if(c2h==uHead.length-1) { c2h=0; }
					else { c2h++; }
				}
			}
			// all 5 walls
			else if( c2w1!=1 && (mouseX>uWall1[c2w1].x && mouseX<uWall1[c2w1].x+uWall1[c2w1].img.width) && (mouseY>uWall1[c2w1].y && mouseY<uWall1[c2w1].img.height) ) {
				if(c2w1==uWall1.length-1) { c2w1=0; }
				else { c2w1++; }
			}
			else if( c2w2!=1 && (mouseX>uWall2[c2w2].x && mouseX<uWall2[c2w2].x+uWall2[c2w2].img.width) && (mouseY>uWall2[c2w2].y && mouseY<uWall2[c2w2].img.height) ) {
				if(c2w2==uWall2.length-1) { c2w2=0; }
				else { c2w2++; }
			}
			else if( c2w3!=1 && (mouseX>uWall3[c2w3].x && mouseX<uWall3[c2w3].x+uWall3[c2w3].img.width) && (mouseY>uWall3[c2w3].y && mouseY<uWall3[c2w3].img.height) ) {
				if(c2w3==uWall3.length-1) { c2w3=0; }
				else { c2w3++; }
			}
			else if( c2w4!=1 && (mouseX>uWall4[c2w4].x && mouseX<uWall4[c2w4].x+uWall4[c2w4].img.width) && (mouseY>uWall4[c2w4].y && mouseY<uWall4[c2w4].img.height) ) {
				if(c2w4==uWall4.length-1) { c2w4=0; }
				else { c2w4++; }
			}
			else if( c2w5!=1 && (mouseX>uWall5[c2w5].x && mouseX<uWall5[c2w5].x+uWall5[c2w5].img.width) && (mouseY>uWall5[c2w5].y && mouseY<uWall5[c2w5].img.height) ) {
				if(c2w5==uWall5.length-1) { c2w5=0; }
				else { c2w5++; }
			}
			// icu
			else if( (mouseX>uIcu[c2icu].x && mouseX<uIcu[c2icu].x+uIcu[c2icu].img.width) && (mouseY>uIcu[c2icu].y && mouseY<uIcu[c2icu].y+uIcu[c2icu].img.height) ) {
				if(c2icu==uIcu.length-1) { c2icu=0; }
				else { c2icu++; }
			}
			// icuR
			else if( (mouseX>uIcuR[c2icuR].x && mouseX<uIcuR[c2icuR].x+uIcuR[c2icuR].img.width) && (mouseY>uIcuR[c2icuR].y && mouseY<uIcuR[c2icuR].y+uIcuR[c2icuR].img.height) ) {
				if(c2icuR==uIcuR.length-1) { c2icuR=0; }
				else { c2icuR++; }
			}
			// background
			else {
				if(c2bg==uBG.length-1) { c2bg=0; }
				else { c2bg++; }
			}

		}
		// OUTSIDE
		else if ( playSection >= 4 ) {
			// ty
			if ( (mouseX>546 && mouseX<546+112) && (mouseY>325 && mouseY<325+352) ) {
				if ( !tyClicked ) {
					tyClicked = true;
				}
			}
			// bush
			else if ( (mouseX>oBush[c3b].x && mouseX<oBush[c3b].x+oBush[c3b].img.width) && (mouseY>oBush[c3b].y && mouseY<oBush[c3b].y+oBush[c3b].img.height) ) {
				if(c3b==oBush.length-1) { c3b=0; }
				else { c3b++; }
			}
			// walnut
			else if ( (mouseX>oWalnut[c3w].x && mouseX<oWalnut[c3w].x+oWalnut[c3w].img.width) && (mouseY>oWalnut[c3w].y && mouseY<oWalnut[c3w].y+oWalnut[c3w].img.height) ) {
				if(c3w==oWalnut.length-1) { c3w=0; }
				else { c3w++; }
			}
			// tree
			else if ( (mouseX>oTree[c3t].x && mouseX<oTree[c3t].x+oTree[c3t].img.width) && (mouseY>oTree[c3t].y && mouseY<oTree[c3t].y+oTree[c3t].img.height) ) {
				if(c3t==oTree.length-1) { c3t=0; }
				else { c3t++; }
			}
			// heavy set man-snake
			else if ( (mouseX>oMan[c3m].x && mouseX<oMan[c3m].x+oMan[c3m].img.width) && (mouseY>oMan[c3m].y && mouseY<oMan[c3m].y+oMan[c3m].img.height)) {
				if(c3m==oMan.length-1) { c3m=0; }
				else { c3m++; }
			}
			// leg farm
			else if ( (mouseX>oLegs[c3l].x && mouseX<oLegs[c3l].x+oLegs[c3l].img.width) && (mouseY>oLegs[c3l].y && mouseY<oLegs[c3l].y+oLegs[c3l].img.height) ) {
				if(c3l==oLegs.length-1) { c3l=0; }
				else { c3l++; }
			}
			// satellite
			else if ( (mouseX>oSat[c3sat].x && mouseX<oSat[c3sat].x+oSat[c3sat].img.width) && (mouseY>oSat[c3sat].y && mouseY<oSat[c3sat].y+oSat[c3sat].img.height) ) {
				if(c3sat==oSat.length-1) { c3sat=0; }
				else { c3sat++; }
			}
			// jet 2
			else if ( (mouseX>oJet1[c3j1].x && mouseX<oJet1[c3j1].x+oJet1[c3j1].img.width) && (mouseY>oJet1[c3j1].y && mouseY<oJet1[c3j1].y+oJet1[c3j1].img.height) ) {
				if(c3j1==oJet1.length-1) { c3j1=0; }
				else { c3j1++; }
			}
			// jet 1
			else if ( (mouseX>oJet2[c3j2].x && mouseX<oJet2[c3j2].x+oJet2[c3j2].img.width) && (mouseY>oJet2[c3j2].y && mouseY<oJet2[c3j2].y+oJet2[c3j2].img.height) ) {
				if(c3j2==oJet2.length-1) { c3j2=0; }
				else { c3j2++; }
			}
			// skyscrapers behind ty
			else if( (mouseX>oScrap[c3ss].x && mouseX<oScrap[c3ss].x+oScrap[c3ss].img.width) && (mouseY>oScrap[c3ss].y && mouseY<oScrap[c3ss].y+oScrap[c3ss].img.height)) {
				if(c3ss==oScrap.length-1) { c3ss=0; }
				else { c3ss++;}
			}
			// buildings
			else if( (mouseX>oBuild[c3bu].x && mouseX<oBuild[c3bu].x+oBuild[c3bu].img.width) && (mouseY>oBuild[c3bu].y && mouseY<oBuild[c3bu].y+oBuild[c3bu].img.height)) {
				if(c3bu==oBuild.length-1) { c3bu=0; }
				else { c3bu++;}
			}
			// ground check
			else if( (mouseX>oGround[c3g].x && mouseX<oGround[c3g].x+oGround[c3g].img.width) && (mouseY>oGround[c3g].y && mouseY<oGround[c3g].y+oGround[c3g].img.height)) {
				if(c3g==oGround.length-1) { c3g=0; }
				else { c3g++; };
			}
			else if ( (mouseX>oMtnR[c3mR].x && mouseX<oMtnR[c3mR].x+oMtnR[c3mR].img.width) && (mouseY>oMtnR[c3mR].y && mouseY<oMtnR[c3mR].y+oMtnR[c3mR].img.height) ) {
				if(c3mR==oMtnR.length-1) { c3mR=0; }
				else { c3mR++; }
			}
			else if ( (mouseX>oMtnL[c3mL].x && mouseX<oMtnL[c3mL].x+oMtnL[c3mL].img.width) && (mouseY>oMtnL[c3mL].y && mouseY<oMtnL[c3mL].y+oMtnL[c3mL].img.height) ) {
				if(c3mL==oMtnL.length-1) { c3mL=0; }
				else { c3mL++; }
			}
			// detect right cloud
			else if ( (mouseX>oCloudR[c3cR].x && mouseX<oCloudR[c3cR].x+oCloudR[c3cR].img.width) && (mouseY>oCloudR[c3cR].y && mouseY<oCloudR[c3cR].y+oCloudR[c3cR].img.height) ) {
				if(c3cR==oCloudR.length-1) { c3cR=0; }
				else { c3cR++; }
			}
			// detect left cloud
			else if ( (mouseX>oCloudL[c3cL].x && mouseX<oCloudL[c3cL].x+oCloudL[c3cL].img.width) && (mouseY>oCloudL[c3cL].y && mouseY<oCloudL[c3cL].y+oCloudL[c3cL].img.height) ) {
				if(c3cL==oCloudL.length-1) { c3cL=0; }
				else { c3cL++; }
			}
			// center sky object
			else if ( (mouseX>oSkyC[c3sC].x && mouseX<oSkyC[c3sC].x+oSkyC[c3sC].img.width) && (mouseY>oSkyC[c3sC].y && mouseY<oSkyC[c3sC].y+oSkyC[c3sC].img.height) ) {
				if(c3sC==oSkyC.length-1) { c3sC=0; }
				else { c3sC++; }
			}
			// sky
			else if( (mouseX>sBG[c5bg].x && mouseX<sBG[c5bg].x+sBG[c5bg].img.width) && (mouseY>sBG[c5bg].y && mouseY<sBG[c5bg].y+sBG[c5bg].img.height)) {
				if(c5bg==sBG.length-1) { c5bg=0; }
				else { c5bg++; };
			}
		}
	}

	click = !click;
}

function goToPosition(_pos) {
	// FIXME a section to stop all playing videos.
	if ( _pos == 0 ) {
		resetAll();
	}
	else if ( _pos == 1 ) {
		playSection = 0;
		resetVideo("all");
		playTime = 0;
		mode = "play";
		showMenu = false;
	}
	else if ( _pos == 2 ) {
		playSection = 1;
		resetVideo("all");
		playTime = startOf2-.1;
	}
	else if ( _pos == 3 ) {
		playSection = 2;
		resetVideo("all");
		playTime = startOf3-.1;
	}
	else if ( _pos == 4 ) {
		playSection = 3;
		resetVideo("all");
		playTime = startOf4-1;
	}
}

function resetVideo(vidNo) {
	if ( vidNo == "all" || vidNo == null ) {
		video1.currentTime = 0;
		video1.pause();
		vidR1ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);		

		video2.currentTime = 0;
		video2.pause();
		vidR2ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

		video3.currentTime = 0;
		video3.pause();
		vidR3ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

		videoFist.currentTime = 0;
		videoFist.pause();
		vidTctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

		tv1.currentTime = 0;
		tv1.pause();
		tv2.currentTime = 0;
		tv2.pause();
		tv3.currentTime = 0;
		tv3.pause();
		tv4.currentTime = 0;
		tv4.pause();
		tv5.currentTime = 0;
		tv5.pause();
		tvCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if (vidNo==1) {
		video1.currentTime = 0;
		video1.pause();
		vidR1ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if (vidNo==2) {
		video2.currentTime = 0;
		video2.pause();
		vidR2ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if (vidNo==3) {
		video3.currentTime = 0;
		video3.pause();
		vidR3ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if ( vidNo =="fist" ) {
		videoFist.currentTime = 0;
		videoFist.pause();
		vidTctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if ( vidNo == "tv1" ) {
		tv1.currentTime = 0;
		tv1.pause();
		tvCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if ( vidNo == "tv2" ) {
		tv2.currentTime = 0;
		tv2.pause();
		tvCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if ( vidNo == "tv3" ) {
		tv3.currentTime = 0;
		tv3.pause();
		tvCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if ( vidNo == "tv4" ) {
		tv4.currentTime = 0;
		tv4.pause();
		tvCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	else if ( vidNo == "tv5" ) {
		tv5.currentTime = 0;
		tv5.pause();
		tvCtx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}

function resetAll()	{
	resetVideo("all");
	
	currentJet = 0;
	goJet = false;
	tyClicked = false;
	tvChannel = 0;

	mode = "menu";
	showMenu = true;
	isPlaying = false;
	frameNo = 0;
	mFrame = 0;
	menuSection = 1;
	playSection = 0;
	
	showScalp = true;

	playTime = 0;
	startTime = 0;
	
	tFrame = 0;
	tyCounter = 0;
	
	hasTrans01 = false;

	audio.pause();
	audio.currentTime = 0;

	resetImages();
}

function checkSync() {
	var audTime = audio.currentTime;
	var offset;

	if ( playSection == 1 ) {
		offset = audTime - ( startOf1 + video1.currentTime - vid1Offset);
		if ( Math.abs(offset) > 0.15 ) {
			console.log("fixing video-audio sync");
			audio.currentTime = playTime;
			video1.currentTime = playTime - startOf1 + vid1Offset;
		}
	}
	else if ( playSection == 2 ) {
		offset = audTime - ( startOf2 + video2.currentTime - vid2Offset);
		if ( Math.abs(offset) > 0.15 ) {
			console.log("fixing video-audio sync");
			audio.currentTime = playTime;
			video2.currentTime = playTime - startOf2 + vid2Offset;
		}
	}
	else if ( playSection >= 3 ) {
		offset = audTime - ( startOf3 + video3.currentTime - vid3Offset);
		if ( Math.abs(offset) > 0.15 ) {
			console.log("fixing video-audio sync");
			audio.currentTime = playTime;
			video3.currentTime = playTime - startOf3 + vid3Offset;
		}
	}
}

var mediaLoaded = false;
var loadm = false;
var load1 = false;
var load2 = false;
var load3 = false;
var loadNumber = 0;

var displayLoad1 = false;
var displayLoad2 = false;

function checkLoaded() {
	
	if ( audio.readyState==4 ) {
	if ( video1.readyState==4 && video2.readyState==4 && video3.readyState==4 ) {
	if ( tv1.readyState==4  && tv2.readyState==4  && tv3.readyState==4  && tv4.readyState==4  && tv5.readyState==4  ) {
		if (/loaded|complete/.test(document.readyState)) {
			mediaLoaded = true;
		}
	}
	}
	}
	
	// check the menu assets
	for ( var i=0; i<mLogo.length; i++ ) {
		if ( mLogo[i].img.complete || mLogo[i].img.naturalWidth != 0 ) { loadNumber++; }
	}
	if ( loadNumber == mLogo.length && mCurtainL.img.complete != 0 && mCurtainR.img.complete && mInstructions.img.complete ) {
		if ( !loadm ) {
			console.log("menu loaded");
			if ( loadProgress < 1 ) {
				loadProgress = 1;
				loadingImage.src="images/LoadingScreen-1.gif";
			}
			loadm = true;
		}
	}
	loadNumber = 0;
	
	// scene 1
	for ( var i=0; i<iMuy.length; i++ ) {
		if ( iMuy[i].img.complete ) { loadNumber++;  }
	}
	for ( var i=0; i<iWall.length; i++ ) {
		if ( iWall[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iCeiling.length; i++ ) {
		if ( iCeiling[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iShelf1.length; i++ ) {
		if ( iShelf1[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iShelf2.length; i++ ) {
		if ( iShelf2[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iShelf3.length; i++ ) {
		if ( iShelf3[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iShelft.length; i++ ) {
		if ( iShelft[i].img.complete) { loadNumber++; }
	}
	for ( var i=0; i<iCurtainL.length; i++ ) {
		if ( iCurtainL[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iCurtainR.length; i++ ) {
		if ( iCurtainR[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iChair.length; i++ ) {
		if ( iChair[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iPoster.length; i++ ) {
		if ( iPoster[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iWindow.length; i++ ) {
		if ( iWindow[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iBoard.length; i++ ) {
		if ( iBoard[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iFloor.length; i++ ) {
		if ( iFloor[i].img.complete) { loadNumber++; }
	}
	for ( var i=0; i<iBed.length; i++ ) {
		if ( iBed[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iWall2.length; i++ ) {
		if ( iWall2[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<iWall3.length; i++ ) {
		if ( iWall3[i].img.complete ) { loadNumber++; }
	}
	
	if(loadNumber==iWall3.length+iWall2.length+iBed.length+iFloor.length+iBoard.length+iWindow.length+iPoster.length+iChair.length+iCurtainR.length+iCurtainL.length+iShelft.length+iShelf3.length+iShelf2.length+iShelf1.length+iCeiling.length+iWall.length+iMuy.length) {
		if ( !load1) {
			if ( loadProgress < 2 ) {
				loadProgress = 2;
				loadingImage.src="images/LoadingScreen-2.gif";
			}
			console.log("scene 1 loaded");
			load1 = true;
		}
	}
	loadNumber = 0;
	
	// scene 2
	for ( var i=0; i<uBG.length; i++ ) {
		if ( uBG[i].img.complete || uBG[i].img.naturalWidth!= 0 ) { loadNumber++; }
	}
	for ( var i=0; i<uBeard.length; i++ ) {
		if ( uBeard[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uHead.length; i++ ) {
		if ( uHead[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uScalp.length; i++ ) {
		if ( uScalp[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uEyes.length; i++ ) {
		if ( uEyes[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uIcu.length; i++ ) {
		if ( uIcu[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uWall1.length; i++ ) {
		if ( uWall1[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uWall2.length; i++ ) {
		if ( uWall2[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uWall3.length; i++ ) {
		if ( uWall3[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uWall4.length; i++ ) {
		if ( uWall4[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uWall5.length; i++ ) {
		if ( uWall5[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<uShirt.length; i++ ) {
		if ( uShirt[i].img.complete ) { loadNumber++; }
	}
	
	if (loadNumber==uShirt.length+uBG.length+uBeard.length+uHead.length+uScalp.length+uEyes.length+uIcu.length+uWall1.length+uWall2.length+uWall3.length+uWall4.length+uWall5.length) {
		if ( !load2 ) {
			if ( loadProgress < 3 ) {
				loadProgress = 3;
				loadingImage.src="images/LoadingScreen-3.gif";
			}
			load2 = true;
			console.log("scene 2 loaded");
		}
	}
	loadNumber = 0;
	
	// final scene (3)
	for ( var i=0; i<oGround.length; i++ ) {
		if ( oGround[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oMtnR.length; i++ ) {
		if ( oMtnR[i].img.complete) { loadNumber++; }
	}
	for ( var i=0; i<oMtnL.length; i++ ) {
		if ( oMtnL[i].img.complete  ) { loadNumber++; }
	}
	for ( var i=0; i<oSkyC.length; i++ ) {
		if ( oSkyC[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oSat.length; i++ ) {
		if ( oSat[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oJet1.length; i++ ) {
		if ( oJet1[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oJet2.length; i++ ) {
		if ( oJet2[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oWalnut.length; i++ ) {
		if ( oWalnut[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oLegs.length; i++ ) {
		if ( oLegs[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oTree.length; i++ ) {
		if ( oTree[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oBush.length; i++ ) {
		if ( oBush[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oMan.length; i++ ) {
		if ( oMan[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oCloudL.length; i++ ) {
		if ( oCloudL[i].img.complete ) { loadNumber++; }
	}
	for ( var i=0; i<oCloudR.length; i++ ) {
		if ( oCloudR[i].img.complete ) { loadNumber++; }
	}
	
	if (loadNumber==oGround.length+oMtnR.length+oMtnL.length+oSkyC.length+oSat.length+oJet1.length+oJet2.length+oWalnut.length+oLegs.length+oTree.length+oBush.length+oMan.length+oCloudL.length+oCloudR.length) {
		if ( !load3) {
			if ( loadProgress < 4 ) {
				loadProgress = 1;
				loadingImage.src="images/LoadingScreen-4.gif";
			}
			load3 = true;
			console.log("scene 3 loaded");
		}
	}
	loadNumber = 0;
	
	// loaded messages
	if ( mediaLoaded && load1 && load2 && load3 && loadm ) {
		if ( loadProgress < 5 ) {
			loadProgress = 5;
			loadingImage.src="images/LoadingScreen-5.gif";
		}
		console.log("fully loaded");
		return true;
	}
}

function keyPressed(e) {
	if( e.keyCode == 48 ) {			// MENU
		if ( audio.volume == 0 ) {
			audio.volume = 0.7;
		}
		else  {
			audio.volume = 0;
		}
//		goToPosition(0);
	}
}

function tapObject(src,x,y) {
	this.img = new Image();
	this.img.src=src;

	this.x0 = x;
	this.y0 = y;

	this.x = x;
	this.y = y;

	this.move = function (xspeed, yspeed) {
		this.x += xspeed;
		this.y += yspeed;
	};

	this.moveTo = function (xloc, yloc) {
		if ( xloc == false ) {
			this.y = yloc;
		}
		else if ( yloc == false ) {
			this.x = xloc;
		}
		else {
			this.y=yloc;
			this.x=xloc;
		}
	};

	this.resetPos = function () {
		this.x = this.x0;
		this.y = this.y0;
	};
}

var clickCounter = 0;
function drawHelp ( ) {
	clickCounter++;
	if ( clickCounter <= 24 ) {
		canvasC.drawImage(clickHand[0].img, clickHand[0].x, clickHand[0].y);
	}
	else if ( clickCounter <= 30 ) {
		canvasC.drawImage(clickHand[1].img, clickHand[1].x, clickHand[1].y);
	}
	else {
		clickCounter=0;
	}
}

function scaleContent (num) {
	document.getElementById('gameo').style.webkitTransform = "scale("+num+")";
	document.getElementById('gameo').style.webkitTransformOrigin = 400*num+"px 3em";
	document.getElementById('gameo').style.transform = "scale("+num+")";
	document.getElementById('gameo').style.transformOrigin = 400*num+"px 3em";
	document.getElementById('gameo').style.MozTransform = "scale("+num+")";
	document.getElementById('gameo').style.MozTransformOrigin = 400*num+"px 3em";
}
