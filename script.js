let playerR = "red";
let playerY = "yellow";
let gameOver
let firstPlayer = playerR
let countClicks = 0
let myArray = [6, 6, 6, 6, 6, 6]
const currentPlayer = document.querySelector('.playerTurn')
let circleButtons = document.querySelectorAll("a");
winMessageDiv = document.querySelector("#message");
let getCircles = document.querySelectorAll('.circle')
getCircles.forEach(function(element) {
  let fillCircle = element.style;
  element.addEventListener('click', function() {
    let idSplit = this.id.split('-')
    let column = idSplit[0]
    let row = idSplit[1]
    if (firstPlayer === playerR) {
      if (document.getElementById(column + '-row2').classList.contains('taken')) {
        document.getElementById(column + '-row1').classList.add('taken', 'red')
        console.log('not taken')
        firstPlayer = playerY
      } else if (document.getElementById(column + '-row3').classList.contains('taken')) {
        document.getElementById(column + '-row2').classList.add('taken', 'red')
        firstPlayer = playerY
      } else if (document.getElementById(column + '-row4').classList.contains('taken')) {
        document.getElementById(column + '-row3').classList.add('taken', 'red')
        firstPlayer = playerY
      } else if (document.getElementById(column + '-row5').classList.contains('taken')) {
        document.getElementById(column + '-row4').classList.add('taken', 'red')
        firstPlayer = playerY
      } else if (document.getElementById(column + '-row6').classList.contains('taken')) {
        document.getElementById(column + '-row5').classList.add('taken', 'red')
        firstPlayer = playerY
      } else {
        document.getElementById(column + '-row6').classList.add('taken', 'red')
        firstPlayer = playerY
      }
    } else {
      if (document.getElementById(column + '-row2').classList.contains('taken')) {
        document.getElementById(column + '-row1').classList.add('taken', 'yellow')
        console.log('not taken')
        firstPlayer = playerR
      } else if (document.getElementById(column + '-row3').classList.contains('taken')) {
        document.getElementById(column + '-row2').classList.add('taken', 'yellow')
        firstPlayer = playerR
      } else if (document.getElementById(column + '-row4').classList.contains('taken')) {
        document.getElementById(column + '-row3').classList.add('taken', 'yellow')
        firstPlayer = playerR
      } else if (document.getElementById(column + '-row5').classList.contains('taken')) {
        document.getElementById(column + '-row4').classList.add('taken', 'yellow')
        firstPlayer = playerR
      } else if (document.getElementById(column + '-row6').classList.contains('taken')) {
        document.getElementById(column + '-row5').classList.add('taken', 'yellow')
        firstPlayer = playerR
      } else {
        document.getElementById(column + '-row6').classList.add('taken', 'yellow')
        firstPlayer = playerR
      }
    }
    checkBoard()
  })
}
);
function checkBoard() {
  const col1row6red = document.getElementById('column1-row6').classList.contains('red')
  const col1row5red = document.getElementById('column1-row5').classList.contains('red')
  const col1row4red = document.getElementById('column1-row4').classList.contains('red')
  const col1row3red = document.getElementById('column1-row3').classList.contains('red')
  const col1row2red = document.getElementById('column1-row2').classList.contains('red')
  const col1row1red = document.getElementById('column1-row1').classList.contains('red')
  if (col1row6red && col1row5red && col1row4red && col1row3red) {
    alert('red wins');
  }
  if (col1row1red && col1row2red && col1row3red && col1row4red) {
    alert('red wins');
  }
  if (col1row5red && col1row4red && col1row3red && col1row2red) {
    alert('red wins');
  }
  const col2row6red = document.getElementById('column2-row6').classList.contains('red')
  const col2row5red = document.getElementById('column2-row5').classList.contains('red')
  const col2row4red = document.getElementById('column2-row4').classList.contains('red')
  const col2row3red = document.getElementById('column2-row3').classList.contains('red')
  const col2row2red = document.getElementById('column2-row2').classList.contains('red')
  const col2row1red = document.getElementById('column2-row1').classList.contains('red')
  if (col2row6red && col2row5red && col2row4red && col2row3red) {
    alert('red wins');
  }
  if (col2row1red && col2row2red && col2row3red && col2row4red) {
    alert('red wins');
  }
  if (col2row5red && col2row4red && col2row3red && col2row2red) {
    alert('red wins');
  }
  const col3row6red = document.getElementById('column3-row6').classList.contains('red')
  const col3row5red = document.getElementById('column3-row5').classList.contains('red')
  const col3row4red = document.getElementById('column3-row4').classList.contains('red')
  const col3row3red = document.getElementById('column3-row3').classList.contains('red')
  const col3row2red = document.getElementById('column3-row2').classList.contains('red')
  const col3row1red = document.getElementById('column3-row1').classList.contains('red')
  if (col3row6red && col3row5red && col3row4red && col3row3red) {
    alert('red wins');
  }
  if (col3row1red && col3row2red && col3row3red && col3row4red) {
    alert('red wins');
  }
  if (col3row5red && col3row4red && col3row3red && col3row2red) {
    alert('red wins');
  }
  const col4row6red = document.getElementById('column4-row6').classList.contains('red')
  const col4row5red = document.getElementById('column4-row5').classList.contains('red')
  const col4row4red = document.getElementById('column4-row4').classList.contains('red')
  const col4row3red = document.getElementById('column4-row3').classList.contains('red')
  const col4row2red = document.getElementById('column4-row2').classList.contains('red')
  const col4row1red = document.getElementById('column4-row1').classList.contains('red')
  if (col4row6red && col4row5red && col4row4red && col4row3red) {
    alert('red wins');
  }
  if (col4row1red && col4row2red && col4row3red && col4row4red) {
    alert('red wins');
  }
  if (col4row5red && col4row4red && col4row3red && col4row2red) {
    alert('red wins');
  }

  const col5row6red = document.getElementById('column5-row6').classList.contains('red')
  const col5row5red = document.getElementById('column5-row5').classList.contains('red')
  const col5row4red = document.getElementById('column5-row4').classList.contains('red')
  const col5row3red = document.getElementById('column5-row3').classList.contains('red')
  const col5row2red = document.getElementById('column5-row2').classList.contains('red')
  const col5row1red = document.getElementById('column5-row1').classList.contains('red')
  if (col5row6red && col5row5red && col5row4red && col5row3red) {
    alert('red wins');
  }
  if (col5row1red && col5row2red && col5row3red && col5row4red) {
    alert('red wins');
  }
  if (col5row5red && col5row4red && col5row3red && col5row2red) {
    alert('red wins');
  }

  const col6row6red = document.getElementById('column6-row6').classList.contains('red')
  const col6row5red = document.getElementById('column6-row5').classList.contains('red')
  const col6row4red = document.getElementById('column6-row4').classList.contains('red')
  const col6row3red = document.getElementById('column6-row3').classList.contains('red')
  const col6row2red = document.getElementById('column6-row2').classList.contains('red')
  const col6row1red = document.getElementById('column6-row1').classList.contains('red')
  if (col6row6red && col6row5red && col6row4red && col6row3red) {
    alert('red wins');
  }
  if (col6row1red && col6row2red && col6row3red && col6row4red) {
    alert('red wins');
  }
  if (col6row5red && col6row4red && col6row3red && col6row2red) {
    alert('red wins');
  }
 
  const col1row6yellow = document.getElementById('column1-row6').classList.contains('yellow')
  const col1row5yellow = document.getElementById('column1-row5').classList.contains('yellow')
  const col1row4yellow = document.getElementById('column1-row4').classList.contains('yellow')
  const col1row3yellow = document.getElementById('column1-row3').classList.contains('yellow')
  const col1row2yellow = document.getElementById('column1-row2').classList.contains('yellow')
  const col1row1yellow = document.getElementById('column1-row1').classList.contains('yellow')
  if (col1row6yellow && col1row5yellow && col1row4yellow && col1row3yellow) {
    alert('yellow wins');
  }
  if (col1row1yellow && col1row2yellow && col1row3yellow && col1row4yellow) {
    alert('yellow wins');
  }
  if (col1row5yellow && col1row4yellow && col1row3yellow && col1row2yellow) {
    alert('yellow wins');
  }
  const col2row6yellow = document.getElementById('column2-row6').classList.contains('yellow')
  const col2row5yellow = document.getElementById('column2-row5').classList.contains('yellow')
  const col2row4yellow = document.getElementById('column2-row4').classList.contains('yellow')
  const col2row3yellow = document.getElementById('column2-row3').classList.contains('yellow')
  const col2row2yellow = document.getElementById('column2-row2').classList.contains('yellow')
  const col2row1yellow = document.getElementById('column2-row1').classList.contains('yellow')
  if (col2row6yellow && col2row5yellow && col2row4yellow && col2row3yellow) {
    alert('yellow wins');
  }
  if (col2row1yellow && col2row2yellow && col2row3yellow && col2row4yellow) {
    alert('yellow wins');
  }
  if (col2row5yellow && col2row4yellow && col2row3yellow && col2row2yellow) {
    alert('yellow wins');
  }
  const col3row6yellow = document.getElementById('column3-row6').classList.contains('yellow')
  const col3row5yellow = document.getElementById('column3-row5').classList.contains('yellow')
  const col3row4yellow = document.getElementById('column3-row4').classList.contains('yellow')
  const col3row3yellow = document.getElementById('column3-row3').classList.contains('yellow')
  const col3row2yellow = document.getElementById('column3-row2').classList.contains('yellow')
  const col3row1yellow = document.getElementById('column3-row1').classList.contains('yellow')
  if (col3row6yellow && col3row5yellow && col3row4yellow && col3row3yellow) {
    alert('yellow wins');
  }
  if (col3row1yellow && col3row2yellow && col3row3yellow && col3row4yellow) {
    alert('yellow wins');
  }
  if (col3row5yellow && col3row4yellow && col3row3yellow && col3row2yellow) {
    alert('yellow wins');
  }
  const col4row6yellow = document.getElementById('column4-row6').classList.contains('yellow')
  const col4row5yellow = document.getElementById('column4-row5').classList.contains('yellow')
  const col4row4yellow = document.getElementById('column4-row4').classList.contains('yellow')
  const col4row3yellow = document.getElementById('column4-row3').classList.contains('yellow')
  const col4row2yellow = document.getElementById('column4-row2').classList.contains('yellow')
  const col4row1yellow = document.getElementById('column4-row1').classList.contains('yellow')
  if (col4row6yellow && col4row5yellow && col4row4yellow && col4row3yellow) {
    alert('yellow wins');
  }
  if (col4row1yellow && col4row2yellow && col4row3yellow && col4row4yellow) {
    alert('yellow wins');
  }
  if (col4row5yellow && col4row4yellow && col4row3yellow && col4row2yellow) {
    alert('yellow wins');
  }
  const col5row6yellow = document.getElementById('column5-row6').classList.contains('yellow')
  const col5row5yellow = document.getElementById('column5-row5').classList.contains('yellow')
  const col5row4yellow = document.getElementById('column5-row4').classList.contains('yellow')
  const col5row3yellow = document.getElementById('column5-row3').classList.contains('yellow')
  const col5row2yellow = document.getElementById('column5-row2').classList.contains('yellow')
  const col5row1yellow = document.getElementById('column5-row1').classList.contains('yellow')
  if (col5row6yellow && col5row5yellow && col5row4yellow && col5row3yellow) {
    alert('yellow wins');
  }
  if (col5row1yellow && col5row2yellow && col5row3yellow && col5row4yellow) {
    alert('yellow wins');
  }
  if (col5row5yellow && col5row4yellow && col5row3yellow && col5row2yellow) {
    alert('yellow wins');
  }
  const col6row6yellow = document.getElementById('column6-row6').classList.contains('yellow')
  const col6row5yellow = document.getElementById('column6-row5').classList.contains('yellow')
  const col6row4yellow = document.getElementById('column6-row4').classList.contains('yellow')
  const col6row3yellow = document.getElementById('column6-row3').classList.contains('yellow')
  const col6row2yellow = document.getElementById('column6-row2').classList.contains('yellow')
  const col6row1yellow = document.getElementById('column6-row1').classList.contains('yellow')
  if (col6row6yellow && col6row5yellow && col6row4yellow && col6row3yellow) {
    alert('yellow wins');
  }
  if (col6row1yellow && col6row2yellow && col6row3yellow && col6row4yellow) {
    alert('yellow wins');
  }
  if (col6row5yellow && col6row4yellow && col6row3yellow && col6row2yellow) {
    alert('yellow wins');
  }
  if (col1row6red && col2row6red && col3row6red && col4row6red) {
    alert('red wins');
  }
  if (col2row6red && col3row6red && col4row6red && col5row6red) {
    alert('red wins');
  }
  if (col3row6red && col4row6red && col5row6red && col6row6red) {
    alert('red wins');
  }
  if (col1row5red && col2row5red && col3row5red && col4row5red) {
    alert('red wins');
  }
  if (col2row5red && col3row5red && col4row5red && col5row5red) {
    alert('red wins');
  }
  if (col3row5red && col4row5red && col5row5red && col6row5red) {
    alert('red wins');
  }
  if (col1row4red && col2row4red && col3row4red && col4row4red) {
    alert('red wins');
  }
  if (col2row4red && col3row4red && col4row4red && col5row4red) {
    alert('red wins');
  }
  if (col3row4red && col4row4red && col5row4red && col6row4red) {
    alert('red wins');
  }
  if (col1row3red && col2row3red && col3row3red && col4row3red) {
    alert('red wins');
  }
  if (col2row3red && col3row3red && col4row3red && col5row3red) {
    alert('red wins');
  }
  if (col3row3red && col4row3red && col5row3red && col6row3red) {
    alert('red wins');
  }
  if (col1row2red && col2row2red && col3row2red && col4row2red) {
    alert('red wins');
  }
  if (col2row2red && col3row2red && col4row2red && col5row2red) {
    alert('red wins');
  }
  if (col3row2red && col4row2red && col5row2red && col6row2red) {
    alert('red wins');
  }
  if (col1row1red && col2row1red && col3row1red && col4row1red) {
    alert('red wins');
  }
  if (col2row1red && col3row1red && col4row1red && col5row1red) {
    alert('red wins');
  }
  if (col3row1red && col4row1red && col5row1red && col6row1red) {
    alert('red wins');
  }
}


