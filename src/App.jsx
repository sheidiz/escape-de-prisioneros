import { useState } from "react";
import "./App.css";
import InstructionsModal from "./components/Instructions";
import { information } from "./utils/data";
import Game from "./components/Game";
import { FaDice } from "react-icons/fa";

function App() {
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleOnClose = () => {
    setInstructionsOpen(false);
  }

  return (
    <main className="h-[94vh] mx-10 my-5 p-5 flex flex-col gap-5 items-center justify-center bg-slate-300">
      <div id="title" className="text-center">
        <h1 className="mb-2 text-5xl font-bold">{information.title}</h1>
        <h2 className="text-xl font-medium">{information.subtitle}</h2>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setInstructionsOpen(true)}
          className="px-3 py-2 bg-gray-800 text-white rounded hover:scale-95 transition text-md md:text-lg">
          Ver instrucciones
        </button>
        <InstructionsModal visible={instructionsOpen} onClose={handleOnClose} />
        <button onClick={() => setGameStarted(true)}
          className="px-3 py-2 bg-white text-black rounded hover:scale-95 transition text-md md:text-lg flex items-center gap-1">
          ¡Jugar! <FaDice />
        </button>
      </div>
      <div id="game" className="flex flex-col items-center gap-4">
        <div className="flex">
          <Game visible={gameStarted} />
        </div>
      </div>

      {/*sidebar*/}
    </main>
  )
}

export default App
