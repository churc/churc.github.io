////RUN SERVER.JS and VIEW CODE ONLINE AT https://website2-churc.c9users.io

//whole page start blank then first fade to first to second to third image, stay on 4th and pixelate

$(function(){
    var yourFade = 2.5, // time fade in & out
        yourDelay = .2, // delay 
        fadeTime = yourFade * 1000, 
        delayTime = yourDelay * 1000, 
        totalTime = fadeTime + delayTime, 
        allElems, 
        elemNoFade, // last elem
        i,
        fadingElem;
 
    for (i = 0, allElems = $('.toBeFaded').length, elemNoFade = allElems - 1; i < allElems; i+=1) {
                fadingElem = "#elem" + i;
                    if (i === 0) {         		 	
                        $(fadingElem).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
                            } 
                                else if (i === elemNoFade) {
                            $(fadingElem).delay(totalTime * i).fadeIn(fadeTime);   ////stop on last image
                            
                                    setTimeout(function()  {              ///pixelate last image
                                        $(fadingElem).pixelate({
                                            value: 0.9, 
                                            reveal: false,
                                            revealonclick: false,
                                        });
                                    }, (totalTime * i))
                                
                                } 
                                else {
                            $(fadingElem).delay(totalTime * i).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
                         }
                    }
            });

///////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////move elements on top of drawing across screen back & forth
// $(document).ready(function(e) {
//         var width = $(document).width();
        
//         function toLeft() {
//             $(".move").animate({
//             left: -70
//           }, 15000, function() {
//              setTimeout(toRight, 10);
//           });
        
//         function toRight() {
//             $(".move").animate({
//             left: width-50
//           }, 15000, function() {
//              setTimeout(toLeft, 5);
//           });
//           setTimeout(toLeft, 1);
//         }
       
//         }
//             setTimeout(toLeft, 1);
// });

////////////\\\\\\\\\\\\\\\\\\\\\\\\\

////move elements on top of drawing across screen back & forth        

$(document).ready(function(e) {
        var width = $(document).width();
        
        function toRight() {
            $(".move").animate({
                left: -80,
                opacity:1
          }, 4000, function() {
             setTimeout(toLeft, 1);
             
             
             setTimeout(function() {
                $('#detail4').fadeOut('slow');
            }, 9000);
             
          });
        
        
        function toLeft() {
            $(".move").animate({
                left: width-60,
                opacity:1
          }, 4000, function() {
                setTimeout(toRight, 1);
          });
       
            setTimeout(toRight, 1);
            
                
            setTimeout(function() {
                $('#details').fadeOut('slow');
                }, 9000);
            }
        }
        setTimeout(toRight, 1);
});


/////opacity fade name out 

        $('#colName').fadeTo(10000, 0);
        

// var image = new Image(); ///error new Image is not defined

// image.src = "client/img/churchouse_lrgDraw.jpg";

// var pixelate = new Pixelate(image, {
//     amount: 0.9 // default: 0, pixelation percentage amount (range from 0 to 1)
//     // delayTime: 20000 
//     // console.log('pixelating'),
// });
// pixelate = imagePix;

////////// pixelate last image

// $(document).ready(function() {
// $('#elem4').pixelate();
//     document.querySelector('#elem4').pixelate({
//         value: 0.5, 
//         reveal: false
//     });
// });

////hold off hyperlinked detail
// function timing() {
//     $('#detail5').delay(10000);
//     console.log('delaying');
// }

// $(function() {

//     var skewed = $("#detail5");
//     rotate(45);

//         function rotate(degree) {
//             skewed.animate({
//                         'transform': 'rotate(' + 40 + '40)',
//                         'zoom': 1
                        
//             }, 10000);
//             console.log('skeeewed')
//         }
// });