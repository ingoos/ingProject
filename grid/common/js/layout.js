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


// radio box to selct box custom
radioBtn = document.querySelectorAll('input[name=test]+label');
                                
[].forEach.call(radioBtn,function(btn){
    btn.addEventListener('click',function(event){
        console.log(event.target.innerText);
        document.querySelector('input[name=radio_text]').value= event.target.innerText;
        document.querySelector('label[id=search-type]').innerHTML= event.target.innerText;
        document.querySelector('#select-checkbox1').checked = false;
    },true)
});

window.addEventListener('click',function(envet){
    if( document.querySelector('#select-checkbox1').checked == true ){
        //document.querySelector('#select-checkbox1').checked = false;
        console.log('test2');
    }
    console.log('test');
},false);