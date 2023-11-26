import { ADD_ALLEVENT_SUCCESS, ADD_EVENT_SUCCESS, GET_ALLEVENT_SUCCESS } from "../const/ConstEvent"


const initialstate={
    products:[],
    oneproduct:{},
   error:{}
 
 }
 
 
 
 export const   productReducer =(state=initialstate,action)=>{
    switch(action.type){
     case GET_ALLEVENT_SUCCESS :
        return {...state,products:action.payload}
    case ADD_EVENT_SUCCESS :
    return {...state}
            
        default:
            return state
        }}