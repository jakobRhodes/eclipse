function setDate() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}
function createGameBoard() {
    //Retrieve size from select option
    var boardSize = document.getElementById("boardSize").value;
    //Default to 8
    if (boardSize < 8)
        boardSize = 8
    //Sets the number of columns in the grid element
    var column = "";
    for (var i = 0; i < boardSize; i++) {
        column += "auto ";
    }
    document.getElementById("gameBoard").style.gridTemplateColumns = column;
    //Variables for loop
    var boardSquare = "";
    var number = boardSize;
    var letter = 0;
    switch(boardSize) {
    case "8":
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
        break;
    case "10":
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
        break;
    case "12":
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
        break;
    }
    numberOfBoardSquares = boardSize * boardSize;
    var isNotation = 0;
    if (document.getElementById('notation').checked) {
        isNotation = document.getElementById('notation').value;
      }
    for (var i = 0; i < numberOfBoardSquares; i++) {
        if (isNotation)
            boardSquare += '<div class="square" id="' + letters[letter] + number + '" ondrop="drop(event)" ondragover="allowDrop(event)">' + letters[letter] + number + '</div>';
        else
            boardSquare += '<div class="square" id="' + letters[letter] + number + '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>'
        if (letter + 1 == boardSize) {
            letter = 0;
            number--;
        }
        else { 
            letter++;
        }
    }
    document.getElementById("gameBoard").innerHTML = boardSquare;
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}