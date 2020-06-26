import * as React from "react";


export const Cell = ({symbol,onClick}:any) =>(<div className="cell" onClick={onClick}>{symbol}</div>);