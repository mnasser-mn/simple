
export const jobReducer = (state = {},action:any)=>{
    switch (action.type){
        case 'JOB_LIST':{
            return {
                ...state,...action.payload
            }
        }
        case 'ERROR':{
            return {}
        }
    }
    return state
}