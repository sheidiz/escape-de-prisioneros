import { useState } from "react";
import "./App.css";
import InstructionsModal from "./components/Instructions";
import { information } from "./utils/data";

function App() {
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  const handleOnClose = () => {
    setInstructionsOpen(false);
  }

  return (
    <main className="mx-10 my-5 p-5 flex flex-col gap-5 items-center bg-slate-300">
      <div className="text-center">
        <h1 className="mb-2 text-5xl font-bold">{information.title}</h1>
        <h2 className="text-lg font-medium">{information.subtitle}</h2>
      </div>
      {/*instructions*/}
      <button onClick={() => setInstructionsOpen(true)}
        className="px-3 py-2 bg-gray-800 text-white rounded hover:scale-95 transition text-xl">
        Ver instrucciones
      </button>
      <InstructionsModal visible={instructionsOpen} onClose={handleOnClose} />
      {/*game*/}
      {/*sidebar*/}
    </main>
  )
}

export default App
