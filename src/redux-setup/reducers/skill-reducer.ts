import { AnyAction, Reducer } from "redux";

export const skillReducer:Reducer<{ entity: { byId: any; allIds: any; }; }, AnyAction> = (state = {entity:{byId:{},allIds:[]}},action:any)=>{

    switch (action.type){
        case 'SKILL_LIST':{
            const set = new Set([...state?.entity?.allIds,...action.payload.entity.allIds])
            return {...state,entity:{
                byId:{...state?.entity?.byId,...action.payload.entity.byId},
                allIds:Array.from(set),
            }}
        }
    }

    return state;
}