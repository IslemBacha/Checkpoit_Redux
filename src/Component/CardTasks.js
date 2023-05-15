import { useDispatch } from "react-redux"
import { handelDone, handeldelete  , handleEdit} from "../Redux/Action"
import { useState } from "react"

const CardTasks=({el})=>{
    const dispatch= useDispatch()
    const [edit,setEdit] = useState(false)
    const [text,setText] = useState(el.text)

    const hEdit=()=>{
        dispatch(handleEdit({id : el.id,text}))
        setEdit(!edit)
    }
    return(
        <div className="nn">

           {
            edit ? <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/> : <h2 style={{width : "10%"}} className={el.done && "islem"}>{el.text}</h2>
           } 
            
       
       <>
       <button className="aa" onClick={()=>dispatch(handelDone(el.id))}>Done</button>
       <button className="bb"  onClick={()=>dispatch(handeldelete(el.id))}>Delete</button>
       <button className="ss" onClick={()=> edit ? hEdit() : setEdit(!edit)}>{edit ? "Valider" : "Edit"}</button> 
       </>
       
        </div>
    )
}
export default CardTasks