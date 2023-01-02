const start = document.querySelector("#start-game");
const help = document.querySelector("#help");
const contribute = document.querySelector("#contribute");

function startGame()
{
    window.location = "gamepage.html"
}

start.onclick = startGame;