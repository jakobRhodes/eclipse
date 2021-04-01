function setDate() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}
function createGameBoard() {
    document.getElementById("gameBoard").innerHTML = "";
}