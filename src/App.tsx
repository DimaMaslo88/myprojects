import React, {useState} from 'react';

import './App.css';
import Counter from './Counter';
import Button from "./Button";


function App() {
    const startValue=0;
    const endValue=5
const[counter,setCounter]=useState<number>(startValue)

function counterInc(){
   if(counter<endValue){
      setCounter(counter+1)
   }
    }
function counterRes(){
        setCounter(startValue)
}

const disabledInc = counter===endValue
    const disabledRes=counter===startValue
  return (
      <div className="App">

    <div className="Counter">
         <Counter display={counter} />
        <div className="Buttons">
        <Button   title={"Inc"} onClick={counterInc}   disabled={disabledInc} />
        <Button title={"Reset"} onClick={counterRes} disabled={disabledRes}  />
        </div>
    </div>
      </div>
  );
}

export default App;
