//IMAGE FILES /////////

//loading screen - does this work?
var loadScreen1 = new Image();
loadScreen1.src="images/LoadingScreen-1.gif";
var loadScreen2 = new Image();
loadScreen2.src="images/LoadingScreen-2.gif";
var loadScreen3 = new Image();
loadScreen3.src="images/LoadingScreen-3.gif";
var loadScreen4 = new Image();
loadScreen4.src="images/LoadingScreen-4.gif";
var loadScreen5 = new Image();
loadScreen5.src="images/LoadingScreen-5.gif";

//tutorial images
var cClick;
var clickHand = new Array();

//menu
var c0l;
var mLogo = new Array();
var mRopeL;
var mRopeR;
var mCurtainL = new tapObject('images/0_menu/curtainL.jpg', 0, 0);
var mCurtainR = new tapObject('images/0_menu/curtainR.jpg', 604, 0);
var mInstructions = new tapObject('images/ManipulatorInteractive.gif', 0, 0);

//1-indoors
var roomBG = new Array();
var iHand1 = new Array();
var iCurtainR = new Array();
var iCurtainL = new Array();
var iPoster = new Array();
var iWindow = new Array();
var iBoard = new Array();
var iTrash = new Array();
var iFloor = new Array();
var iShelf1 = new Array();
var iShelf2 = new Array();
var iShelf3 = new Array();
var iShelft = new Array();
var iBed = new Array();
var iChair = new Array();
var iMuy = new Array();
var iWall = new Array();
var iCeiling = new Array();
var iWall2 = new Array();
var iWall3 = new Array();
var iTV;
var iTVBlank;

var c1h;
var c1ch;
var c1s1;
var c1s2;
var c1s3;
var c1st;
var c1bed;
var c1bg;
var c1cR;
var c1cL;
var c1p;
var c1w;
var c1w2;
var c1w3;
var c1b;
var c1t;
var c1f;
var c1c;
var c1wa;
var c1m;

//2-close
var uBG = new Array();
var uBeard = new Array();
var uHead = new Array();
var uScalp = new Array();
var uEyes = new Array();
var uIcu = new Array();
var uIcuR = new Array();
var uShirt = new Array();
var uWall1 = new Array();
var uWall2 = new Array();
var uWall3 = new Array();
var uWall4 = new Array();
var uWall5 = new Array();

var c2bg;
var c2Brd;
var c2h;
var c2s;
var c2e;
var showScalp;
var c2w1;
var c2w2;
var c2w3;
var c2w4;
var c2w5;
var c2icu;
var c2icuR;
var c2sh;

//23-transition
var chaos23 = new Array();
var explosion23 = new Array();

//3-outside
//var oSky = new Array();
//var oCat = new Array();
//var oPy1 = new Array();
//var oPy2 = new Array();
//var oRuins = new Array();
//var oSphx = new Array();
//var oSun = new Array();
//var oTower = new Array();

//var c3s;
//var c3c;
//var c3p1;
//var c3p2;
//var c3r;
//var c3sph;
//var c3sun;
//var c3t;

var oGround = new Array();
var oMtnR = new Array();
var oMtnL = new Array();
var oSkyC = new Array();
var oSat = new Array();
var oJet1 = new Array();
var oJet2 = new Array();
var oWalnut = new Array();
var oLegs = new Array();
var oTree = new Array();
var oBush = new Array();
var oMan = new Array();
var oCloudL = new Array();
var oCloudR = new Array();
var oScrap = new Array();
var oBuild = new Array();

var oHand = new Array();

var cracks = new Array();

var c3sat;
var c3j1;
var c3j2;
var c3g;
var c3mR;
var c3mL;
var c3fL;
var c3fR;
var c3sC;
var c3w;
var c3l;
var c3t;
var c3b;
var c3m;
var c3cL;
var c3cR;
var c3ss;
var c3bu;
var c3h;

//4-sky
var sBG = new Array();
var sWing = new Array();

var c4bg = 0;
var c4w = 0;

