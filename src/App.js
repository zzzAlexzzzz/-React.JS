import { useState } from "react";
import Bla from "./Bla";


function App() {
  const [counter, setCounter] = useState(0);
  const hendleInc = () => {
    setCounter(counter + 1)
  }
  const hendleDec = () => {
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
    
  }
  const nuller = () => {
    setCounter(0)
  }



  return (
    <div className="App">
      <h1> {counter} </h1>
      <button onClick={hendleInc}>+</button>
      <button onClick={hendleDec}>-</button>
      <button onClick={nuller}>Сброс</button>
    </div>
  );
}

export default App;
