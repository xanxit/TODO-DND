import {CONSTRAINTS} from '../actions'
 export const addList=title=>async(dispatch) =>{
    dispatch ({
        type:CONSTRAINTS.ADD_LIST,
        payload:title
    }) ;
}