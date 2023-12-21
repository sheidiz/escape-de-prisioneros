import React from "react";

export default function Dice({ number }) {
    return (
        <span className="bg-white px-6 py-4 text-5xl border border-slate-700 rounded-lg">
            {number}
        </span>
    )
}
