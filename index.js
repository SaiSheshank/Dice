function player1(){
var randomnumber = Math.floor(Math.random()*6)+1;
var image = "images/"+"d"+randomnumber+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", image);
document.querySelector("h1").innerHTML="Player 2 Turn";
}
function player2(){
var randomnumber2 = Math.floor(Math.random()*6)+1;
var image2 = "images/"+"d"+randomnumber2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", image2);
document.querySelector("h1").innerHTML="Player 1 Turn";
}
