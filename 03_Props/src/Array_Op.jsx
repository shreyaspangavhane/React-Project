function Array_Op({array}) {
    return(
        <select >
            {/* Cobvert the array in Dropdown list */}
            {array.map((e)=><option>{e}</option>)}
        </select>

    )

}
export default Array_Op