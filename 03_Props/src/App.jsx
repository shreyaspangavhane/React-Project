import { useState } from 'react'
import Objdata from "./ObjData"
import Array_Op from './Array_Op';
function App() {
  let obj=[{
    Id:1,
    Name:"Shreyas",
    Marks:90
  },{
  Id:2,
  Name:"Rutik",
  Marks:80
},{
  Id:3,
  Name:"Ram",
  Marks:88
}
]


let arr=[10,20,30];


  return (
    <>
    <Objdata objName={obj}/>  
    <Array_Op array={arr}/>
    </>
  )
}

export default App
