import { useState } from "react";
import { motion } from "framer-motion";
import { information } from "../utils/data";

export default function InstructionsModal({ visible, onClose }) {

    const handleOnClose = () => {
        onClose();
    }

    if (!visible) return null;

    return (
        <div className="fixed inset-0 text-slate-600 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-4/5 sm:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-y-scroll p-4 md:p-6 bg-white flex flex-col gap-2 rounded-md text-sm md:text-md">
                <div>
                    <p className="font-semibold underline">Objetivo</p>
                    <p>{information.goal}</p>
                </div>
                <div>
                    <p className="font-semibold underline">Reglas</p>
                    <ul className="list-disc ps-4">
                        {information.rules.map((rule, index) => {
                            return (<li key={index}>{rule}</li>)
                        })}
                    </ul>
                    <p className="text-gray-500"><span className="font-medium">Ejemplo:</span> {information.example}</p>
                </div>
                <div>
                    <p className="font-semibold underline">A tener en cuenta</p>
                    <ul className="list-disc ps-4">
                        {information.disclaimers.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })}
                    </ul>
                </div>
                <div>
                    <p className="font-semibold underline">Ganador</p>
                    {information.winner.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })}
                </div>
                <div className="self-end">
                    <button onClick={handleOnClose}
                        className="px-6 py-2 bg-gray-800 text-white rounded">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    )
}
