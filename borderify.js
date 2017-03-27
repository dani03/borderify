document.body.style.border = "5px solid red";
document.body.insertAdjacentHTML("afterBegin", "<h2> Hello World </h2>");
//var test = document.getElementsByTagName("h2")[0].style.backgroundColor = "red";


/*var header = document.createElement("header");
var txt = document.createTextNode("hello world");
header.appendChild(txt);
document.body.inserBefore(header,document.body.firstChild);
*/


var elements = document.getElementsByTagName("*");
var balises = [];
for (var i = 0; i < elements.length; i++) {
	var tag = elements[i].tagName.toLowerCase();
	if (balises.indexOf(tag)===-1){
		balises.push(tag);

		var unNombre = document.getElementsByTagName(tag);
		console.log("il y a " + unNombre.length + ' balise de nom ' + tag);
	  }
}

 var div = document.querySelectorAll("div");

if (div.length>=42) {

  alert("il y a trop de div dans votre code html");

}