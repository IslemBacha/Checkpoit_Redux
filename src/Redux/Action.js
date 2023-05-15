import { ADDTASK, HANDELDELETE, HANDELDONE, HANDLEEDIT } from "./ActionTypes"

export const addtask =(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}
export const handelDone=(payload)=>{
    return(
        {
            type :HANDELDONE,
            payload
        }
    )
}
export const handeldelete=(payload)=>{
    return(
        
        {
            type : HANDELDELETE,
            payload
        }
    )

}
export const handleEdit=(payload)=>{
    return(
        {
            type : HANDLEEDIT,
            payload
        }
    )
}