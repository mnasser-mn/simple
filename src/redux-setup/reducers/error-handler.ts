export const errorHandler = (state="",action:any)=>{
    if(action.type === "ERROR")
        return action.payload
    return ""
}