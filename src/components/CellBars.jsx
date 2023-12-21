import React from "react";

export default function CellBars() {
    return (
        <>
            <span className="absolute top-0 left-0 h-full w-[5px] bg-slate-950"></span>
            <span className="absolute top-0 left-5 h-full w-[5px] bg-slate-950"></span>
            <span className="absolute top-0 right-5 h-full w-[5px] bg-slate-950"></span>
            <span className="absolute top-0 right-0 h-full w-[5px] bg-slate-950"></span>
            <span className="absolute left-0 top-0 h-[5px] w-full bg-slate-950"></span>
            <span className="absolute left-0 top-5 h-[5px] w-full bg-slate-950"></span>
            <span className="absolute left-0 bottom-5 h-[5px] w-full bg-slate-950"></span>
            <span className="absolute left-0 bottom-0 h-[5px] w-full bg-slate-950"></span>
        </>
    )
}
