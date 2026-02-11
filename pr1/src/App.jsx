import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //this is hook concept where the varibale

  const addvalue = () => {
    if (counter == 20) {
      setCounter(counter);
      return;
    }
    setCounter(counter + 1);

    // setCounter((precounter) => precounter + 1); here you can acces the previous value of the counter and update it , usefull to ignore the batch behaviour at the time of the final execution.
  };

  const substract = () => {
    if (counter == 0) {
      setCounter(counter);
      return;
    }
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>hello pr1</h1>
      <h2>conuter value : {counter}</h2>

      <button onClick={addvalue}>ADD VALUE</button>
      <br />
      <button onClick={substract}>SUBTRACT VALUE</button>
    
    </>
  );
}

export default App;
