var myStorage = localStorage;

var barca = document.getElementById("click"); 

var num = 0;
var hightscore = 0;

if(myStorage.hightscore)
{
	hightscore = myStorage.hightscore;
}

//document.getElementById("hightscore").innerHTML = "le record est de " + hightscore ;

function game(){
	barca.style.left = Math.floor((Math.random() * 1050) +1 ) + 'px'; 
	barca.style.top = Math.floor((Math.random() * 500) +1 ) + 'px';
	//pour faire en sorte que l'animation recommence a chaque fois qu'on clic 
    barca.classList.remove("animate");
	void barca.offsetWidth;
	barca.classList.add("animate");
	//pour rajouter + 5 au chaque fois qu'on clique
	num += 5;
	document.getElementById("compteur").innerHTML = "score: " + num ;
    
  }


 

barca.addEventListener("animationend", function () {
    
      if(hightscore < num) {
          hightscore = num;
    } 
    myStorage.hightscore = hightscore;
      document.getElementById("hightscore").innerHTML = "le record est de " + myStorage.hightscore ;
   alert("perdu");
   num = 0;
  });   

 

