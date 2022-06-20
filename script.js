 var player1 = "";
 var player2 = "";

function add_user() {
 player1 = document.getElementById("player1_input_name").value;
 player2 = document.getElementById("player2_input_name").value;

 console.log(player1);

 localStorage.setItem("player1_name" , player1);
 localStorage.setItem("player2_name" , player2);

 window.location = "gamepage.html";
}

var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

function send() {

number1 = document.getElementById("number1_input").value;
number2 = document.getElementById("number2_input").value;

actual_answer = parseInt(number1) * parseInt(number2);

console.log(actual_answer);

question_number = "<h4>"+ number1 +" x "  + number2 + "</h4>";
input_box = "<br> Answer : <input type = 'number' id = 'user_answer' class = 'form-control'>";
button = "<br> <br> <button onclick = 'check();'>Check</button>";
row = question_number + input_box + button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1_input").value = "";
document.getElementById("number2_input").value = "";
}