function initImages() {
	// TUTORIAL
	cClick = 0;
	clickHand[0] = new tapObject('images/clickHand1.gif', CANVAS_WIDTH/2-96, CANVAS_HEIGHT/2);
	clickHand[1] = new tapObject('images/clickHand2.gif', CANVAS_WIDTH/2-96, CANVAS_HEIGHT/2);

	// MENU
	c0l = 0;
	
	mLogo[0] = new tapObject('images/0_menu/sign-green.gif', 340, -432);
	mLogo[1] = new tapObject('images/0_menu/sign-red.gif', 340, -432);
	mLogo[2] = new tapObject('images/0_menu/sign-yellow.gif', 340, -432);
	mLogo[3] = new tapObject('images/0_menu/sign-orange.gif', 340, -432);
	mRopeL = new tapObject('images/0_menu/ropeL.gif', 457, -626);
	mRopeR = new tapObject('images/0_menu/ropeR.gif', 778, -626);
	mCurtainL = new tapObject('images/0_menu/curtainL.jpg', 0, 0);
	mCurtainR = new tapObject('images/0_menu/curtainR.jpg', 604, 0);
	
	// 1: IN ROOM SCENE
	c1h = 0;
	c1bg = 0;
	c1cR = 0;
	c1cL = 0;
	c1p = 0;
	c1w = 0;
	c1b = 0;
	c1t = 0;
	c1f = 0;
	c1bed = 0;
	c1s1 = 3;
	c1s2 = 0;
	c1s3 = 0;
	c1st = 0;
	c1ch = 0;
	c1c = 0;
	c1wa = 0;
	c1m = 0;
	c1w2 = 0;
	c1w3 = 0;
	
	roomBG[0] = new tapObject('images/1_indoor/background/0.jpg',0,0);
	
	iHand1[0] = new tapObject('images/1_indoor/hands/01.gif', 186, 344);
	iHand1[1] = new tapObject('images/1_indoor/hands/02.gif', 202, 498);
	iHand1[2] = new tapObject('images/1_indoor/hands/03.gif', 192, 15);
	iHand1[3] = new tapObject('images/1_indoor/hands/04.gif', 142, 497);
	iHand1[4] = new tapObject('images/1_indoor/hands/05.gif', 74, 259);
	iHand1[5] = new tapObject('images/1_indoor/hands/06.gif', 89, 529);
	iHand1[6] = new tapObject('images/1_indoor/hands/07.gif', 221, 393);
	iHand1[7] = new tapObject('images/1_indoor/hands/08.gif', 216, 104);
	iHand1[8] = new tapObject('images/1_indoor/hands/09.gif', 187, 249);
	iHand1[9] = new tapObject('images/1_indoor/hands/10.gif', 221, 307);
	iHand1[10] = new tapObject('images/1_indoor/hands/11.gif', 192, 499);
	iHand1[11] = new tapObject('images/1_indoor/hands/12.gif', 192, 493);
	
	iMuy[0] = new tapObject('images/1_indoor/muy/01.gif', 1068, 430);
	iMuy[1] = new tapObject('images/1_indoor/muy/02.gif', 1068, 430);
	iMuy[2] = new tapObject('images/1_indoor/muy/03.gif', 1068, 430);
	iMuy[3] = new tapObject('images/1_indoor/muy/04.gif', 1068, 430);
	iMuy[4] = new tapObject('images/1_indoor/muy/05.gif', 1068, 430);
	iMuy[5] = new tapObject('images/1_indoor/muy/06.gif', 1068, 430);
	iMuy[6] = new tapObject('images/1_indoor/muy/07.gif', 1068, 430);
	
	iWall[0] = new tapObject('images/1_indoor/wall/00.gif', 817, 0);
	iWall[1] = new tapObject('images/1_indoor/wall/01.gif', 817, 0);
	iWall[2] = new tapObject('images/1_indoor/wall/02.gif', 817, 0);
	iWall[3] = new tapObject('images/1_indoor/wall/03.gif', 817, 0);
	iWall[4] = new tapObject('images/1_indoor/wall/04.gif', 817, 0);
	iWall[5] = new tapObject('images/1_indoor/wall/05.gif', 817, 0);
	iWall[6] = new tapObject('images/1_indoor/wall/06.gif', 817, 0);
	iWall[7] = new tapObject('images/1_indoor/wall/07.gif', 817, 0);
	iWall[8] = new tapObject('images/1_indoor/wall/08.gif', 817, 0);
	iWall[9] = new tapObject('images/1_indoor/wall/09.gif', 817, 0);
	iWall[10] = new tapObject('images/1_indoor/wall/10.gif', 817, 0);
	iWall[11] = new tapObject('images/1_indoor/wall/11.gif', 817, 0);
	
	iWall2[0] = new tapObject('images/1_indoor/wall2/00.gif', 299, 488);
	iWall2[1] = new tapObject('images/1_indoor/wall2/01.gif', 299, 488);
	iWall2[2] = new tapObject('images/1_indoor/wall2/02.gif', 299, 488);
	iWall2[3] = new tapObject('images/1_indoor/wall2/03.gif', 299, 488);
	iWall2[4] = new tapObject('images/1_indoor/wall2/04.gif', 299, 488);
	iWall2[5] = new tapObject('images/1_indoor/wall2/05.gif', 299, 488);
	iWall2[6] = new tapObject('images/1_indoor/wall2/06.gif', 299, 488);
	iWall2[7] = new tapObject('images/1_indoor/wall2/07.gif', 299, 488);
	iWall2[8] = new tapObject('images/1_indoor/wall2/08.gif', 299, 488);
	iWall2[9] = new tapObject('images/1_indoor/wall2/09.gif', 299, 488);
	iWall2[10] = new tapObject('images/1_indoor/wall2/10.gif', 299, 488);
	
	iWall3[0] = new tapObject('images/1_indoor/wall3/00.gif', 0, 0);
	iWall3[1] = new tapObject('images/1_indoor/wall3/01.gif', 0, 0);
	iWall3[2] = new tapObject('images/1_indoor/wall3/02.gif', 0, 0);
	iWall3[3] = new tapObject('images/1_indoor/wall3/03.gif', 0, 0);
	iWall3[4] = new tapObject('images/1_indoor/wall3/04.gif', 0, 0);
	iWall3[5] = new tapObject('images/1_indoor/wall3/05.gif', 0, 0);
	iWall3[6] = new tapObject('images/1_indoor/wall3/06.gif', 0, 0);
	iWall3[7] = new tapObject('images/1_indoor/wall3/07.gif', 0, 0);
	iWall3[8] = new tapObject('images/1_indoor/wall3/08.gif', 0, 0);
	iWall3[9] = new tapObject('images/1_indoor/wall3/09.gif', 0, 0);
	
	iCeiling[0] = new tapObject('images/1_indoor/ceiling/00.gif', 477, 0);
	iCeiling[1] = new tapObject('images/1_indoor/ceiling/01.gif', 477, 0);
	iCeiling[2] = new tapObject('images/1_indoor/ceiling/02.gif', 477, 0);
	iCeiling[3] = new tapObject('images/1_indoor/ceiling/03.gif', 477, 0);
	iCeiling[4] = new tapObject('images/1_indoor/ceiling/04.gif', 477, 0);
	iCeiling[5] = new tapObject('images/1_indoor/ceiling/05.gif', 477, 0);
	iCeiling[6] = new tapObject('images/1_indoor/ceiling/06.gif', 477, 0);
	iCeiling[7] = new tapObject('images/1_indoor/ceiling/07.gif', 477, 0);
	
	iShelf1[0] = new tapObject('images/1_indoor/shelf1/01.gif', 1087, 356);
	iShelf1[1] = new tapObject('images/1_indoor/shelf1/02.gif', 1097, 349);
	iShelf1[2] = new tapObject('images/1_indoor/shelf1/03.gif', 1071, 350);
	iShelf1[3] = new tapObject('images/1_indoor/shelf1/04.gif', 1078, 354);
	iShelf1[4] = new tapObject('images/1_indoor/shelf1/05.gif', 1067, 370);
	
	iShelf2[0] = new tapObject('images/1_indoor/shelf2/01.gif', 1122, 346);
	iShelf2[1] = new tapObject('images/1_indoor/shelf2/02.gif', 1122, 364);
	iShelf2[2] = new tapObject('images/1_indoor/shelf2/03.gif', 1114, 354);
	
	iShelf3[0] = new tapObject('images/1_indoor/shelf3/01.gif', 1088, 288);
	iShelf3[1] = new tapObject('images/1_indoor/shelf3/02.gif', 1081, 273);
	iShelf3[2] = new tapObject('images/1_indoor/shelf3/03.gif', 1081, 294);
	
	iShelft[0] = new tapObject('images/1_indoor/tshelf/01.gif', 1075, 209);
	iShelft[1] = new tapObject('images/1_indoor/tshelf/02.gif', 1073, 161);
	iShelft[2] = new tapObject('images/1_indoor/tshelf/03.gif', 1073, 160);
	iShelft[3] = new tapObject('images/1_indoor/tshelf/04.gif', 1073, 102);
	iShelft[4] = new tapObject('images/1_indoor/tshelf/05.gif', 1073, 120);
	iShelft[5] = new tapObject('images/1_indoor/tshelf/06.gif', 1073, 142);
	iShelft[6] = new tapObject('images/1_indoor/tshelf/07.gif', 1073, 118);
	iShelft[7] = new tapObject('images/1_indoor/tshelf/08.gif', 1073, 149);	
	
	iCurtainL[0] = new tapObject('images/1_indoor/curtainL/00.gif',231,0);
	iCurtainL[1] = new tapObject('images/1_indoor/curtainL/07.gif',231,0);
	iCurtainL[2] = new tapObject('images/1_indoor/curtainL/08.gif',231,0);
	iCurtainL[3] = new tapObject('images/1_indoor/curtainL/09.gif',231,0);
	iCurtainL[4] = new tapObject('images/1_indoor/curtainL/01.gif',231,0);
	iCurtainL[5] = new tapObject('images/1_indoor/curtainL/02.gif',231,0);
	iCurtainL[6] = new tapObject('images/1_indoor/curtainL/03.gif',231,0);
	iCurtainL[7] = new tapObject('images/1_indoor/curtainL/04.gif',231,0);
	iCurtainL[8] = new tapObject('images/1_indoor/curtainL/05.gif',231,0);
	iCurtainL[9] = new tapObject('images/1_indoor/curtainL/06.gif',231,0);
	iCurtainL[10] = new tapObject('images/1_indoor/curtainL/10.gif',231,0);
	iCurtainL[11] = new tapObject('images/1_indoor/curtainL/11.gif',231,0);
	
	iCurtainR[0] = new tapObject('images/1_indoor/curtainR/00.gif',622,39);
	iCurtainR[1] = new tapObject('images/1_indoor/curtainR/07.gif',622,39);
	iCurtainR[2] = new tapObject('images/1_indoor/curtainR/08.gif',622,39);
	iCurtainR[3] = new tapObject('images/1_indoor/curtainR/09.gif',622,39);
	iCurtainR[4] = new tapObject('images/1_indoor/curtainR/01.gif',622,39);
	iCurtainR[5] = new tapObject('images/1_indoor/curtainR/02.gif',622,39);
	iCurtainR[6] = new tapObject('images/1_indoor/curtainR/03.gif',622,39);
	iCurtainR[7] = new tapObject('images/1_indoor/curtainR/04.gif',622,39);
	iCurtainR[8] = new tapObject('images/1_indoor/curtainR/05.gif',622,39);
	iCurtainR[9] = new tapObject('images/1_indoor/curtainR/06.gif',622,39);	
	iCurtainR[10] = new tapObject('images/1_indoor/curtainR/10.gif',622,39);
	
	iChair[0] = new tapObject('images/1_indoor/chair/00.gif', 844, 443);
	iChair[1] = new tapObject('images/1_indoor/chair/01.gif', 811, 474);
	iChair[2] = new tapObject('images/1_indoor/chair/02.gif', 843, 324);
	iChair[3] = new tapObject('images/1_indoor/chair/03.gif', 813, 276);
	iChair[4] = new tapObject('images/1_indoor/chair/04.gif', 839, 412);
	iChair[5] = new tapObject('images/1_indoor/chair/05.gif', 866, 472);
	iChair[6] = new tapObject('images/1_indoor/chair/06.gif', 827, 353);
	iChair[7] = new tapObject('images/1_indoor/chair/07.gif', 719, 305);
	iChair[8] = new tapObject('images/1_indoor/chair/08.gif', 799, 463);
	iChair[9] = new tapObject('images/1_indoor/chair/09.gif', 753, 358);
	iChair[10] = new tapObject('images/1_indoor/chair/10.gif', 798, 290);
	
	iPoster[0] = new tapObject('images/1_indoor/poster/2.gif', -1,127);
	iPoster[1] = new tapObject('images/1_indoor/poster/3.gif', 4,144);
	iPoster[2] = new tapObject('images/1_indoor/poster/4.gif', 0,137);
	iPoster[3] = new tapObject('images/1_indoor/poster/1.gif', -10,100);
	iPoster[4] = new tapObject('images/1_indoor/poster/5.gif', 0,121);
	iPoster[5] = new tapObject('images/1_indoor/poster/6.gif', 0,131);
	iPoster[6] = new tapObject('images/1_indoor/poster/7.gif', 0,131);
	iPoster[7] = new tapObject('images/1_indoor/poster/8.gif', 0,131);
	iPoster[8] = new tapObject('images/1_indoor/poster/9.gif', 0,131);
	iPoster[9] = new tapObject('images/1_indoor/poster/10.gif', 0,131);
	iPoster[10] = new tapObject('images/1_indoor/poster/11.gif', 0,131);
	iPoster[11] = new tapObject('images/1_indoor/poster/12.gif', 0,131);
	iPoster[12] = new tapObject('images/1_indoor/poster/13.gif', 0,131);
	iPoster[13] = new tapObject('images/1_indoor/poster/14.gif', 0,131);
	
	iWindow[0] = new tapObject('images/1_indoor/window/0.gif', 477, 40);
	iWindow[1] = new tapObject('images/1_indoor/window/1.gif', 476, 40);
	iWindow[2] = new tapObject('images/1_indoor/window/2.gif', 476, 40);
	iWindow[3] = new tapObject('images/1_indoor/window/3.gif', 476, 40);
	iWindow[4] = new tapObject('images/1_indoor/window/4.gif', 476, 40);
	iWindow[5] = new tapObject('images/1_indoor/window/5.gif', 476, 40);
	
	iBoard[0] = new tapObject('images/1_indoor/board/00.gif', 909, 187);
	iBoard[1] = new tapObject('images/1_indoor/board/2.gif', 909, 182);
	iBoard[2] = new tapObject('images/1_indoor/board/3.gif', 909, 182);
	iBoard[3] = new tapObject('images/1_indoor/board/1.gif', 909, 182);
	iBoard[4] = new tapObject('images/1_indoor/board/4.gif', 909, 182);
	iBoard[5] = new tapObject('images/1_indoor/board/5.gif', 909, 182);
	iBoard[6] = new tapObject('images/1_indoor/board/6.gif', 909, 182);
	iBoard[7] = new tapObject('images/1_indoor/board/7.gif', 909, 182);
	iBoard[8] = new tapObject('images/1_indoor/board/8.gif', 909, 182);
	iBoard[9] = new tapObject('images/1_indoor/board/9.gif', 909, 182);
	iBoard[10] = new tapObject('images/1_indoor/board/10.gif', 909, 182);
	iBoard[11] = new tapObject('images/1_indoor/board/11.gif', 909, 187);
	iBoard[12] = new tapObject('images/1_indoor/board/12.gif', 909, 187);
	iBoard[13] = new tapObject('images/1_indoor/board/13.gif', 909, 187);
	
	iTrash[0] = new tapObject('images/1_indoor/trash/0.gif', 677, 575);
	iTrash[1] = new tapObject('images/1_indoor/trash/01.gif', 677, 537);
	iTrash[2] = new tapObject('images/1_indoor/trash/02.gif', 677, 455);
	iTrash[3] = new tapObject('images/1_indoor/trash/03.gif', 677, 500);
	iTrash[4] = new tapObject('images/1_indoor/trash/04.gif', 677, 466);
	iTrash[5] = new tapObject('images/1_indoor/trash/05.gif', 677, 510);
	iTrash[6] = new tapObject('images/1_indoor/trash/06.gif', 650, 554);
	iTrash[7] = new tapObject('images/1_indoor/trash/07.gif', 650, 517);
	iTrash[8] = new tapObject('images/1_indoor/trash/08.gif', 650, 478);
	iTrash[9] = new tapObject('images/1_indoor/trash/09.gif', 647, 471);
	iTrash[10] = new tapObject('images/1_indoor/trash/10.gif', 675, 528);
	
	iFloor[0] = new tapObject('images/1_indoor/floor/0.gif', 0, 657);
	iFloor[1] = new tapObject('images/1_indoor/floor/1.gif', 0, 657);
	iFloor[2] = new tapObject('images/1_indoor/floor/2.gif', 0, 657);
	iFloor[3] = new tapObject('images/1_indoor/floor/3.gif', 0, 657);
	iFloor[4] = new tapObject('images/1_indoor/floor/4.gif', 0, 657);
	iFloor[5] = new tapObject('images/1_indoor/floor/5.gif', 0, 657);
	iFloor[6] = new tapObject('images/1_indoor/floor/6.gif', 0, 657);
	iFloor[7] = new tapObject('images/1_indoor/floor/7.gif', 0, 657);
	iFloor[8] = new tapObject('images/1_indoor/floor/8.gif', 0, 657);
	iFloor[9] = new tapObject('images/1_indoor/floor/9.gif', 0, 657);
	iFloor[10] = new tapObject('images/1_indoor/floor/10.gif', 0, 657);
	iFloor[11] = new tapObject('images/1_indoor/floor/11.gif', 0, 657);
	iFloor[12] = new tapObject('images/1_indoor/floor/12.gif', 0, 657);
	
	iBed[0] = new tapObject('images/1_indoor/bed/00.gif', 0, 481);
	iBed[1] = new tapObject('images/1_indoor/bed/1.gif', 0, 480);
	iBed[2] = new tapObject('images/1_indoor/bed/01.gif', 0, 480);
	iBed[3] = new tapObject('images/1_indoor/bed/2.gif', 0, 478);
	iBed[4] = new tapObject('images/1_indoor/bed/02.gif', 0, 480);
	iBed[5] = new tapObject('images/1_indoor/bed/3.gif', 0, 478);
	
	iTV = new tapObject('images/1_indoor/tv/tv.gif', 1006, 500);
	iTVBlank = new tapObject('images/1_indoor/tv/screen_off.gif', 1006, 500);
	
	// 2: UP-CLOSE SCENE
	showScalp = true;
	c2s = 0;
	c2e = 0;
	c2Brd = 0;
	c2bg = 0;
	c2h = 0;
	c2w1 = 0;
	c2w2 = 0;
	c2w3 = 0;
	c2w4 = 0;
	c2w5 = 0;
	c2icu = 0;
	c2icuR = 0;
	c2sh = 0;
	
	uBG[0] = new tapObject('images/2_close/background/0.jpg', 0, 0);
	uBG[1] = new tapObject('images/2_close/background/1.jpg', 0, 0);
	uBG[2] = new tapObject('images/2_close/background/2.jpg', 0, 0);
	uBG[3] = new tapObject('images/2_close/background/3.jpg', 0, 0);
	uBG[4] = new tapObject('images/2_close/background/4.gif', 0, 0);
	
	uShirt[0] = new tapObject('images/2_close/shirt/00.gif', 227, 612);
	uShirt[1] = new tapObject('images/2_close/shirt/01.gif', 227, 612);
	uShirt[2] = new tapObject('images/2_close/shirt/02.gif', 227, 612);
	uShirt[3] = new tapObject('images/2_close/shirt/03.gif', 227, 612);
	uShirt[4] = new tapObject('images/2_close/shirt/04.gif', 227, 612);
	uShirt[5] = new tapObject('images/2_close/shirt/05.gif', 227, 612);
	uShirt[6] = new tapObject('images/2_close/shirt/06.gif', 221, 601);
	uShirt[7] = new tapObject('images/2_close/shirt/07.gif', 18, 638);
	
	uBeard[0] = new tapObject('images/2_close/beard/0.gif', 410, 500);
	uBeard[1] = new tapObject('images/2_close/beard/1.gif', 410, 530);
	uBeard[2] = new tapObject('images/2_close/beard/2.gif', 488, 506);
	uBeard[3] = new tapObject('images/2_close/beard/3.gif', 495, 475);
	uBeard[4] = new tapObject('images/2_close/beard/4.gif', 416, 508);
	uBeard[5] = new tapObject('images/2_close/beard/5.gif', 387, 539);
	
	uScalp[0] = new tapObject('images/2_close/scalp/0.gif', 414, 233);
	uScalp[1] = new tapObject('images/2_close/scalp/1.gif', 414, 233);
	uScalp[2] = new tapObject('images/2_close/scalp/2.gif', 414, 233);
	uScalp[3] = new tapObject('images/2_close/scalp/3.gif', 414, 233);
	
	uHead[0] = new tapObject('images/2_close/head/01.gif', 445, 194);
	uHead[1] = new tapObject('images/2_close/head/02.gif', 459, 211);
	uHead[2] = new tapObject('images/2_close/head/03.gif', 457, 175);
	uHead[3] = new tapObject('images/2_close/head/04.gif', 469, 253);
	uHead[4] = new tapObject('images/2_close/head/05.gif', 466, 163);
	uHead[5] = new tapObject('images/2_close/head/06.gif', 448, 13);
	uHead[6] = new tapObject('images/2_close/head/07.gif', 460, 55);
	uHead[7] = new tapObject('images/2_close/head/08.gif', 448, 53);
	uHead[8] = new tapObject('images/2_close/head/09.gif', 513, 135);
	
	uEyes[0] = new tapObject('images/2_close/eyes/00.gif', 386, 412);
	uEyes[1] = new tapObject('images/2_close/eyes/01.gif', 386, 412);
	uEyes[2] = new tapObject('images/2_close/eyes/02.gif', 414, 413);
	uEyes[3] = new tapObject('images/2_close/eyes/03.gif', 418, 411);
	uEyes[4] = new tapObject('images/2_close/eyes/04.gif', 445, 361);
	uEyes[5] = new tapObject('images/2_close/eyes/05.gif', 474, 346);
	uEyes[6] = new tapObject('images/2_close/eyes/06.gif', 396, 381);
	uEyes[7] = new tapObject('images/2_close/eyes/08.gif', 450, 366);
		
	uIcu[0] = new tapObject('images/2_close/icu/02.gif', 0, 252);
	uIcu[1] = new tapObject('images/2_close/icu/03.gif', 0, 306);
	uIcu[2] = new tapObject('images/2_close/icu/04.gif', 0, 272);
	uIcu[3] = new tapObject('images/2_close/icu/05.gif', 0, 392);
	uIcu[4] = new tapObject('images/2_close/icu/06.gif', 0, 430);
	
	uIcuR[0] = new tapObject('images/2_close/icuR/01.gif', 1036, 220);
	uIcuR[1] = new tapObject('images/2_close/icuR/02.gif', 971, 539);
	uIcuR[2] = new tapObject('images/2_close/icuR/03.gif', 855, 0);
	uIcuR[3] = new tapObject('images/2_close/icuR/04.gif', 924, 455);
	uIcuR[4] = new tapObject('images/2_close/icuR/05.gif', 856, 110);
	uIcuR[5] = new tapObject('images/2_close/icuR/06.gif', 718, 0);
	uIcuR[6] = new tapObject('images/2_close/icuR/07.gif', 1018, 0);
	
	uWall1[0] = new tapObject('images/2_close/wall1/0.gif', 0, 0);
	uWall1[1] = new tapObject('images/2_close/wall1/1trans.gif', 0, 0);
	uWall2[0] = new tapObject('images/2_close/wall2/0.gif', 141, 0);
	uWall2[1] = new tapObject('images/2_close/wall2/2trans.gif', 141, 0);
	uWall3[0] = new tapObject('images/2_close/wall3/0.gif', 424, 0);
	uWall3[1] = new tapObject('images/2_close/wall3/3trans.gif', 424, 0);
	uWall4[0] = new tapObject('images/2_close/wall4/0.gif', 690, 0);
	uWall4[1] = new tapObject('images/2_close/wall4/4trans.gif', 690, 0);
	uWall5[0] = new tapObject('images/2_close/wall5/0.gif', 952, 0);
	uWall5[1] = new tapObject('images/2_close/wall5/5trans.gif', 952, 0);
	
	// 2-3 HOUSE EXPLOSION
	chaos23[0] = new Image();
	chaos23[1] = new Image();
	chaos23[2] = new Image();
	chaos23[3] = new Image();
	chaos23[4] = new Image();
	chaos23[5] = new Image();
	chaos23[6] = new Image();
	chaos23[7] = new Image();
	chaos23[8] = new Image();
	
	chaos23[0].src = 'images/23_transition/chaos1.gif';
	chaos23[1].src = 'images/23_transition/chaos2.gif';
	chaos23[2].src = 'images/23_transition/chaos3.gif';
	chaos23[3].src = 'images/23_transition/chaos5.gif';
	chaos23[4].src = 'images/23_transition/chaos6.gif';
	chaos23[5].src = 'images/23_transition/chaos4.gif';
	chaos23[6].src = 'images/23_transition/scribbly.jpg';
	chaos23[7].src = 'images/23_transition/fire1.gif';
	chaos23[8].src = 'images/23_transition/fire2.gif';
	
	explosion23[0] = new tapObject('images/23_transition/expl1.gif', 0, 0);
	explosion23[1] = new tapObject('images/23_transition/expl2.gif', 0, 0);
	explosion23[2] = new tapObject('images/23_transition/expl3.gif', 0, 0);
	explosion23[3] = new tapObject('images/23_transition/expl4.gif', 0, 0);
	
	// 3: OUTDOOR SCENE
	c3g = 0;
	c3s = 0;
//	c3c = 0;
//	c3p1 = 0;
//	c3p2 = 0;
//	c3r = 0;
//	c3sph = 0;
//	c3sun = 0;
//	c3t = 0;
	
//	oCat[0] = new tapObject('images/3_outdoor/cat/cat.gif', 841, 492);
//	oPy1[0] = new tapObject('images/3_outdoor/pyramid1/pyramid.gif', 575, 190);
//	oPy2[0] = new tapObject('images/3_outdoor/pyramid2/steppyramid.gif', 313, 269);
//	oRuins[0] = new tapObject('images/3_outdoor/ruins/ancientruins.gif', 0, 197);
//	oSphx[0] = new tapObject('images/3_outdoor/sphinx/sphynx.gif', 656, 502);
//	oSun[0] = new tapObject('images/3_outdoor/sun/sun.gif', 214, 7);
//	oTower[0] = new tapObject('images/3_outdoor/tower/stonetower.gif', 262, 371);	
	oGround[0] = new tapObject('images/3_outdoor/ground/0.gif', 0, 407);
	
	c3mR = 0;
	c3mL = 0;
	c3sC = 0;
	c3fL = 0;
	c3fR = 0;
	c3s = 0;
	c3sat = 0;
	c3j1 = 0;
	c3j2 = 0;
	c3l = 0;
	c3w = 0;
	c3t = 0;
	c3b = 0;
	c3m = 0;
	c3cL = 0;
	c3cR = 0;
	c3ss = 0;
	c3bu = 0;
	c3h = 0;
	
	oHand[0] = new tapObject('images/3_outdoor/hands/01.gif', 343, 475);
	oHand[1] = new tapObject('images/3_outdoor/hands/02.gif', 189, 425);
	oHand[2] = new tapObject('images/3_outdoor/hands/03.gif', 276, 391);
	oHand[3] = new tapObject('images/3_outdoor/hands/04.gif', 627, 422);
	oHand[4] = new tapObject('images/3_outdoor/hands/05.gif', 580, 336);
	oHand[5] = new tapObject('images/3_outdoor/hands/06.gif', 586, 467);
	oHand[6] = new tapObject('images/3_outdoor/hands/07.gif', 577, 455);
	oHand[7] = new tapObject('images/3_outdoor/hands/08.gif', 577, 124);
	oHand[8] = new tapObject('images/3_outdoor/hands/09.gif', 597, 145);
	oHand[9] = new tapObject('images/3_outdoor/hands/10.gif', 503, 80);
	oHand[10] = new tapObject('images/3_outdoor/hands/11.gif', 303, 149);
	
	oCloudL[0] = new tapObject('images/3_outdoor/cloudL/01.gif', 21, 54);
	oCloudL[1] = new tapObject('images/3_outdoor/cloudL/02.gif', 13, 0);
	oCloudL[2] = new tapObject('images/3_outdoor/cloudL/03.gif', 103, 12);
	oCloudL[3] = new tapObject('images/3_outdoor/cloudL/04.gif', 0, 5);
	oCloudL[4] = new tapObject('images/3_outdoor/cloudL/05.gif', 0, 35);
	
	oCloudR[0] = new tapObject('images/3_outdoor/cloudR/01.gif', 787, 79);
	oCloudR[1] = new tapObject('images/3_outdoor/cloudR/02.gif', 760, 0);
	oCloudR[2] = new tapObject('images/3_outdoor/cloudR/03.gif', 798, 0);
	oCloudR[3] = new tapObject('images/3_outdoor/cloudR/04.gif', 523, 0);
	oCloudR[4] = new tapObject('images/3_outdoor/cloudR/05.gif', 705, 24);
	
	oMtnR[0] = new tapObject('images/3_outdoor/rightMountain/00.gif', 798, 314);
	oMtnR[1] = new tapObject('images/3_outdoor/rightMountain/01.gif', 768, 266);
	oMtnR[2] = new tapObject('images/3_outdoor/rightMountain/02.gif', 603, 254);
	oMtnR[3] = new tapObject('images/3_outdoor/rightMountain/03.gif', 602, 254);
	oMtnR[4] = new tapObject('images/3_outdoor/rightMountain/04.gif', 778, 249);
	oMtnR[5] = new tapObject('images/3_outdoor/rightMountain/05.gif', 815, 241);
	oMtnR[6] = new tapObject('images/3_outdoor/rightMountain/06.gif', 753, 217);
	oMtnR[7] = new tapObject('images/3_outdoor/rightMountain/07.gif', 737, 203);
	oMtnR[8] = new tapObject('images/3_outdoor/rightMountain/08.gif', 737, 195);
	
	oMtnL[0] = new tapObject('images/3_outdoor/leftMountain/00.gif', 0, 262);
	oMtnL[1] = new tapObject('images/3_outdoor/leftMountain/01.gif', 0, 266);
	oMtnL[2] = new tapObject('images/3_outdoor/leftMountain/02.gif', 56, 272);
	oMtnL[3] = new tapObject('images/3_outdoor/leftMountain/03.gif', 56, 272);
	oMtnL[4] = new tapObject('images/3_outdoor/leftMountain/04.gif', 25, 217);
	oMtnL[5] = new tapObject('images/3_outdoor/leftMountain/05.gif', 0, 280);
	oMtnL[6] = new tapObject('images/3_outdoor/leftMountain/06.gif', 0, 245);
	oMtnL[7] = new tapObject('images/3_outdoor/leftMountain/07.gif', 0, 266);
	oMtnL[8] = new tapObject('images/3_outdoor/leftMountain/08.gif', 0, 194);
	
	oSkyC[0] = new tapObject('images/3_outdoor/skyCenter/sun1.gif', 518, 16);
	oSkyC[1] = new tapObject('images/3_outdoor/skyCenter/sun2.gif', 518, 16);
	oSkyC[2] = new tapObject('images/3_outdoor/skyCenter/sun3.gif', 486, 21);
	oSkyC[3] = new tapObject('images/3_outdoor/skyCenter/sun4.gif', 517, 14);
	oSkyC[4] = new tapObject('images/3_outdoor/skyCenter/sun5.gif', 524, 17);
	oSkyC[5] = new tapObject('images/3_outdoor/skyCenter/sun6.gif', 545, 29);
	oSkyC[6] = new tapObject('images/3_outdoor/skyCenter/sun7.gif', 533, 16);
	
	oTree[0] = new tapObject('images/3_outdoor/tree/01.gif', -50, 248);
	oTree[1] = new tapObject('images/3_outdoor/tree/02.gif', -50, 274);
	oTree[2] = new tapObject('images/3_outdoor/tree/03.gif', -50, 335);
	oTree[3] = new tapObject('images/3_outdoor/tree/04.gif', -50, 272);
	oTree[4] = new tapObject('images/3_outdoor/tree/05.gif', -50, 281);
	oTree[5] = new tapObject('images/3_outdoor/tree/06.gif', -50, 281);
	oTree[6] = new tapObject('images/3_outdoor/tree/07.gif', -50, 280);
	
	oBush[0] = new tapObject('images/3_outdoor/mbush/00.gif', 724, 621);
	oBush[1] = new tapObject('images/3_outdoor/mbush/01.gif', 724, 695);
	oBush[2] = new tapObject('images/3_outdoor/mbush/02.gif', 690, 618);
	oBush[3] = new tapObject('images/3_outdoor/mbush/03.gif', 689, 615);
	oBush[4] = new tapObject('images/3_outdoor/mbush/04.gif', 730, 641);
	oBush[5] = new tapObject('images/3_outdoor/mbush/05.gif', 707, 624);
	oBush[6] = new tapObject('images/3_outdoor/mbush/06.gif', 644, 660);
	oBush[7] = new tapObject('images/3_outdoor/mbush/07.gif', 644, 651);
	oBush[8] = new tapObject('images/3_outdoor/mbush/08.gif', 666, 657);
	oBush[9] = new tapObject('images/3_outdoor/mbush/09.gif', 666, 520);

	oWalnut[0] = new tapObject('images/3_outdoor/walnut/00.gif', 187, 642);
	oWalnut[1] = new tapObject('images/3_outdoor/walnut/01.gif', 250, 663);
	oWalnut[2] = new tapObject('images/3_outdoor/walnut/02.gif', 250, 651);
	oWalnut[3] = new tapObject('images/3_outdoor/walnut/03.gif', 238, 604);
	oWalnut[4] = new tapObject('images/3_outdoor/walnut/05.gif', 237, 603);
	oWalnut[5] = new tapObject('images/3_outdoor/walnut/06.gif', 213, 603);
	oWalnut[6] = new tapObject('images/3_outdoor/walnut/07.gif', 178, 631);
	oWalnut[7] = new tapObject('images/3_outdoor/walnut/08.gif', 177, 631);
	oWalnut[8] = new tapObject('images/3_outdoor/walnut/09.gif', 177, 630);
	
	oMan[0] = new tapObject('images/3_outdoor/man/00.gif', 950, 612);
	oMan[1] = new tapObject('images/3_outdoor/man/01.gif', 944, 542);
	oMan[2] = new tapObject('images/3_outdoor/man/02.gif', 944, 542);
	oMan[3] = new tapObject('images/3_outdoor/man/03.gif', 944, 542);
	oMan[4] = new tapObject('images/3_outdoor/man/04.gif', 949, 496);
	oMan[5] = new tapObject('images/3_outdoor/man/05.gif', 949, 377);
	oMan[6] = new tapObject('images/3_outdoor/man/06.gif', 849, 477);
	oMan[7] = new tapObject('images/3_outdoor/man/07.gif', 901, 516);
	oMan[8] = new tapObject('images/3_outdoor/man/08.gif', 949, 520);
	
	oLegs[0] = new tapObject('images/3_outdoor/legs/01.gif', 757, 341);
	oLegs[1] = new tapObject('images/3_outdoor/legs/02.gif', 761, 404);
	oLegs[2] = new tapObject('images/3_outdoor/legs/03.gif', 662, 404);
	oLegs[3] = new tapObject('images/3_outdoor/legs/04.gif', 487, 404);
	oLegs[4] = new tapObject('images/3_outdoor/legs/05.gif', 432, 404);
	oLegs[5] = new tapObject('images/3_outdoor/legs/06.gif', 433, 404);
	oLegs[6] = new tapObject('images/3_outdoor/legs/07.gif', 294, 347);
	oLegs[7] = new tapObject('images/3_outdoor/legs/08.gif', 290, 344);
	oLegs[8] = new tapObject('images/3_outdoor/legs/09.gif', 294, 347);
	oLegs[9] = new tapObject('images/3_outdoor/legs/10.gif', 433, 404);
	oLegs[10] = new tapObject('images/3_outdoor/legs/11.gif', 432, 404);
	oLegs[11] = new tapObject('images/3_outdoor/legs/12.gif', 487, 404);
	oLegs[12] = new tapObject('images/3_outdoor/legs/13.gif', 662, 404);
	oLegs[13] = new tapObject('images/3_outdoor/legs/14.gif', 761, 404);
	
	oScrap[0] = new tapObject('images/3_outdoor/scrap/00.gif', 437, 282);
	oScrap[1] = new tapObject('images/3_outdoor/scrap/01.gif', 484, 233);
	oScrap[2] = new tapObject('images/3_outdoor/scrap/02.gif', 521, 145);
	oScrap[3] = new tapObject('images/3_outdoor/scrap/03.gif', 521, 91);
	oScrap[4] = new tapObject('images/3_outdoor/scrap/04.gif', 525, 135);
	
	oBuild[0] = new tapObject('images/3_outdoor/build/00.gif', 1006, 467);
	oBuild[1] = new tapObject('images/3_outdoor/build/01.gif', 934, 285);
	oBuild[2] = new tapObject('images/3_outdoor/build/02.gif', 876, 343);
	oBuild[3] = new tapObject('images/3_outdoor/build/03.gif', 906, 371);
	oBuild[4] = new tapObject('images/3_outdoor/build/04.gif', 840, 447);
	oBuild[5] = new tapObject('images/3_outdoor/build/05.gif', 926, 371);
	oBuild[6] = new tapObject('images/3_outdoor/build/06.gif', 902, 393);
	
	oSat[0] = new tapObject('images/3_outdoor/sat/01.gif', CANVAS_WIDTH, 0);
	oSat[1] = new tapObject('images/3_outdoor/sat/02.gif', CANVAS_WIDTH, 0);
	oSat[2] = new tapObject('images/3_outdoor/sat/03.gif', CANVAS_WIDTH, 0);
	
	oJet1[0] = new tapObject('images/3_outdoor/jet1/01.gif', CANVAS_WIDTH, 52);
	oJet1[1] = new tapObject('images/3_outdoor/jet1/02.gif', CANVAS_WIDTH, 52);
	
	oJet2[0] = new tapObject('images/3_outdoor/jet2/01.gif', -327, 75);
	oJet2[1] = new tapObject('images/3_outdoor/jet2/02.gif', -327, 75);
	
	// 5: SKY SCENE
	c5bg = 0;	
	sBG[0] = new tapObject('images/4_sky/background/00.jpg', 0, 0);
	sBG[1] = new tapObject('images/4_sky/background/01.jpg', 0, 0);
	sBG[2] = new tapObject('images/4_sky/background/02.jpg', 0, 0);
	sBG[3] = new tapObject('images/4_sky/background/03.jpg', 0, 0);
	sBG[4] = new tapObject('images/4_sky/background/04.jpg', 0, 0);
	
	// End Transition
	cracks[0] = new tapObject('images/3_outdoor/crack/crack1.gif', 0, 0);
	cracks[1] = new tapObject('images/3_outdoor/crack/crack2.gif', 0, 0);
	cracks[2] = new tapObject('images/3_outdoor/crack/crack3.gif', 0, 0);
}

