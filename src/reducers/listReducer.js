import {CONSTRAINTS} from '../actions'
let listID=4;
let cardID=6;
const initialState=[
]

const listReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case CONSTRAINTS.ADD_LIST:
            const newList ={
                title:action.payload,
                cards:[],
                id:listID   
            }
            listID=listID+1;
            return [...state,newList];

            
        case CONSTRAINTS.ADD_CARD:
            const newCard={
                description:action.payload.description,
                id:cardID,
            }
            cardID=cardID+1;
            const newState=state.map(list=>{
                if(list.id === action.payload.listID)
                {
                    return {
                        ...list,
                        cards: [...list.cards,newCard]
                    }
                }
                else{
                    return list;
                }

            })
            return newState;
        default: return state
    }
}

export default listReducer
//trying git reset hard