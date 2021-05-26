import {CONSTRAINTS} from '../actions'
 export const addList=title=>{
 return {
        type:CONSTRAINTS.ADD_LIST,
        payload: title
 }
 }

 export const sort = (
     droppableIdStart,
     droppableIdEnd,
     droppableIndexStart,
     droppableIndexEnd,
     draggableId
 )=>{
    return{
        type: CONSTRAINTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
 }