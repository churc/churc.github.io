/////full size images, starts blank then fades to first to second to third image, stays on last one  

$(function(){
    var yourFade = 2.5, // time fade in & out
        yourDelay = .2, // delay 
        fadeTime = yourFade * 1000, 
        delayTime = yourDelay * 1000, 
        totalTime = fadeTime + delayTime, 
        allElems, 
        elemNoFade, // last image
        i,
        fadingElem;
 
    for (i = 0, allElems = $('.toBeFaded').length, elemNoFade = allElems - 1; i < allElems; i+=1) {
                fadingElem = "#elem" + i;
                    if (i === 0) {         		 	
                        $(fadingElem).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
                            } 
                                else if (i === elemNoFade) {
                            $(fadingElem).delay(totalTime * i).fadeIn(fadeTime);   ////stop on last image, partly pixelated
                               } 
                                else {
                            $(fadingElem).delay(totalTime * i).fadeIn(fadeTime).delay(delayTime).fadeOut(fadeTime);
                         }
                    }
            });


///////////////move details across screen and fade on left

$(function() {
        var width = $(document).width();
        
        function toRight() {
            $(".move").animate({
                    left: -200,
                    opacity:1
                }, 3000, 'linear', function() {
             setTimeout(toLeft, 1);
          });
        
        
        function toLeft() {
            $(".move").animate({
                    left: width-200,
                    opacity:1
                        }, 3000, 'linear', function() {
                    setTimeout(toRight, 1);
            });
        
            setTimeout(toRight, 1);
            
            setTimeout(function() {
                $('#details').fadeOut(60);
            });
            }
        }
        setTimeout(toRight, 1);
});


//////move details up and down screen more slowly and fade at bottom 

$(function() {
        var height = $(document).height();
        
        function toBottom() {
            $(".move2").animate({
            top: -100,
            opacity: 0.5
          }, 6000, function() {
             setTimeout(toTop, 5);
        });
        
        
        function toTop() {
            $(".move2").animate({
            top: height -5,
            opacity: 0.5
          }, 6000, function() {
             setTimeout(toBottom, 5);
          });
          setTimeout(toBottom, 1);
          
          setTimeout(function() {
                $('#details2').fadeOut(2000);
                }, 12000);
            }
        }
            setTimeout(toBottom, 1);
    });


///////// fade name out 

        $('#colName').fadeTo(12000, 0);
        
        
///////// fade in dashed squares on random timing 

        setTimeout(function() {
                $('#square').fadeIn(gen());
                $('#square2').fadeIn(gen());
                $('#square3').fadeIn(gen());
            });

      
////dashed squares random changing border color on setInterval
      
        var colors = ["#FF6961", "#800000","#F4C2C2","#FFDB58","#E9D66B","#FFBF00", "#FF83FA", "#DC143C", "#9A32CD","#1E90FF","#00FA9A","#EE2C2C","#71C671","#5B5B5B","#696969", "#B8860B","#93C572", "#138808","#B2EC5D","#6495ED","#1560BD"];
        
        var col = function(){
            var hex = Math.floor(Math.random()* colors.length);
            var col = colors[hex];
            $('.color').animate({borderColor: col }, 6000);
        };
        
        $(function(){
                setInterval(col, 6000);
        });
      
    
///////// fade in pencil on random timing function, hyperlink

        setTimeout(function() {
                $('#pencilBlue').fadeIn(gen());
                });
                
///////// fade in resume  on random timing function, hyperlink

        setTimeout(function() {
                $('#resume').fadeIn(gen());
                });
 
                
//////// random artwords on click

        $(function(){
            var artwords=["mapping","3 dimensions","2 dimensions", "objects", "social spaces", "spaces", "space", "2-d surfaces", "materials","systems", "architectural", "projections", "GIS mapping", "cartography", "spatial", "narratives", "data", "visualization", "mark making", "drawing", "investigations", "wall-based", "wall installations", "sparely drawn", "drawings on mylar", "sewing thread", "fragments", "image information", "infrastructures", "archival maps", "abstract marks", "systems", "timelines", "partial outlines", "viewpoints", "structures", "between not much & something", "alluding", "pencil", "partly erasing", "digital", "repeated grids", "materiality", "temporal changes", "visual mapping systems", "remembering places", "partially outlining", "fragments", "wall pieces", "fragile", "suggested spaces", "visualizing", "mylar", "drawing in space","juxtaposed","multiples","coastal erosion"];
            
                $("#headerWord").on('click', function (){
                        var random = Math.floor(Math.random() * artwords.length);
                        var word = artwords[random];
                        $(this).text(word);
                    });
            });

        
////////// animate artwords button 

                 $('#headerWord').mouseover(function() {
                         ($(this).animate({'top': '-=10px'},'fast')
                          );
                         ($(this).animate({'top': '+=10px'}, 'fast')
                         );
                    });

                
/////pencil rotate back and forth on hover

                $("#pencilBlue").mouseover(function(){
                    $(this).toggleClass('rotated');
                    $(this).toggleClass('rotated2');
                });

/////// resume flip 360 on hover

                $("#resume").mouseover(function(){
                        $(this).addClass("flip");
                      }).mouseleave(function(){
                        $(this).removeClass("flip");
                });

//////////////random timing function gen

         function gen(){
             var a = Math.floor(Math.random() * 20000);
             return a;
         }         
            
            
//////////////////        
////////// pixelate last image////works but pixelates on and off on hover

// $(function() {
// $('#elem4').pixelate();
//     document.querySelector('#elem4').pixelate({
//         value: 0.5, 
//         reveal: false
//     });
// });

