import Myname from "./name"
import Footer from "./Footer"
 
function App() {
  const file_name="React_File"     //use the variable in jsx using { var name }   =>> this is called evoluted expression 
  return (
    <>
    <Myname></Myname>
    <h3>New File data i.e Name file is displayed having name {file_name}.</h3>
    <p>End..</p>
    <Footer></Footer>
    </>
  )
}

export default App
