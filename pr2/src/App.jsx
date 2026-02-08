import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from '../components/card1'
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black">TailWind test</h1>
       <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <Card1/>
    </div>
    </>
  );
}

export default App;