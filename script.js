const start = document.querySelector("#start-game");
const help = document.querySelector("#help");
const contribute = document.querySelector("#contribute");


start.addEventListener("click", startGame);
help.addEventListener("click", getHelp);
contribute.addEventListener("click", gotoGithub)


function startGame()
{
    window.location.assign("gamepage.html");
}


function getHelp()
{
    window.location.assign("help.html");
}


function gotoGithub()
{
    window.open("https://github.com/abrarfaiaz0/hangman");
}