function resetImages() {
	c5bg = 0;
	c3mR = 0;
	c3mL = 0;
	c3sC = 0;
	c3fL = 0;
	c3fR = 0;
	c3s = 0;
	c3sat = 0;
	c3j1 = 0;
	c3j2 = 0;
	c3l = 0;
	c3w = 0;
	c3t = 0;
	c3b = 0;
	c3m = 0;
	c3cL = 0;
	c3cR = 0;
	c3ss = 0;
	c3bu = 0;
	c3h = 0;
	c3g = 0;
	c3s = 0;
	showScalp = true;
	c2s = 0;
	c2e = 0;
	c2Brd = 0;
	c2bg = 0;
	c2h = 0;
	c2w1 = 0;
	c2w2 = 0;
	c2w3 = 0;
	c2w4 = 0;
	c2w5 = 0;
	c2sh = 0;
	c2icu = 0;
	c2icuR = 0;
	c1h = 0;
	c1bg = 0;
	c1cR = 0;
	c1cL = 0;
	c1p = 0;
	c1w = 0;
	c1b = 0;
	c1t = 0;
	c1f = 0;
	c1bed = 0;
	c1s1 = 3;
	c1s2 = 0;
	c1s3 = 0;
	c1st = 0;
	c1ch = 0;
	c1c = 0;
	c1wa = 0;
	c1m = 0;
	c1w2 = 0;
	c1w3 = 0;
	c0l = 0;
	cClick = 0;
	c4bg = 0;
	c4w = 0;
	
	// menu reset
	for ( var i=0; i<mLogo.length; i++) { mLogo[i].resetPos(); }
	mRopeL.resetPos();
	mRopeR.resetPos();
	mCurtainL.resetPos();
	mCurtainR.resetPos();
	
	// inside reset position
	for ( var i=0; i<iCurtainR.length; i++) { iCurtainR[i].resetPos(); }
	for ( var i=0; i<iCurtainL.length; i++) { iCurtainL[i].resetPos(); }
	for ( var i=0; i<iPoster.length; i++) { iPoster[i].resetPos(); }
	for ( var i=0; i<iWindow.length; i++) { iWindow[i].resetPos(); }
	for ( var i=0; i<iBoard.length; i++) { iBoard[i].resetPos(); }
	for ( var i=0; i<iTrash.length; i++) { iTrash[i].resetPos(); }
	for ( var i=0; i<iShelf1.length; i++) { iShelf1[i].resetPos(); }
	for ( var i=0; i<iShelf2.length; i++) { iShelf2[i].resetPos(); }
	for ( var i=0; i<iShelf3.length; i++) { iShelf3[i].resetPos(); }
	for ( var i=0; i<iBed.length; i++) { iBed[i].resetPos(); }
	for ( var i=0; i<iChair.length; i++) { iChair[i].resetPos(); }
	for ( var i=0; i<iMuy.length; i++) { iMuy[i].resetPos(); }
	for ( var i=0; i<iCeiling.length; i++) { iCeiling[i].resetPos(); }
	for ( var i=0; i<iWall.length; i++) { iWall[i].resetPos(); }
	for ( var i=0; i<iWall2.length; i++) { iWall2[i].resetPos(); }
	for ( var i=0; i<iWall3.length; i++) { iWall3[i].resetPos(); }
	
	// up close reset position
	for ( var i=0; i<uBG.length; i++) { uBG[i].resetPos(); }
	for ( var i=0; i<uBeard.length; i++) { uBeard[i].resetPos(); }
	for ( var i=0; i<uHead.length; i++) { uHead[i].resetPos(); }
	for ( var i=0; i<uScalp.length; i++) { uScalp[i].resetPos(); }
	for ( var i=0; i<uEyes.length; i++) { uEyes[i].resetPos(); }
	for ( var i=0; i<uIcu.length; i++) { uIcu[i].resetPos(); }
	for ( var i=0; i<uIcuR.length; i++) { uIcuR[i].resetPos(); }
	for ( var i=0; i<uShirt.length; i++) { uShirt[i].resetPos(); }
	
	// outside reset
	for ( var i=0; i<oGround.length; i++) { oGround[i].resetPos(); }
	for ( var i=0; i<oMtnR.length; i++) { oMtnR[i].resetPos(); }
	for ( var i=0; i<oMtnL.length; i++) { oMtnL[i].resetPos(); }
	for ( var i=0; i<oSkyC.length; i++) { oSkyC[i].resetPos(); }
	for ( var i=0; i<oSat.length; i++) { oSat[i].resetPos(); }
	for ( var i=0; i<oJet1.length; i++) { oJet1[i].resetPos(); }
	for ( var i=0; i<oJet2.length; i++) { oJet2[i].resetPos(); }
	for ( var i=0; i<oWalnut.length; i++) { oWalnut[i].resetPos(); }
	for ( var i=0; i<oLegs.length; i++) { oLegs[i].resetPos(); }
	for ( var i=0; i<oTree.length; i++) { oTree[i].resetPos(); }
	for ( var i=0; i<oBush.length; i++) { oBush[i].resetPos(); }
	for ( var i=0; i<oMan.length; i++) { oMan[i].resetPos(); }
	for ( var i=0; i<oCloudL.length; i++) { oCloudL[i].resetPos(); }
	for ( var i=0; i<oCloudR.length; i++) { oCloudR[i].resetPos(); }
	for ( var i=0; i<oScrap.length; i++) { oScrap[i].resetPos(); }
	for ( var i=0; i<oBuild.length; i++) { oBuild[i].resetPos(); }
}