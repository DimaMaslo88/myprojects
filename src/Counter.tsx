import React from 'react';

import './App.css';

export type CounterType={
  display:number
}
function Counter(props:CounterType) {
  return (
    <div className={props.display===5?'NumberError':"Number1"} >
      {props.display}
    </div>
  );
}

export default Counter;
