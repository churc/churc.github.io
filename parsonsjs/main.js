//////THIS WORKS generation of text sentences 

var grammarObj = { "S":["The #placement# of an #object# or #shape# may affect the sense of #uncertainty#"],"placement":["high", "low", "right", "left", "small", "falling off","up","down","inside","outside"],"object":["animal", "iglow", "elephant", "ear", "eye", "anteater","antelope","ant","arm"],"shape":["circle", "dot", "plane", "area", "blob", "line","splat","drip","pour"],"uncertainty":["uncertainty", "unease", "anxiety", "emptiness", "chaos", "confusion","oddness","offcenteredness","strangeness"]
}

var grammar =tracery.createGrammar(grammarObj)

function generate(){
	var t = grammar.flatten("#S#");
	$('h1').text(t);
}


//////
function buttonGen(){
  document.getElementById("gen").innerHTML=generate;
}

////THIS works to move button

$(document).ready(function(generate) {
 $('#buttonGen').on('click', function() {
 ($(this).animate({'top': '-=20px'},'fast')
  );
 ($(this).animate({'top': '+=20px'}, 'fast')
 );
});
});


////random image on reload works

var artworks =  ['https://www.moma.org/media/W1siZiIsIjM0NzQ2NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=7d0b09187dda89fe','https://www.moma.org/media/W1siZiIsIjE3ODM5OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=fa8ccf7807c7ecd3',"https://www.moma.org/media/W1siZiIsIjM0NzQ2NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=7d0b09187dda89fe",'https://www.moma.org/media/W1siZiIsIjM3NDgzOCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=6fb9746aec0e8239','http://sikkemajenkinsco.com/images/artwork/644_SH%2015533.jpg','https://www.moma.org/media/W1siZiIsIjE3ODM5OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=fa8ccf7807c7ecd3','https://www.moma.org/media/W1siZiIsIjExNjMxNiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=ea1d772ea268d256','https://www.moma.org/media/W1siZiIsIjE3MjAxNiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=bb7c9f7681882be2','https://www.gagosian.com/__data/afb49f0cacdbe3cddd137355465ab9f9.jpg','https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/700x525_fit/53da626f69921a805e010656/464d87c9f6bf561c57dd0397e33d6b2c.jpg','https://www.moma.org/media/W1siZiIsIjI4NDQ1MSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=e1adc4f22491dae5','https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5576fee507a72c0678771e53/3e468cdf03e6daca135bd7d051718d57.jpeg','https://www.moma.org/media/W1siZiIsIjExNDY3MSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=4339d54d9fe7f955','https://www.moma.org/media/W1siZiIsIjI3ODkwOSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=0965e0c0d6346173','http://images.exhibit-e.com/www_lehmannmaupin_com/House_attack_2006_c_print_115_x_85_cm_hr0.jpg','https://www.moma.org/media/W1siZiIsIjExNDU5NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=0b13001850a7f038','https://www.moma.org/media/W1siZiIsIjExNjc1OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=8c5aa565ef7b6957','https://www.moma.org/media/W1siZiIsIjE2NTY0NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=a88e182d4910f9b1','https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5667f01ccfaf34e03c8b4568/2a43d856debede4c32ed74a4688e74b3.jpg','http://images.tanyabonakdargallery.com/www_tanyabonakdargallery_com/TILED_LisaOpp_ManHoldingLargeCamera_Tiled_IV1.jpg','http://47canal.us/ma/ma6.jpg'];

var artImg = choice(artworks)
$('#headerImg').attr('src', artImg)

function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}


//MENU CHANGE works

{function myFunction(){
  
}
$('nav span').hover(function(){
  console.log($(this).css('color'))
  if($(this).css('color') == 'deepskyblue'){
    $(this).css('color', '#29d8e3')
  } else {
    $(this).css('color', 'blue')
  }
})

$('nav span').click(function(){
  if($(this).text() == '???'){
    $(this).text($(this).attr('data-original'))
  } else{
    $(this).attr('data-original', $(this).text())
  $(this).text('???')
  }
  
})

function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}}


//alert("reload for more art")




//markov works
var markov = new RiMarkov(2);


function genPnP(numSentences){
 $('h2').text(markov.generateSentences(numSentences).join(" "))
}
var text = 'Lines, Grids, Stains, Words presents drawings from the 1960s to the present that conflate the simple and seemingly impersonal formal and compositional vocabularies of Minimal art with references to the physical and the bodily. Concerned with issues of scale and perception rather than content, Minimal art often utilizes industrial fabrication techniques and materials, and its hallmark compositional strategies include straight lines and geometric forms organized in rows, grids, and sequences. But Minimal art’s relation to the body, while ever present in the medium of sculpture, is often difficult to discern in studies, sketches, and other related works on paper. This exhibition traces the ways in which remnants of the physical can be found in Minimalist works on paper, beginning in the early 1960s, when the formal conventions were defined and tested, and follows the applications of these vocabularies in reference to the body through the present day. On Line explores the radical transformation of the medium of drawing throughout the twentieth century, a period when numerous artists subjected the traditional concepts of drawing to a critical examination and expanded the mediums definition in relation to gesture and form. In a revolutionary departure from the institutional definition of drawing, and from the reliance on paper as the fundamental support material, artists instead pushed line across the plane into real space, thus questioning the relation between the object of art and the world. On Line includes approximately three hundred works that connect drawing with selections of painting, sculpture, photography, film, and dance, represented by film and documentation. In this way, the exhibition makes the case for a discursive history of mark making, while mapping an alternative project of drawing in the twentieth century.'

markov.loadText(text)

function buttonMrk(){
 document.getElementById("mrk").innerHTML=genPnP(2);
}


//2nd group of images display on click

$(document).ready(function(){
  var random = 0;
$(".generate").click(function(){
    random = Math.floor((Math.random() * artworks.length));
    $(".output").remove('.current');
    $(".output").html("<img class='current' src='" + artworks[random] + "'/>");
  });
  
});



//random rhymes not working - button issue

var randWord;
function writing() {
  randWord = RiTa.randomWord('nn')
  while(RiTa.rhymes(randWord).length<1){
    randWord = RiTa.randomWord('nn')
	
//	$(randWord).on('click', 'buttonRta', writing);
//   console.log(randWord)
//	  
  }
  $('#1').text('A work of art is ' + randWord)
  $('#2').text('Or a piece of art is ' + RiTa.randomItem(RiTa.rhymes(randWord))) 
}
function buttonRta(){
 document.getElementById("Rta").innerHTML=writing;
}



