// player 1 init
let playerR = "red";
// player 2 init
let playerY = "yellow";
let gameOver 
let firstPlayer = playerR

// let circleButtons
let countClicks = 0
let myArray = [6,6,6,6,6,6]
const currentPlayer = document.querySelector('.playerTurn')

let winningArray = [ 
[0, 1, 2, 3], [1, 2, 3, 4],[5, 4, 3, 2],[41, 40, 39, 38],
[7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
[11, 7, 23, 29], [12, 18, 24, 30],  [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34], 
]; 
let circleButtons = document.querySelectorAll("a");   
winMessageDiv = document.querySelector("#message");

function winningScore() {
  if (currentPlayer.score = 4)
    return;
}

// document.getElementById('circle').onclick = changeColor;   

// function onClick() {
 let getCircles = document.querySelectorAll('.circle')
  getCircles.forEach(function(element) {
    let fillCircle = element.style;
    element.addEventListener('click',function() {

        // console.log(this.id.split('-'))
        let idSplit = this.id.split('-')
        let column = idSplit[0]
        // console.log(column)
        let row = idSplit[1]
        // console.log(row)
        if (firstPlayer === playerR) {
            if (document.getElementById(column+'-row2').classList.contains('taken')) {
              document.getElementById(column+'-row1').classList.add('taken', 'red')
            //   if row2 contains taken class then add taken and red to the row above
              console.log('not taken')
              firstPlayer = playerY
            //   switch to playerY
            } else if (document.getElementById(column+'-row3').classList.contains('taken')) {
                document.getElementById(column+'-row2').classList.add('taken','red')
                firstPlayer = playerY
            } else if (document.getElementById(column+'-row4').classList.contains('taken')) {
                document.getElementById(column+'-row3').classList.add('taken','red')
                firstPlayer = playerY
            }else if (document.getElementById(column+'-row5').classList.contains('taken')) {
                document.getElementById(column+'-row4').classList.add('taken','red')
                firstPlayer = playerY
            } else if (document.getElementById(column+'-row6').classList.contains('taken')) {
                document.getElementById(column+'-row5').classList.add('taken','red')
                firstPlayer = playerY
            } else {
                document.getElementById(column+'-row6').classList.add('taken','red')
                firstPlayer = playerY
            }
        } else {
            if (document.getElementById(column+'-row2').classList.contains('taken')) {
                document.getElementById(column+'-row1').classList.add('taken', 'yellow')
                console.log('not taken')
                firstPlayer = playerR
              } else if (document.getElementById(column+'-row3').classList.contains('taken')) {
                  document.getElementById(column+'-row2').classList.add('taken','yellow')
                  firstPlayer = playerR
              } else if (document.getElementById(column+'-row4').classList.contains('taken')) {
                  document.getElementById(column+'-row3').classList.add('taken','yellow')
                  firstPlayer = playerR
              }else if (document.getElementById(column+'-row5').classList.contains('taken')) {
                  document.getElementById(column+'-row4').classList.add('taken','yellow')
                  firstPlayer = playerR
              } else if (document.getElementById(column+'-row6').classList.contains('taken')) {
                  document.getElementById(column+'-row5').classList.add('taken','yellow')
                  firstPlayer = playerR
              } else {
                  document.getElementById(column+'-row6').classList.add('taken','yellow')
                  firstPlayer = playerR
                  
              }
            
        }
        checkBoard()
    }) 
} 
);
// function checkBoard() {
//     for (let y = 0; y < winningArray.length; y++) {
//       const circle1 = circleButtons[winningArray[y][0]]
//       const circle2 = circleButtons[winningArray[y][1]]
//       const circle3 = circleButtons[winningArray[y][2]]
//       const circle4 = circleButtons[winningArray[y][3]]

//       //check those squares to see if they all have the class of player-one
//       if (
//         circle1.classList.contains('playerR') &&
//         circle2.classList.contains('playerR') &&
//         circle3.classList.contains('playerR') &&
//         circle4.classList.contains('playerR')
//       )
//       {
//         result.innerHTML = 'Player One Wins!'
//       }
//       //check those squares to see if they all have the class of player-two
//       if (
//         circle1.classList.contains('playerY') &&
//         circle2.classList.contains('playerY') &&
//         circle3.classList.contains('playerY') &&
//         circle4.classList.contains('playerY')
//       )
//       {
//         result.innerHTML = 'Player Two Wins!'
//       }
//     }
//   }
// vertical
function checkBoard() {
    const col1row6red = document.getElementById('column1-row6').classList.contains('red')
    const col1row5red = document.getElementById('column1-row5').classList.contains('red') 
    const col1row4red =  document.getElementById('column1-row4').classList.contains('red')
    const col1row3red = document.getElementById('column1-row3').classList.contains('red')
   if (col1row6red && col1row5red && col1row4red && col1row3red) {
        alert('red wins');
    }
    const col2row6red = document.getElementById('column2-row6').classList.contains('red')
    const col2row5red = document.getElementById('column2-row5').classList.contains('red') 
    const col2row4red =  document.getElementById('column2-row4').classList.contains('red')
    const col2row3red = document.getElementById('column2-row3').classList.contains('red')
   if (col2row6red && col2row5red && col2row4red && col2row3red) {
        alert('red wins');
    }
    const col3row6red = document.getElementById('column3-row6').classList.contains('red')
    const col3row5red = document.getElementById('column3-row5').classList.contains('red') 
    const col3row4red =  document.getElementById('column3-row4').classList.contains('red')
    const col3row3red = document.getElementById('column3-row3').classList.contains('red')
   if (col3row6red && col3row5red && col3row4red && col3row3red) {
        alert('red wins');
    }
    const col4row6red = document.getElementById('column4-row6').classList.contains('red')
    const col4row5red = document.getElementById('column4-row5').classList.contains('red') 
    const col4row4red =  document.getElementById('column4-row4').classList.contains('red')
    const col4row3red = document.getElementById('column4-row3').classList.contains('red')
   if (col4row6red && col4row5red && col4row4red && col4row3red) {
        alert('red wins');
    }
    const col5row6red = document.getElementById('column5-row6').classList.contains('red')
    const col5row5red = document.getElementById('column5-row5').classList.contains('red') 
    const col5row4red =  document.getElementById('column5-row4').classList.contains('red')
    const col5row3red = document.getElementById('column5-row3').classList.contains('red')
   if (col5row6red && col5row5red && col5row4red && col5row3red) {
        alert('red wins');
    }
    const col6row6red = document.getElementById('column6-row6').classList.contains('red')
    const col6row5red = document.getElementById('column6-row5').classList.contains('red') 
    const col6row4red =  document.getElementById('column6-row4').classList.contains('red')
    const col6row3red = document.getElementById('column6-row3').classList.contains('red')
   if (col6row6red && col6row5red && col6row4red && col6row3red) {
        alert('red wins');
    }
    const col1row6yellow = document.getElementById('column1-row6').classList.contains('yellow')
    const col1row5yellow = document.getElementById('column1-row5').classList.contains('yellow') 
    const col1row4yellow =  document.getElementById('column1-row4').classList.contains('yellow')
    const col1row3yellow = document.getElementById('column1-row3').classList.contains('yellow')
    if (col1row6yellow && col1row5yellow && col1row4yellow && col1row3yellow) {
        alert('yellow wins');
    }
    const col2row6yellow = document.getElementById('column2-row6').classList.contains('yellow')
    const col2row5yellow = document.getElementById('column2-row5').classList.contains('yellow') 
    const col2row4yellow =  document.getElementById('column2-row4').classList.contains('yellow')
    const col2row3yellow = document.getElementById('column2-row3').classList.contains('yellow')
    if (col2row6yellow && col2row5yellow && col2row4yellow && col2row3yellow) {
        alert('yellow wins');
    }
}

// gravity = [6,6,6,6,6,6]
// onlclick for column 0
//     fill in index (0,row[0])
//     -1 from index 0
// onlclick for column 1
//     fill in index (1,row[1])
// -1 from index 

// render game
// store data in an array
// winconditon if player1 hits 4 solid colors in a row
// console log 'player 1 wins'
// lose condition if other player gets to 4 solid colors first
// console log 'player 2 wins'
// use the addEventListener('click') event to make sure all buttons are clickable
// make reset button refresh the page
