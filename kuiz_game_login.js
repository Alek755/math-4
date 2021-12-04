function Login() {
    player1 =document.getElementById("Player1_Login").value;
    player2 =document.getElementById("Player2_Login").value;

    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);

    window.location ="game_page.html";

}