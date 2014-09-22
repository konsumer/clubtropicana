# changes I made

*  moved everything into assets/ to keep it neat
*  Put all js in assets/site.js. moved all script tags to bottom, and put in correct order. This helps performance & is easier to read.
*  moved all style into assets/site.css, and put at top (for performance.)
*  moved all video & audio to external hosted site (dropbox) to make codebase smaller, feel free to host on your site local, just edit `<audio>` tag in index.html & `base_url` in site.js.
*  switched to CDNs for all vendor libraries
*  removed CSS rules that are redundant or not needed
*  Added prefix-freefor cleaner CSS

# recommendations

Some of these were things I noticed, some are thing s I meant to do, but didn't get around to, yet.

*  the code could be greatly simplified. I will work on a new version with simpler CSS & JS that doesn't need any libraries except angular. The overall code-size will be much smaller which means easier to read & better performance.
*  CSS3 animation improvements will improve the smoothness of the logo animation
*  scrollbar could be styled with plain CSS for better performance
*  a build script (like grunt, gulp, or brunch) could minify the javascript & css. This is not super-important if the code is more efficient & less libs are used, though
*  the logo & volume buttons would look better if they were an SVG (vector) because they're being scaled.

