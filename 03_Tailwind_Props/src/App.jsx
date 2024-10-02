import './App.css'
import Card from './Compoents/card.jsx'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Tester</h1>     
    <Card userName="ShreyasPangavhane" btntext="Click Me"/>
    <Card userName="ReactLearn" btntext=""/>
    </>
  )
}

export default App
