import {CONSTRAINTS} from '../actions'
 export const addCard= (listID,description) =>{
 return {
        type:CONSTRAINTS.ADD_LIST,
        payload: {description,listID}
 }
 }