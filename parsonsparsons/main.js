
var grammarObj = { "S":["The #placement# of an #object# or #shape# may affect the sense of #uncertainty#"],"placement":["high", "low", "right", "left", "small", "falling off"],"object":["animal", "iglow", "elephant", "ear", "eye", "anteater"],"shape":["circle", "dot", "plane", "area", "blob", "line"],"uncertainty":["uncertainty", "unease", "anxiety", "emptiness", "chaos", "confusion"]
}

var grammar = tracery.createGrammar(grammarObj)

function generate(){
	var t = grammar.flatten("#S#");
	$('h1').text(t);
}

