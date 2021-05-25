import {CONSTRAINTS} from '../actions'
 export const addList=title=>{
 return {
        type:CONSTRAINTS.ADD_LIST,
        payload: title
 }
 }