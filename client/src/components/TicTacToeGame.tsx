import {Symbols} from "../model/symbols";
import React, {useState} from "react";
import {Grid} from "./Grid";
import {ticTacToeService} from "../services/tic-tac-toe-service";

export const TicTacToeGame = () => {
    const [grid, setGrid] = useState(ticTacToeService.getEmptyGrid);

    const handleClick = (id: number) => setGrid(grid.map((cell, i) =>
        (i !== id || cell !== Symbols.e || winner !== null) ? cell : ticTacToeService.getNextSymbol(grid)));

    const winner = ticTacToeService.determineWinner(grid);


    const WinnerAnnounce = () => (winner !== null) ? <p>{winner} has won the game</p>:null;
    
    return (
        <div className="App">
            <Grid grid={grid} onClick={handleClick}/>
            <WinnerAnnounce/>
        </div>
    );
};