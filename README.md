manipulator
===========

Code for Ty Segall's Manpulator music video.
Released under the MIT License. Feel free to use the code (with attribution).

I wanted to release this code so others can see how we created the interactive music video
for Ty Segall's Manipulator. It was designed entirely with HTML5 and javascript.

Unfortunately due to copyright and IP reasons, I can't upload any of the images or videos
used.

The overall process is quite simple. You’ll want to add an event listener to the movie file to detect when that specific clip is playing so it can run a filtering function on it each frame:

`
video = document.getElementById('video');
video.addEventListener("play", filterEffect, false);

function filterEffect() {
     renderCanvas(video);
}
`

When a movie file is playing, these steps happen every frame before it renders:

1. Draw the moving file onto the canvas.
2. Pull the image data from said canvas.
3. Go pixel by pixel looking for the green screen. If it’s there, make it that pixel transparent.
4. Draw the filtered image data back onto the canvas.

The code itself is just a reflection of this 4-step process. A canvas’ 2d drawing context has a couple of functions that make this possible: drawImage() and getImage().

Here is a simplified version of the code we used. Note that getImage() returns a single array which looks like [R1,G1,B1,A1,R2,G2,B2,A2,…,Rn,Gn,Bn,An], where R1, G1, B1, and A1 are the red, green, blue, and alpha of the first pixel, R2 is red of the 2nd pixel, etc. This function simply checks if the green value is super high and makes that pixel transparent. Also, vidRender and vidRctx are the canvas and context that you want to draw to, respectively.

`
function renderCanvas(vid) {
     if ( vid.paused || vid.embed ) return false;
     vidRctx.drawImage(vid,0,0);
     var vidData = vidRctx.getImageData(0,0,vidRender.width, vidRender.height);

     for ( var i=0; i<vidData.data.length; i+=4 ) {
         // if green is super high, filter it out.
         if ( vidData.data[i+1] > 230 ) {
              vidData.data[i+3] = 0;
         }
     }
     
     vidRctx.putImageData(vidData,0,0);
     
     setTimeout(function(){
          renderCanvas(vid);
     }, 20);
}
`

Our code has many more filters and some additional code that’s specific to how we used the video file, but it followed the same logic.
