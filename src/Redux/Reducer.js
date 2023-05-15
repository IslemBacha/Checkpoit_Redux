
import { ADDTASK, HANDELDELETE, HANDELDONE , HANDLEEDIT  } from "./ActionTypes"


const initialState ={
    
    
    tasks:[
        {text:"Marche" , id:Math.random(),done:false},
        {text:"Lires" , id:Math.random(),done:false},
        {text:"Boire" , id:Math.random(),done:false}
    ]
    
}
const Reducer=(state=initialState,action)=>{
    
       switch (action.type) {
          case ADDTASK : return {...state,tasks:[...state.tasks,{text:action.payload,id:Math.random,done:false}]}
          case HANDELDONE :return {...state,tasks:state.tasks.map(el=>el.id === action.payload  ?{... el,done:!el.done}:el)}
          case HANDELDELETE: return{...state,tasks:state.tasks.filter(el=>el.id!= action.payload)}
          case HANDLEEDIT : return {...state,tasks : state.tasks.map(el=> el.id == action.payload.id ? {...el,text : action.payload.text} : el)}
      default: return state
            
       }
    
}
export default Reducer