var hamburgerOpenBtn = document.querySelector('.hamburgerBtnShow'); /* catching hamburger Open icon */

var hamburgerCloseBtn = document.querySelector('.hamburgerBtnClose');/* catching hamburger Close icon */

var menu =document.querySelector('.menu'); /* catching menu content */


/* click event on opening hamburger item*/
hamburgerOpenBtn.addEventListener('click',function(){
    
   menu.style.right=0;

})
/* click event on closing hamburger item*/
hamburgerCloseBtn.addEventListener('click',function(){
    
    menu.style.right='-100%';
    
})

/* for resizing on all the screens*/
var $item = $('body'); 
var $wHeight = $(window).height();
$(window).on('resize', function (){
   $wHeight = $(window).height();
   $item.height($wHeight);
 });
