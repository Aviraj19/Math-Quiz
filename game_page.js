Player1name=localStorage.getItem("Player1key");
Player2name=localStorage.getItem("Player2key");
Player1score=0;
Player2score=0;
document.getElementById("Player1name").innerHTML=Player1name + " :";
document.getElementById("Player2name").innerHTML=Player2name + " :";
document.getElementById("Player1_score").innerHTML="\t"+Player1score;
document.getElementById("Player2_score").innerHTML="\t"+Player2score;
document.getElementById("Player_question").innerHTML="Question turn : "+Player1name;
document.getElementById("Player_answer").innerHTML="Answer turn : "+Player2name;
function send() {
    get_Num1=document.getElementById("Num1").value;
    get_Num2=document.getElementById("Num2").value;
    answer=Number(get_Num1)*Number(get_Num2)
    question_tag="<h4 id='word_display'>Q."+get_Num1+" x "+get_Num2+"="+"</h4>";
    input_tag="<br>answer:<input id='input_check' type='text'>";
    button_tag="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_tag+input_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Num1").value="";
    document.getElementById("Num2").value="";
}
var question_turn="player1";
var answer_turn="player2";
function check() {
    get_answer=document.getElementById("input_check").value;
    if(answer==get_answer) {
        if(answer_turn=="player1") {
            Player1score=Player1score+1;
            document.getElementById("Player1_score").innerHTML=Player1score;
        }
        else{
            Player2score=Player2score+1;
            document.getElementById("Player2_score").innerHTML=Player2score;
             }
       }
       if(question_turn=="player1") {
        question_turn="player2";
        document.getElementById("Player_question").innerHTML="Question turn: "+Player2name;
    }
        else {
    question_turn="player1";
    document.getElementById("Player_question").innerHTML="Question turn: "+Player1name;
        }
        if(answer_turn=="player2") {
            answer_turn="player1";
            document.getElementById("Player_answer").innerHTML="Answer turn: "+Player1name;
        }
            else {
        answer_turn="player2";
        document.getElementById("Player_answer").innerHTML="Answer turn: "+Player2name;
            }
            document.getElementById("output").innerHTML="";
}