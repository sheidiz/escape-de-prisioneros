import React, { useState } from "react";
import CellBars from "./CellBars";

export default function Cells({ total }) {

    const [selectedCell1, setSelectedCell1] = useState(0);
    const [selectedCell2, setSelectedCell2] = useState(0);
    const [unselectedCells, setUnselectedCells] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);

    const handleSelection = (item) => {
        if (item != selectedCell2 && selectedCell1 == 0) {
            setSelectedCell1(item);
            return;
        }
        if (item != selectedCell1 && selectedCell2 == 0) {
            setSelectedCell2(item);
            return;
        }
        if (selectedCell1 == item) setSelectedCell1(0);
        if (selectedCell2 == item) setSelectedCell2(0);
    }
    const cellNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const checkSelection = (item) =>{
        return selectedCell1 == item || selectedCell2 == item || selectedCells.includes(item);
    }
    const verifySelection = () => {
        if (selectedCell1 + selectedCell2 == total) {
            alert("Continua la partida, tire denuevo los dados!");
            setSelectedCells(selectedCells.concat(selectedCell1, selectedCell2));
            setSelectedCell1(0);
            setSelectedCell2(0);
        } else {
            alert("La suma de las celdas escogidas deben equivaler a " + total + ". Intentelo denuevo.")
        }
        //setUnselectedCells(cellNumbers.filter(item=> !selectedCells.includes(item)));
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <ul className="border bg-slate-900 flex gap-2">
                {cellNumbers.map((item, index) => {
                    return (
                        <li key={index} className="relative z-10 px-4 py-3 bg-slate-800 text-white text-6xl font-bold select-none">
                            <button onClick={() => handleSelection(item)}
                                className={`${ () => checkSelection(item) ? 'opacity-50' : 'opacity-100'}`}>
                                {item}
                            </button>
                            {(checkSelection(item)) && <CellBars />}
                        </li>
                    )
                })}
            </ul>
            <button className="px-3 py-2 bg-white text-black rounded"
                onClick={verifySelection}>Revisar puntaje</button>
        </div>
    )
}
