import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  //useState
  const [length,setLength] = useState(8);            //this for set default length of pass length 
  const [numberAllow,setNumberAllow]=useState(false);   //this is for is number allowed or not 
  const [charAllow,setCharAllow]=useState(false);       //this is for is char allowed or not
  const [password,setPassword]=useState("")             //this is for password text

  //useRef hook
  const passwordRef=useRef(null)       //it tells users about effect of any property 


  //useCallBack contain 2 parameter=> function,dependencies 
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow){
      str+="01234556789"                // added number to pass
    }

    if(charAllow){
      str+="`~!@#$%^&*()-_=+[]{}|;:,.<>?/"         // added special char to string/password
    }

      // for generate the password
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length)      // generate the random char/number 
                                                          //but here it only carry index we have to capture that char at that idx
      pass+=str.charAt(char)      // concat the string
    }

    setPassword(pass)

  },[length,numberAllow,charAllow,setPassword])

    


  //copy to clipboard method
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)     // it select the that range only and copy
    window.navigator.clipboard.writeText(password)},[password])

  //here the window.navigator.clipboard.writeText(var) method is used to copy to clipboard ==>   To copy the generated password to the clipboard using the 



  // form here our program is run (i.e calling/ callback)
  useEffect(()=>{                         // used for the callback
    passwordGenerator()               // call pass gen method
  },[length,numberAllow,charAllow,passwordGenerator])     //it contain 2 parameter => function and dependencies 



  return (
    <>
    
    <div className=' w-full max-w-full mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-3 pl-28 pr-28 ml-72'  >
        <h1 className=' text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Generated Password'
            readOnly
            // copy to clipboard ref to copy
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0'>Copy</button>
 
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='curser-pointer'
              onChange={(e)=>setLength(e.target.value)}
               />
               <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput" 
              onChange={()=>setNumberAllow((prev)=>!prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput" 
              onChange={()=>{setCharAllow((prev)=>!prev);
              }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
            
          </div>

      </div>

    </>
  )
}

export default App
