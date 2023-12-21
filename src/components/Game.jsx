import React, { useEffect, useState } from "react";
import Dice from "./Dice";
import Cells from "./Cells";

export default function Game({ visible }) {

    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(dice1 + dice2);

    const rollDices = () => {
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;

        setDice1(newDice1);
        setDice2(newDice2);
        setTotal(newDice1 + newDice2);
    }

    useEffect(() => {
        if(visible) alert("Gire los dados para comenzar!");
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="flex flex-col gap-2 items-center">
            <div>
                <Cells total={total} />
            </div>
            <div className="flex gap-2">
                <Dice number={dice1} />
                <Dice number={dice2} />
            </div>
            <button className="bg-slate-500 p-4"
                onClick={rollDices}>
                Girar los dados!
            </button>
        </div>
    )
}