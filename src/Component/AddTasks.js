import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtask } from "../Redux/Action"

const AddTasks=()=>{
    const dispatch =useDispatch()
    const [textP,settextP]=useState('')
    return(
        <div className="zz">
      <input className="jj" onChange={(e)=>settextP(e.target.value)}type="text"/>
      <button className="hh" onClick={()=>dispatch(addtask(textP))}>ADD</button>
        </div>
    )
}
export default AddTasks