//THIS WORKS generation of text sentences works
var grammarObj = { "S":["The #placement# of an #object# or #shape# may affect the sense of #uncertainty#"],"placement":["high", "low", "right", "left", "small", "falling off"],"object":["animal", "iglow", "elephant", "ear", "eye", "anteater"],"shape":["circle", "dot", "plane", "area", "blob", "line"],"uncertainty":["uncertainty", "unease", "anxiety", "emptiness", "chaos", "confusion"]
}

var grammar = tracery.createGrammar(grammarObj)

function generate(){
	var t = grammar.flatten("#S#");
	$('h1').text(t);
}

//try change images using choice


//$('#headerImg').attr('src', 'https://www.moma.org/media/W1siZiIsIjM0NzQ2NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=7d0b09187dda89fe')
//
//var imgH = $('#headerImg').height()
//$('#headerImg').css('height', imgH *0.7 )

var artworks =['https://www.moma.org/media/W1siZiIsIjM0NzQ2NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=7d0b09187dda89fe','https://www.moma.org/media/W1siZiIsIjE3ODM5OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=fa8ccf7807c7ecd3',"https://www.moma.org/media/W1siZiIsIjM0NzQ2NiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=7d0b09187dda89fe",'https://www.moma.org/media/W1siZiIsIjM3NDgzOCJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=6fb9746aec0e8239','http://sikkemajenkinsco.com/images/artwork/644_SH%2015533.jpg','https://www.moma.org/media/W1siZiIsIjE3ODM5OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=fa8ccf7807c7ecd3','https://www.moma.org/media/W1siZiIsIjExNjMxNiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=ea1d772ea268d256','https://www.moma.org/media/W1siZiIsIjE3MjAxNiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=bb7c9f7681882be2','https://www.gagosian.com/__data/afb49f0cacdbe3cddd137355465ab9f9.jpg','https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/700x525_fit/53da626f69921a805e010656/464d87c9f6bf561c57dd0397e33d6b2c.jpg','https://www.moma.org/media/W1siZiIsIjI4NDQ1MSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=e1adc4f22491dae5','https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5576fee507a72c0678771e53/3e468cdf03e6daca135bd7d051718d57.jpeg','https://www.moma.org/media/W1siZiIsIjExNDY3MSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=4339d54d9fe7f955','https://www.moma.org/media/W1siZiIsIjI3ODkwOSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=0965e0c0d6346173','http://images.exhibit-e.com/www_lehmannmaupin_com/House_attack_2006_c_print_115_x_85_cm_hr0.jpg','https://www.moma.org/media/W1siZiIsIjExNDU5NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=0b13001850a7f038','https://www.moma.org/media/W1siZiIsIjExNjc1OSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=8c5aa565ef7b6957','https://www.moma.org/media/W1siZiIsIjE2NTY0NSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDEzNjZ4MTM2Nlx1MDAzZSJdXQ.jpg?sha=a88e182d4910f9b1','https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/1010x580_fit/5667f01ccfaf34e03c8b4568/2a43d856debede4c32ed74a4688e74b3.jpg','http://images.tanyabonakdargallery.com/www_tanyabonakdargallery_com/TILED_LisaOpp_ManHoldingLargeCamera_Tiled_IV1.jpg','http://47canal.us/ma/ma6.jpg']
//var topic = choose(artworks)

//$('.topic').img(topic)

//$('#headerImg').attr('src', 'https://i.pinimg.com/originals/ed/1b/9b/ed1b9be3f732e025e29b992d6a84c63f.jpg')
//var imgH = $('#headerImg').height()
//$('#headerImg').css('height', imgH *0.7 )

//function choose(arr){
//  return arr[Math.floor(Math.random() * arr.length)]
//}




//MENU CHANGE works
function myFunction(){
  
}
$('nav span').hover(function(){
  console.log($(this).css('color'))
  if($(this).css('color') == "rgb(0, 0, 255)"){
    $(this).css('color', 'darkgrey')
  } else {
    $(this).css('color', 'blue')
  }
})
$('nav span').click(function(){
  if($(this).text() == '??!'){
    $(this).text($(this).attr('data-original'))
  } else{
    $(this).attr('data-original', $(this).text())
  $(this).text('??!')
  }
  
})

function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}




//look at this to change the image
$('#companyName').text(company)
$('.topic').text(topic)
//$('#headerImg').attr('src', 'https://i.pinimg.com/originals/ed/1b/9b/ed1b9be3f732e025e29b992d6a84c63f.jpg')
var imgH = $('#headerImg').height()
$('#headerImg').css('height', imgH *0.7 )

//$('.redLink').css('color', 'red')

//https://i.pinimg.com/originals/ed/1b/9b/ed1b9be3f732e025e29b992d6a84c63f.jpg

function comp(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

//alert("now for some art")




//var aImgs = choice(art)
//var artImg = choice(aImgs)
//
//
//$('#artImg').img(aImgs)
//
//var imgH = $('#artImg').height()
//$('#artImg').css('height', imgH *0.7 )
//
//function choice(arr){
//  return arr[Math.floor(Math.random() * arr.length)]
//}

//var artNames = ['minimalism', 'conceptualism', 'arte povera', 'fauvism', 'cubism', 'land art', 'post minimalism']
//var artistNames = ['Gego', 'Pablo Picasso', 'Marcel Duchamp', 'Julie Mehretu', 'Helen Frankenthaler']
//
//var topic = choice(artNames)
//var artist = choice(artistNames)


//look at this for markov
//var markov = new RiMarkov(3);
//function genPnP(numSentences){
// $('h1').texts(markov.generateSentences(numSentences).join(" "))
//}
//console.log(RiTa.rhymes('cat'))
//var texts="chapter 1 Mr made no answer. Do you not want to know who has taken it?” cried his wife impatiently. You  want to tell me, and I have no objection to hearing it."
//
//markov.loadText(texts)


