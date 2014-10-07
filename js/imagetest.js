function setup() {
	var video = document.getElementById('video');
	var c=document.getElementById("canvasM_render");
	var ctx=c.getContext("2d");
	
	video.addEventListener("play", function() {
		c.height = video.clientHeight;
		c.width = video.clientWidth;
		paintCanvas(video,c,ctx);
	}, false);
	
//	var c=document.getElementById("canvasFG");
//	var ctx=c.getContext("2d");
//	var image = document.getElementById("closeMask");
//	
//	ctx.drawImage(image, 0, 0);
//	
//	var imgData=ctx.getImageData(0,0,c.width,c.height);
//	//invert colors
//	for ( var i = 0; i < imgData.data.length; i+=4) {
//		imgData.data[i] = 255-imgData.data[i];
//		imgData.data[i+1]=255-imgData.data[i+1];
//		imgData.data[i+2]=255-imgData.data[i+2];
//		imgData.data[i+3]=255;
//	}
//	
//	ctx.putImageData(imgData,0,0);	
}

function paintCanvas(video, c, ctx) {
	if ( video.paused || video.emded ) return false;
	
	ctx.drawImage(video,0,0);
	
	var vidData = ctx.getImageData(0,0,c.width,c.height);
	
	for ( var i = 0; i<vidData.data.length; i+=4 ) {
		if ( (vidData.data[i] > 10 && vidData.data[i]) < 120 ) {
			if ( vidData.data[i+1] > 90 && vidData.data[i+1] < 210 ) {
				if ( vidData.data[i+2] > 0 && vidData.data[i+2] < 95 ) {
					vidData.data[i+3] = 0;
				}
			}
		}
		if ( vidData.data[i] > 30 && vidData.data[i] < 50) {
			if ( vidData.data[i+1] > 50 && vidData.data[i+1] < 70) {
				if ( vidData.data[i+2] > 0 && vidData.data[i+2] < 40) {
					vidData.data[i+3] = 0;
				}
			}
		}
//		vidData.data[i]=255-vidData.data[i];
//		vidData.data[i+1]=vidData.data[i+1];
//		vidData.data[i+2]=vidData.data[i+2];
//		vidData.data[i+3]=255-maskData.data[i+3];
	}
	console.log("red: "+vidData.data[0] + " blue: "+vidData.data[1]+" green: "+vidData.data[2]);
	
	ctx.putImageData(vidData,0,0);
	
	setTimeout(function(){
		paintCanvas(video,c,ctx);
	}, 20);
}