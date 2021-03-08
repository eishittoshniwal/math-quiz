var player1_name=localStorage.getItem("player1_name")
var player2_name=localStorage.getItem("player2_name")
p1score=0
p2score=0
document.getElementById("player1name").innerHTML=player1_name
document.getElementById("player2name").innerHTML=player2_name
document.getElementById("player1score").innerHTML=p1score
document.getElementById("player2score").innerHTML=p2score
document.getElementById("questionturn").innerHTML="Question Turn- "+player1_name
document.getElementById("answerturn").innerHTML="Answer Turn- "+player2_name

function send() {
  n1=document.getElementById("n1").value
  n2=document.getElementById("n2").value
  correctanswer=n1*n2
  


qtag=`<h4>Q.${n1} x ${n2}</h4><br>`
atag=`Answer <input id="answer"><br><br>`
btag=`<button onclick="check()" class="btn btn-primary">Check</button>`
document.getElementById("output").innerHTML=qtag+atag+btag
document.getElementById("n1").value=""
document.getElementById("n2").value=""
}

qturn="player1"
aturn="player2"
function check() {
 useranswer=document.getElementById("answer").value
 console.log(answer)
 //code for changing the score
 if (correctanswer==useranswer) {
   if (aturn=="player2") {
     p2score=p2score+1
     document.getElementById("player2score").innerHTML=p2score
   } else {
     p1score=p1score+1
     document.getElementById("player1score").innerHTML=p1score
   }
 }

if (qturn=="player1") {
qturn="player2"
document.getElementById("questionturn").innerHTML="Question Turn- "+player2_name
}
else{
  qturn="player1"
  document.getElementById("questionturn").innerHTML="Question Turn- "+player1_name
}

if (aturn=="player2") {
  aturn="player1"
  document.getElementById("answerturn").innerHTML="Answer Turn- "+player1_name
} 

else {
  aturn="player2"
  document.getElementById("answerturn").innerHTML="Answer Turn- "+player2_name
}
document.getElementById("output").innerHTML=""
}