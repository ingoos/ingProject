 /* main content resizeing */
 main_visual = document.querySelector('#main-visual');
 side = document.querySelector('#side');
 menu_check_btn = document.querySelector('#menu-icon');
 sideWidth = getCurrentSideWidth();

 /* window resize */
 function displayWindowSize(){
     // Get width and height of the window excluding scrollbars
     
     sideWidth = getCurrentSideWidth();
     var MainVisualWidth = document.documentElement.clientWidth;
     main_visual.style.width = MainVisualWidth - sideWidth[0] + "px";
     //document.querySelector('#main-visual-content').textContent = main_visual.style.width;
 }

 function getCurrentSideWidth(){
     w = [];
     if(menu_check_btn.checked == true) {
         w = [255,0];
     }else{
         w = [0,255];
     }
     return w;
 }

 //init
 displayWindowSize();

 // Display result inside a div element
 window.addEventListener("resize", displayWindowSize);


 /* menu icon click Event */
 
 menu_check_btn.addEventListener('click', function(event){
     side.style.left = -(sideWidth[0])+"px";
     main_visual.style.left = sideWidth[1]+"px";
     displayWindowSize();
 });