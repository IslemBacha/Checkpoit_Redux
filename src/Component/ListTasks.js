import {  useSelector } from "react-redux"
import CardTasks from "./CardTasks"
import { useState } from "react"

const ListTasks=()=>{
    const tasks = useSelector(state=>state.tasks)
    const [navtasks,setNavtasks]=useState("ALL")
    
    return(
       <div >
         <div className="ee">
         <button className="tt" onClick={()=>setNavtasks("ALL")}>ALL</button>
         <button className="pp" onClick={()=>setNavtasks("DONE")}>DONE</button>
         <button className="vv" onClick={()=>setNavtasks("NOTDONE")}>NOtDONE</button>
         </div>
         
          {
             navtasks =="ALL"?
             tasks.map(el=><CardTasks el={el}/>)
             :
            navtasks == "DONE"?
            tasks.filter(el=>el.done == true).map(el=><CardTasks el={el}/>)
            :
            tasks.filter(el=>el.done == false).map(el=><CardTasks el={el}/>)
          }
           
         
         
       </div>
    )
}
export default ListTasks