//alert("now for some art")
//
//var artNames = ['minimalism', 'conceptualism', 'arte povera', 'fauvism', 'cubism', 'land art', 'post minimalism']
//var artistNames = ['Gego', 'Pablo Picasso', 'Marcel Duchamp', 'Julie Mehretu', 'Helen Frankenthaler']
//
//var topic = choice(artNames)
//var artist = choice(artistNames)

//tracery
var grammarObj = { "S":["The #placement# of an #object# or #shape# may affect the sense of #uncertainty#"],"placement":["high", "low", "right", "left", "small", "falling off"],"object":["animal", "iglow", "elephant", "ear", "eye", "anteater"],"shape":["circle", "dot", "plane", "area", "blob", "line"],"uncertainty":["uncertainty", "unease", "anxiety", "emptiness", "chaos", "confusion"]
}
var grammar = tracery.createGrammar(grammarObj)

function generate(){
	var t = grammar.flatten("#S#");
	$('h1').text(t);
}

//RiTa
var randWord;

function create() {
  randWord = RiTa.randomWord('nn')
  while (RiTa.rhymes(randWord).length < 1){
    randWord = RiTa.randomWord('nn')
    console.log(randWord)
  }
  $('#1').text('First I take my ' + randWord)
  $('#2').text('Then I put it in my ' + RiTa.randomItem(RiTa.rhymes(randWord))) 
}
//Selectors
//$(selector).function
//just a tag by itself $('h1')
//put a period in front of a class $('.menuLink')
//put a '#' in front of an id $('#companyName')
//$('.menuLink').not('.redLink').text('Archive')
//var title = $('h1').text()
//$('h1').css('color', 'orange')
//$('.menuLink:first').text(title)
//$('h1').text("what a coooool art site")
//var title2 = $('h1').text()
//$('.menuLink').eq(1).text('cool art!')
//
//$('.menuLink').last().text(title2)
//$('#artistNames').text(artist)
//$('.topic').text(topic)
//
//
//$('#headerImg').attr('src', 'https://i.pinimg.com/originals/ed/1b/9b/ed1b9be3f732e025e29b992d6a84c63f.jpg')
//var imgH = $('#headerImg').height()
//$('#headerImg').css('height', imgH *0.7 )
//
//$('.redLink').css('color', 'red')
//
//$('nav span').hover(function()
//                    {$(this).css('color','pink')})
//
//{$(this).css('color','pink')
//  console.log($(this).text())})
//
//
////https://i.pinimg.com/originals/ed/1b/9b/ed1b9be3f732e025e29b992d6a84c63f.jpeg
//
//var markov = new RiMarkov(3);
//function genPnP(numSentences){
// $('h1').text(markov.generateSentences(numSentences).join(' '))
//}
//console.log(RiTa.rhymes('cat'))
//var text = `Chapter 1
//Mr. Bennet made no answer.
//
//“Do you not want to know who has taken it?” cried his wife impatiently.
//
//“_You_ want to tell me, and I have no objection to hearing it.”
//
//markov.loadText(text)
//
//
//
//function choice(arr){
//  return arr[Math.floor(Math.random() * arr.length)]
//}