player1 =localStorage.getItem("Player1");
player2 =localStorage.getItem("Player2");

question_turn = "Player1";
answer_turn = "Player2";
player1_score = 0;
player2_score = 0;

document.getElementById("Player1").innerHTML =player1;
document.getElementById("Player2").innerHTML =player2;

document.getElementById("Player_Score1").innerHTML =player1_score;
document.getElementById("Player_Score2").innerHTML =player2_score;

document.getElementById("Player_Kuestion").innerHTML ="Question Turn - " + player1;
document.getElementById("Player_Answer").innerHTML ="Answer Turn - " + player2;

function Send() {
    number1 = document.getElementById("Number_Input_1").value;
    number2 = document.getElementById("Number_Input_2").value;
    answer = parseInt(number1) * parseInt(number2);

    Multiplication_Sentence = "<h4>" + number1 + "X" + number2 + "</h4>";
    Input_Box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = Multiplication_Sentence + Input_Box + check_button;

    document.getElementById("Output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer==answer) {
        if(answer_turn=="Player1") {
            player1_score = player1_score + 1;
            document.getElementById("Player_Score1").innerHTML = player1_score;

        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("Player_Score2").innerHTML = player2_score;

        }

        if(question_turn=="Player1") {
            question_turn = "Player2"
            document.getElementById("Player_Kuestion").innerHTML = "Question Turn - " + player2;

        }
        else
        {
            question_turn = "Player1"
            document.getElementById("Player_Kuestion").innerHTML = "Question Turn - " + player1;

        }

        if(answer_turn=="Player1") {
            answer_turn = "Player2"
            document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + player2;

        }
        else
        {
            answer_turn = "Player1"
            document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + player1;

        }
    }

}