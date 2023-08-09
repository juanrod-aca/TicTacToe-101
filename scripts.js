//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'
// create an array called board with three arrays inside of it. Each of these inner arrays should have three places held with empty quotes: "", separated by commas, ,.
let board = [
  ["X","",""],
  ["","",""],
  ["","",""]
]




// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  // console.log(`The element you clicked on has an id:  ${element.id}`)
  // console.log('element:', element)
  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue
  // console.log('!document.getElementById(element.id).innerHTML:', !document.getElementById(element.id).innerHTML)
  // if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  // }
}











// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  console.log('INSIDE ADDMARKER id:', id)
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  console.log('row:', row)
  console.log('column:', column)
  board[row][column] = currentMarker

  console.log('board:', board)
  
  document.getElementById(id).innerHTML = currentMarker
  checkForWin()
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  console.log('IN CHANGEMARKER currentMarker:', currentMarker)
  if(currentMarker === "X"){
    console.log('hello changing to O')
    currentMarker = "O"
  } else {
    console.log('hello changing to X')
    currentMarker = "X"
  }
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
) {
  return true
}
if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") 
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
) {
  return true
}
if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") 
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
) {
  return true
}

  // Your code here to check for horizontal wins
}

const verticalWin = () => {
  // Your code here to check for vertical wins
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
}


// const populateTodos = (listOfTodos = null) => {
//   clearList()
//   console.log('listOfTodos:', listOfTodos)
//   todos = !listOfTodos ? arrayOfTodos : listOfTodos
//   console.log('arrayOfTodos:', arrayOfTodos)
//   // get OL element, declare a variable
//  const orderedList = document.getElementById('todo-list')

//   todos.forEach(todo => {
//    // create an LI element (createElement):
//    // <li></li>
//    const listItem = document.createElement('li')

//    // create text for the LI element:
//    //  "delectus aut autem"
//    const textNode = document.createTextNode(todo.title)

//     // append text to LI element:
//     // <li>delectus aut autem</li>
//     listItem.appendChild(textNode)
     
//     // append LI element to orderedList element:
//     // <ol> <li>delectus aut autem</li> </ol>
//     orderedList.appendChild(listItem)

//  })

// };
// const filterTodos = () => {
//   // get value of input
//   // parseInt(value of input)
//   const input = document.getElementById('todo-input')
//   const inputValue = parseInt(input.value)
//   const filtered = arrayOfTodos.filter((todo) => {
//     return todo.userId === inputValue
//   })
//   console.log('filtered:', filtered)
//   clearList()
//   populateTodos(filtered)
// }

// const clearList = () => {
//   const orderedList = document.getElementById('todo-list')
//   orderedList.innerHTML = null
// }







// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
    
  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  const squares = document.getElementsByTagName('TD')

  console.log('squares:', squares)
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {
  
    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
}

// if (condition) {
// // 
// } else if (condtion) {
// // 
// } else {
// // 
// }