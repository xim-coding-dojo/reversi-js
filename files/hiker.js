'use strict';

const board = {
  rows: 8,
  columns: 8,
  player1: 'B',
  player2: 'W',
  empty: '.',
  move: '0'
}

const directions = {
  upLeft: 'upLeft',
  upMiddle: 'upMiddle',
  upRight: 'upRight',
  centerLeft: 'centerLeft',
  centerRight: 'centerRight',
  bottomLeft: 'bottomLeft',
  bottomMiddle: 'bottomMiddle',
  bottomRight: 'bottomRight'
};

String.prototype.replaceAt = function (index, char) { return this.substr(0, index) + char + this.substr(index + char.length); }

const reversi = {

  checkMoveByOffset: (currentBoard, direction, rowIndex, columnIndex, otherPlayer) => {

    //const columnOffsetWithOtherPlayer = (direction===)
    //console.log("directions.upLeft "+directions.upLeft)
    switch (direction) {
      case directions.upLeft:
        if ((rowIndex > 1 && columnIndex > 1) && currentBoard[rowIndex - 1][columnIndex - 1] === otherPlayer) {
          if (currentBoard[rowIndex - 2][columnIndex - 2] === board.empty) {
            return true
          }
        }
        break
      case directions.upMiddle:
        if ((rowIndex > 1) && currentBoard[rowIndex - 1][columnIndex] === otherPlayer) {
          if (currentBoard[rowIndex - 2][columnIndex] === board.empty) {
            return true
          }
        }
        break
      case directions.upRight:
        if ((rowIndex > 1 && columnIndex < board.columns - 2) && currentBoard[rowIndex - 1][columnIndex + 1] === otherPlayer) {
          if (currentBoard[rowIndex - 2][columnIndex + 2] === board.empty) {
            return true
          }
        }
        break
      case directions.centerLeft:
        if ((columnIndex > 1) && currentBoard[rowIndex][columnIndex - 1] === otherPlayer) {
          if (currentBoard[rowIndex][columnIndex - 2] === board.empty) {
            return true
          }
        }
        break
      case directions.centerRight:
        if ((columnIndex < board.columns - 2) && currentBoard[rowIndex][columnIndex + 1] === otherPlayer) {
          if (currentBoard[rowIndex][columnIndex + 2] === board.empty) {
            return true
          }
        }
        break
      case directions.bottomLeft:
        if ((rowIndex > 1 && columnIndex < board.columns - 2) && currentBoard[rowIndex + 1][columnIndex + 1] === otherPlayer) {
          if (currentBoard[rowIndex + 2][columnIndex - 2] === board.empty) {
            return true
          }
        }
        break
      case directions.bottomMiddle:
        if ((rowIndex < board.rows - 2) && currentBoard[rowIndex + 1][columnIndex] === otherPlayer) {
          if (currentBoard[rowIndex + 2][columnIndex] === board.empty) {
            return true
          }
        }
        break
      case directions.bottomRight:
        if ((rowIndex < board.rows -2 && columnIndex < board.columns - 2) && currentBoard[rowIndex + 1][columnIndex + 1] === otherPlayer) {
          if (currentBoard[rowIndex + 2][columnIndex + 2] === board.empty) {
            return true
          }
        }
        break

    }
    // if (direction===directions.upLeft){
    //   if((rowIndex>1 && columnIndex>1) && currentBoard[rowIndex-1][columnIndex-1]===otherPlayer){
    //     if(currentBoard[rowIndex-2][columnIndex-2]===board.empty){
    //       return true
    //     }
    //   }  
    // }
    return false
  },

  nextMoves: (playerBoard, nextPlayer) => {
    if (!(playerBoard.length === board.rows &&
      playerBoard[0].length === board.columns))
      return new Error('invalid board')

    let newPlayerBoard = [...playerBoard]

    let otherPlayer = board.player1
    if (nextPlayer === board.player1) {
      otherPlayer = board.player2
    }

    playerBoard.forEach((row, rowIndex) => {
      [...row].forEach((column, columnIndex) => {

        if (playerBoard[rowIndex][columnIndex] === nextPlayer) {
          console.log(`${rowIndex} ${columnIndex} B`)
          //up left
          if (reversi.checkMoveByOffset(playerBoard, directions.upLeft, rowIndex, columnIndex, otherPlayer)) {
            console.log("1 xxxx");
            newPlayerBoard[rowIndex - 2] = newPlayerBoard[rowIndex - 2].replaceAt(columnIndex - 2, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.upMiddle, rowIndex, columnIndex, otherPlayer)) {
            console.log("2 xxxx");
            newPlayerBoard[rowIndex - 2] = newPlayerBoard[rowIndex - 2].replaceAt(columnIndex, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.upRight, rowIndex, columnIndex, otherPlayer)) {
            console.log("3 xxxx");
            newPlayerBoard[rowIndex - 2] = newPlayerBoard[rowIndex - 2].replaceAt(columnIndex + 2, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.centerLeft, rowIndex, columnIndex, otherPlayer)) {
            console.log("4 xxxx");
            newPlayerBoard[rowIndex] = newPlayerBoard[rowIndex].replaceAt(columnIndex - 2, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.centerRight, rowIndex, columnIndex, otherPlayer)) {
            console.log("5 xxxx");
            newPlayerBoard[rowIndex] = newPlayerBoard[rowIndex].replaceAt(columnIndex +2, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.bottomLeft, rowIndex, columnIndex, otherPlayer)) {
            console.log("6 xxxx");
            newPlayerBoard[rowIndex + 2] = newPlayerBoard[rowIndex + 2].replaceAt(columnIndex - 2, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.bottomMiddle, rowIndex, columnIndex, otherPlayer)) {
            console.log("7 xxxx");
            newPlayerBoard[rowIndex + 2] = newPlayerBoard[rowIndex + 2].replaceAt(columnIndex, board.move)
          }

          if (reversi.checkMoveByOffset(playerBoard, directions.bottomRight, rowIndex, columnIndex, otherPlayer)) {
            console.log("8 xxxx");
            newPlayerBoard[rowIndex + 2] = newPlayerBoard[rowIndex + 2].replaceAt(columnIndex + 2, board.move)
          }


        }

        // console.log(`${rowIndex} ${columnIndex}`)
      })
    });

    return newPlayerBoard
  }
}


module.exports = reversi
