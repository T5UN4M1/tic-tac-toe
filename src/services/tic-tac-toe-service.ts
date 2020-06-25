import {Symbols} from "../model/symbols";

const winningPositions = [
    // horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagonal
    [0,4,8],
    [2,4,6]
];



class TicTacToeService  {
    getEmptyGrid = ():Symbols[] => Array(9).fill(Symbols.e);
    getMovesLeft = (grid: Symbols[]) => grid.filter((cell: Symbols) => cell === Symbols.e).length;
    getNextSymbol = (grid: Symbols[]) => this.getMovesLeft(grid) % 2 === 0 ? Symbols.x : Symbols.o;

    // returns null if there is no winner
    determineWinner = (grid: Symbols[]) => {
        let winner = null;
        winningPositions.some(wp => {
            const symbol = grid[wp[0]];
            if(symbol !== Symbols.e && wp.every(pos => symbol === grid[pos])){
                winner = symbol;
                return true;
            }
        });
        return winner;
    }
}

const ticTacToeService = new TicTacToeService();

export {ticTacToeService};