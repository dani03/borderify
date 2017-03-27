// déclarer une variable contenant une chaine de caractères

// déclarer une variable contenant un nombre

/****************************************************************************/

// tableaux

/****************************************************************************/

// déclarer une variable contenant un tableau vide

// ajouter des éléments au tableau: "foo", "bar", "baz"

// parcourir le tableau et ajouter les éléments au textContent de body

/****************************************************************************/

// objets

/****************************************************************************/

// déclarer une variable contenant un objet vide

// ajouter des éléments à l'objet: {"foo": 1, "bar": 2, "baz": 3}

// parcourir l'objet et ajouter les éléments au textContent de body

// tester si un objet a une clé//



var nom = "hello world";
var calcul = "28";

var tableau = [
                 "ordi","souris","table"
             ]

 var item ="";
for(var i = 0; i < tableau.length; i++){
     item += tableau[i]+" ";
}
  console.log(item);

 	var monobjet = {"cle":1,"bois":2,"porte":3,"ecran":4 };

 	var prop ="";

 	for( let propt in monobjet){
 		prop += propt + " = " +  monobjet[propt] + " ";
  	}

      console.log(prop);

alert(monobjet.hasOwnProperty("cle"));
alert(monobjet.hasOwnProperty("bois"));
alert(monobjet.hasOwnProperty("argent"));


var elements = getElementByTagName("*");
var balises = [];
for (var i = 0; i < elements.length; i++) {
	var tag = elements[i].tagName;
}
