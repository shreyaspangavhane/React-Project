function ObjData({objName}){
    return(

        //display Object Data in Tabular Format
<>
        <table border="1">
            <tr>        
            {Object.keys(objName[0]).map((key) => <th>{key}</th>)}
            </tr>

            <tr>        
            {Object.values(objName[0]).map((val) => <th>{val}</th>)}
            </tr>

            <tr>        
            {Object.values(objName[1]).map((val) => <th>{val}</th>)}
            </tr>
            
            <tr>        
            {Object.values(objName[2]).map((val) => <th>{val}</th>)}
            </tr>
        </table>
    
    {/* display the array in dropdown list*/}
    
    
    </>
    )
  

}
export default ObjData