


function createGame(){

    turn = "o"

    playerOScore = 0
    playerXScore = 0

    isThereAWinner = false
    
    function initialiseGameTurnStatus() {
        const turnStatus = document.getElementById("turnStatus")
        turnStatus.textContent = turn +"'s Turn"
    
    }

    function flip(box){
        const square = document.getElementById(box)
        const turnStatus = document.getElementById("turnStatus")
        if (!square.textContent && isThereAWinner == false) {
            
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

    function checkForTie(){
        const square1 = document.getElementById("box1Text")
        const square2 = document.getElementById("box2Text")
        const square3 = document.getElementById("box3Text")
        const square4 = document.getElementById("box4Text")
        const square5 = document.getElementById("box5Text")
        const square6 = document.getElementById("box6Text")
        const square7 = document.getElementById("box7Text")
        const square8 = document.getElementById("box8Text")
        const square9 = document.getElementById("box9Text")
        const turnStatus = document.getElementById("turnStatus")

        if (square1.textContent && square2.textContent && square3.textContent 
            && square4.textContent && square5.textContent && square6.textContent
            && square7.textContent && square8.textContent && square9.textContent
            && isThereAWinner == false){
                turnStatus.textContent = "Tie!"
                spawnPlayAgainButton()
            }
    }

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

        if (isThereAWinner == false){

            if (square1.textContent && square1.textContent == square2.textContent && square2.textContent == square3.textContent){
                turnStatus.textContent = "The winner is '" + square1.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square1.textContent)
                spawnPlayAgainButton()
            }
            else if (square1.textContent && square1.textContent == square4.textContent && square4.textContent == square7.textContent){
                turnStatus.textContent = "The winner is '" + square1.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square1.textContent)
                spawnPlayAgainButton()
            }
            else if (square1.textContent && square1.textContent == square5.textContent && square5.textContent == square9.textContent){
                turnStatus.textContent = "The winner is '" + square1.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square1.textContent)
                spawnPlayAgainButton()
            }
            else if (square2.textContent && square2.textContent == square5.textContent && square5.textContent == square8.textContent){
                turnStatus.textContent = "The winner is '" + square2.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square2.textContent)
                spawnPlayAgainButton()
            }
            else if (square3.textContent && square3.textContent == square5.textContent && square5.textContent == square7.textContent){
                turnStatus.textContent = "The winner is '" + square3.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square3.textContent)
                spawnPlayAgainButton()
            }
            else if (square3.textContent && square3.textContent== square6.textContent && square6.textContent == square9.textContent){
                turnStatus.textContent = "The winner is '" + square3.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square3.textContent)
                spawnPlayAgainButton()
            }
            else if (square4.textContent && square4.textContent == square5.textContent && square5.textContent == square6.textContent){
                turnStatus.textContent = "The winner is '" + square4.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square4.textContent)
                spawnPlayAgainButton()
            }
            else if (square7.textContent && square7.textContent == square8.textContent && square8.textContent == square9.textContent){
                turnStatus.textContent = "The winner is '" + square7.textContent + "'"
                isThereAWinner = true
                newGame.incrementPlayerScore(square7.textContent)
                spawnPlayAgainButton()
            }
    }}

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
        if (playAgainButton){
            playAgainButton.remove()
        }
        
    }

    
    return {initialiseGameTurnStatus, flip, checkForWinner, resetGameBoard, incrementPlayerScore, displayPlayerScore, resetPlayerScore,
         spawnPlayAgainButton, removePlayAgainButton, checkForTie}
    }
    



var newGame = createGame()


function boxClicked(box){
    newGame.flip(box)
    newGame.checkForWinner()
    newGame.displayPlayerScore()
    newGame.checkForTie()
}

function clickNewGame(){
    newGame.resetGameBoard()
    newGame.initialiseGameTurnStatus()
    newGame.removePlayAgainButton()
    newGame.resetPlayerScore()
    newGame.displayPlayerScore()
    isThereAWinner = false
}

function clickPlayAgain(){
    isThereAWinner = false
    newGame.resetGameBoard()
    newGame.initialiseGameTurnStatus()
    newGame.removePlayAgainButton()
}