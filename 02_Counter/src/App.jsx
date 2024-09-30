import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);      //here counter is the any variable name and setCounter(it is the function) control that counter var

  // use state is used for the hooks

  // let counter=5;
  
  const addValue=()=>{
    // console.log("Clicked",counter);         //but here the value of counter is not get updated for that we have to use Hooks
    // counter=counter+1;
    if(counter<22){         //if the value is less than 22 then only it get add 
      setCounter(counter+1)           // here we use the hooks method 
      
    }
    
  }

  const removeValue=()=>{
    // console.log("Clicked",counter); 
    if(counter>0){           //if the value is grater than 0 then only it get remove

      setCounter(counter-1)
    }
  }

  return (
    <>  
     <h1>Counter Project</h1>
     <h2>Counter Value: {counter} </h2>     
     <button onClick={addValue}>Add Value</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <button onClick={removeValue}>Remove Value</button>
     
    </>
  )
}

export default App
