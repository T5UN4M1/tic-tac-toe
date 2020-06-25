import * as React from "react";
import {Cell} from "./Cell";


export const Grid = ({grid,onClick}:any) => {
    return (
        <div className="grid">
            {
                grid.map((cell:any,id:number) => <Cell id={id} symbol={cell} onClick={() => onClick(id)}/>)
            }
        </div>
    );
};