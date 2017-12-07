/* Parallax */
$('.parallax-window').parallax({imageSrc: 'img/main.jpg'});


/* ---Drawing Logo--- */
var myPaths = document.querySelectorAll('path');
console.log(myPaths);
        
for(let i=0; i < myPaths.length; i++){
            
            var myLength = myPaths[i].getTotalLength();
            myPaths[i].style.strokeDasharray=myLength;
            myPaths[i].style.strokeDashoffset=myLength;
            
            setTimeout(function(){
                console.log(i)
                console.log("hi");
                myPaths[i].classList.add('drawMe'); }, 700*i);
        
}

/*--Back to top button--*/
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut('fast', 0);
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});


/*--Typing head title--*/
$('.head_title').typeIt({
     // options
});
