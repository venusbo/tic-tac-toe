

function initialiseGameTurnStatus() {
    const turnStatus = document.getElementById("turnStatus")
    turnStatus.textContent = "O's Turn"

}

function createGame(){

    turn = "o"

    playerOScore = 0
    playerXScore = 0
    
    function flip(box){
        const square = document.getElementById(box)
        const turnStatus = document.getElementById("turnStatus")
        if (!square.textContent) {
            
            if (turn == "o"){
                square.textContent = "o"
                turn = "x"
                console.log(turn)
                turnStatus.textContent = "X's Turn"
            }
            else {
                square.textContent = "x"
                turn = "o"
                console.log(turn)
                turnStatus.textContent = "O's Turn"
            }
    }}

    function checkForWinner(){
        const square1 = document.getElementById("box1Text")
        const square2 = document.getElementById("box2Text")
        const square3 = document.getElementById("box3Text")
        const square4 = document.getElementById("box4Text")
        const square5 = document.getElementById("box5Text")
        const square6 = document.getElementById("box6Text")
        const square7 = document.getElementById("box7Text")
        const square8 = document.getElementById("box8Text")
        const square9 = document.getElementById("box9Text")

        if (square1.textContent && square1.textContent == square2.textContent && square2.textContent == square3.textContent){
            turnStatus.textContent = "The winner is '" + square1.textContent + "'"
            newGame.incrementPlayerScore(square1.textContent)
            spawnPlayAgainButton()
        }
        else if (square1.textContent && square1.textContent == square4.textContent && square4.textContent == square7.textContent){
            turnStatus.textContent = "The winner is '" + square1.textContent + "'"
            newGame.incrementPlayerScore(square1.textContent)
            spawnPlayAgainButton()
        }
        else if (square1.textContent && square1.textContent == square5.textContent && square5.textContent == square9.textContent){
            turnStatus.textContent = "The winner is '" + square1.textContent + "'"
            newGame.incrementPlayerScore(square1.textContent)
            spawnPlayAgainButton()
        }
        else if (square2.textContent && square2.textContent == square5.textContent && square5.textContent == square8.textContent){
            turnStatus.textContent = "The winner is '" + square2.textContent + "'"
            newGame.incrementPlayerScore(square2.textContent)
            spawnPlayAgainButton()
        }
        else if (square3.textContent && square3.textContent == square5.textContent && square5.textContent == square7.textContent){
            turnStatus.textContent = "The winner is '" + square3.textContent + "'"
            newGame.incrementPlayerScore(square3.textContent)
            spawnPlayAgainButton()
        }
        else if (square3.textContent && square3.textContent== square6.textContent && square6.textContent == square9.textContent){
            turnStatus.textContent = "The winner is '" + square3.textContent + "'"
            newGame.incrementPlayerScore(square3.textContent)
            spawnPlayAgainButton()
        }
        else if (square4.textContent && square4.textContent == square5.textContent && square5.textContent == square6.textContent){
            turnStatus.textContent = "The winner is '" + square4.textContent + "'"
            newGame.incrementPlayerScore(square4.textContent)
            spawnPlayAgainButton()
        }
        else if (square7.textContent && square7.textContent == square8.textContent && square8.textContent == square9.textContent){
            turnStatus.textContent = "The winner is '" + square7.textContent + "'"
            newGame.incrementPlayerScore(square7.textContent)
            spawnPlayAgainButton()
        }
    }

    function spawnPlayAgainButton(){
        const playAgainButton = document.createElement("Button")
        const statusBar = document.getElementById("statusBar")
        playAgainButton.textContent = "Play Again"
        playAgainButton.id = "playAgainButton"
        playAgainButton.onclick = clickPlayAgain
        statusBar.appendChild(playAgainButton)
    }

    function resetGameBoard(){
        const square1 = document.getElementById("box1Text")
        const square2 = document.getElementById("box2Text")
        const square3 = document.getElementById("box3Text")
        const square4 = document.getElementById("box4Text")
        const square5 = document.getElementById("box5Text")
        const square6 = document.getElementById("box6Text")
        const square7 = document.getElementById("box7Text")
        const square8 = document.getElementById("box8Text")
        const square9 = document.getElementById("box9Text")
        square1.textContent = ""
        square2.textContent = ""
        square3.textContent = ""
        square4.textContent = ""
        square5.textContent = ""
        square6.textContent = ""
        square7.textContent = ""
        square8.textContent = ""
        square9.textContent = ""
    }

    function incrementPlayerScore(player) {
        if (player == "x"){
            playerXScore += 1
            console.log("if")
        }

        else if (player == "o"){
            playerOScore += 1
            console.log("elif")
        }

        console.log("player O's score is" + playerOScore)
        console.log("player X's score is" + playerXScore)
    }

    function resetPlayerScore(){
        playerOScore = 0
        playerXScore = 0
        turn = "o"
    }

    function displayPlayerScore() {
       const scoreDisplay = document.getElementById("scoreDisplay")
       scoreDisplay.id = "scoreDisplay"
       scoreDisplay.textContent = "X: " + playerXScore + "  O: " + playerOScore
    }


    function removePlayAgainButton() {
        const playAgainButton = document.getElementById("playAgainButton")
        playAgainButton.remove()
    }

    
    return {flip, checkForWinner, resetGameBoard, incrementPlayerScore, displayPlayerScore, resetPlayerScore,
         spawnPlayAgainButton, removePlayAgainButton}
    }
    



var newGame = createGame()


function boxClicked(box){
    newGame.flip(box)
    newGame.checkForWinner()
    newGame.displayPlayerScore()
}

function clickNewGame(){
    newGame.resetGameBoard()
    initialiseGameTurnStatus()
    newGame.removePlayAgainButton()
    newGame.resetPlayerScore()
    newGame.displayPlayerScore()
}

function clickPlayAgain(){
    newGame.resetGameBoard()
    initialiseGameTurnStatus()
    newGame.removePlayAgainButton()
    
}