
let currentMarker = 'X'
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const handleClick = (element) => {
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}

const addMarker = (id) => {

  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))

  board[row][column] = currentMarker
  document.getElementById(id).innerHTML = currentMarker

  checkForWin()
}

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  currentMarker = currentMarker === "X" ? "O" : "X"
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    setTimeout(() => {
      window.alert(`Player ${currentMarker} won!`)
    }, 100);
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
return board.some(item => {
  return item.every(x => (x === 'X' || x === 'O'))
})
}

const verticalWin = () => {

  //////// THIS DOESN'T WORK! WHYYYYYYY //////////////
  let verticalBoard = [
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]]
  ]
  return verticalBoard.some(item => {
    console.log('verticalBoard item:', item)
    return item.every(x => (x === 'X' || x === 'O'))
  })
  // ///////////////////////////////////// /////////////////////
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
}

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  const squares = document.getElementsByTagName('TD')
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  // for (i=0; i < squares.length; i++) {

  //   // will log out the id of each square as it loops over them.
  //   console.log(squares[i].id)

  //   // sets the innerHTML to null to replace the "X" or "O"
  //   squares[i].innerHTML = null
  // }
  for(square of squares) {
    square.innerHTML = null
  }
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

}