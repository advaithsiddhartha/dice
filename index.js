
var a = prompt("enter the name of player 1 <3")
var b = prompt("enter the name of player 2 <3")

var randomnum1 = Math.floor(Math.random()*6) + 1 ;
var source1 = "images/dice" + randomnum1 + ".png" ;
var image23 = document.querySelectorAll("img")[0];
image23.setAttribute("src" , source1)

var randomnum2 = Math.floor(Math.random()*6) + 1 ;
var source2 = "images/dice" + randomnum2 + ".png" ;
var image238 = document.querySelectorAll("img")[1];
image238.setAttribute("src" , source2)

document.getElementById("1").innerHTML=(a);
document.getElementById("2").innerHTML=(b);

if(randomnum1 == randomnum2){
document.querySelector("h3").innerHTML=("WOW THAT'S RARE..");
document.querySelector("h1").innerHTML=("its a draw ❤️");
}

if(randomnum1 > randomnum2){
    document.querySelector("h3").innerHTML=("yayyyy!!");
    document.querySelector("h1").innerHTML=(a + " won! 🚩" );
}


    if(randomnum1 < randomnum2){
        document.querySelector("h3").innerHTML=("yayyyy!!");
        document.querySelector("h1").innerHTML=(b+" won! 🚩");
        }