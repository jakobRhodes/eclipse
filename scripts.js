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
    //Array for square id's and notation
    switch(boardSize) {
    case "8":
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
        break;
    case "10":
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
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
        if (isNotation) {
            //Black Pawns
            if (number == boardSize - 1) {
            boardSquare += '<div class="square" id="' + letters[letter] + number + 
            '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
            + letters[letter] + number + '<img id="' + i +'" src="img/bP.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //White pawns
            else if (number == 2) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/wP.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black rooks
            else if (number == boardSize && letter == 0 || number == boardSize  && letter == boardSize - 1 ) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/bR.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //White Rooks
            else if (number == 1 && letter == 0 || number == 1  && letter == boardSize - 1) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/wR.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black Knight
            else if (number == boardSize && letter == 1 || number == boardSize  && letter == boardSize - 2 ) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/bN.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //White Knight
            else if (number == 1 && letter == 1 || number == 1  && letter == boardSize - 2) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/wN.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black Bishop
            else if (number == boardSize && letter == 2 || number == boardSize  && letter == boardSize - 3 ) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/bB.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }    
            //White Bishop
            else if (number == 1 && letter == 2 || number == 1  && letter == boardSize - 3) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/wB.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black Queen
            else if (number == boardSize && letter == 3) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/bQ.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }    
            //White Queen
            else if (number == 1 && letter == 3) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/wQ.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black King
            else if (number == boardSize && letter == 4) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/bK.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }    
            //White King
            else if (number == 1 && letter == 4) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '<img id="' + i +'" src="img/wK.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            else boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)">' 
                + letters[letter] + number + '</div>';
        }
        else  {
            //Black Pawns
            if (number == boardSize - 1) {
            boardSquare += '<div class="square" id="' + letters[letter] + number + 
            '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/bP.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //White pawns
            else if (number == 2) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/wP.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black rooks
            else if (number == boardSize && letter == 0 || number == boardSize  && letter == boardSize - 1 ) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/bR.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //White Rooks
            else if (number == 1 && letter == 0 || number == 1  && letter == boardSize - 1) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/wR.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black Knight
            else if (number == boardSize && letter == 1 || number == boardSize  && letter == boardSize - 2 ) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/bN.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //White Knight
            else if (number == 1 && letter == 1 || number == 1  && letter == boardSize - 2) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/wN.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black Bishop
            else if (number == boardSize && letter == 2 || number == boardSize  && letter == boardSize - 3 ) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/bB.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }    
            //White Bishop
            else if (number == 1 && letter == 2 || number == 1  && letter == boardSize - 3) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/wB.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black Queen
            else if (number == boardSize && letter == 3) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/bQ.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }    
            //White Queen
            else if (number == 1 && letter == 3) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/wQ.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            //Black King
            else if (number == boardSize && letter == 4) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/bK.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }    
            //White King
            else if (number == 1 && letter == 4) {
                boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="' + i +'" src="img/wK.png" draggable="true" ondragstart="drag(event)" width="auto" height="auto"></div>'; }
            else boardSquare += '<div class="square" id="' + letters[letter] + number + 
                '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
        }
        //row calculation
        if (letter + 1 == boardSize) {
            letter = 0;
            number--;
        }
        else { 
            letter++;
        }
        console.log(letter);
        console.log(letters[letter]);
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
