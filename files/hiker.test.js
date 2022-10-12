'use strict';

const reversi = require('./hiker');

describe('returns valid moves for reversi', () => {
  it('given a board with stone return a board with all valid moves', () => {
    let board=[]
    let expectedResultBoard=[]

    board[0]='........'
    board[1]='........'
    board[2]='........'
    board[3]='...BW...'
    board[4]='...WB...'
    board[5]='........'
    board[6]='........'
    board[7]='........'

    expectedResultBoard[0]='........'
    expectedResultBoard[1]='........'
    expectedResultBoard[2]='....0...'
    expectedResultBoard[3]='...BW0..'
    expectedResultBoard[4]='..0WB...'
    expectedResultBoard[5]='...0....'
    expectedResultBoard[6]='........'
    expectedResultBoard[7]='........'

    let a = reversi.nextMoves(board,'B')
    console.log(a)
    expect(a).toEqual(expectedResultBoard);
  });
});
