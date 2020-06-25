import React, {useState} from 'react';

import {Grid} from "./components/Grid";
import {Symbols} from "./model/symbols";

import './App.css';

function App() {
    const initialGrid = Array(9).fill(Symbols.e);
    const [grid, setGrid] = useState(initialGrid);

    const getMovesLeft = (grid: Symbols[]) => grid.filter((cell: Symbols) => cell === Symbols.e).length;
    const getNextSymbol = (grid: Symbols[]) => getMovesLeft(grid) % 2 === 0 ? Symbols.x : Symbols.o;

    const handleClick = (id: number) =>
        setGrid(grid.map((cell, i) => (i !== id || cell !== Symbols.e) ? cell : getNextSymbol(grid)));

    return (
        <div className="App">
            <Grid grid={grid} onClick={handleClick}/>
        </div>
    );
}

export default App;
