import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 font-bold">
        <div className="flex flex-wrap gap-3 justify-center bg-white px-6 py-3 rounded-full cursor-pointer">
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}>
            RED
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}>
            GREEN
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}>
            BLUE
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}>
            ORANGE
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}>
            VOILET
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-black outline-black "
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}>
            YELLOW
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-black outline-black "
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}>
            PINK
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}>
            RED
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}>
            GREEN
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}>
            BLUE
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}>
            ORANGE
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white outline-black "
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}>
            VOILET
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-black outline-black "
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}>
            YELLOW
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-black outline-black "
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}>
            PINK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
