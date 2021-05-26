import {CONSTRAINTS} from '../actions'
let listID=4;
let cardID=6;
const initialState=[
    // {
    //     title: 'First Task',
    //     id: `list-${0}`,
    //     cards:[{
    //         title: 'Card 1',
    //         id:1,
    //         description: 'This is Card 1'
    //     },
    //     {
    //         title: 'Card 2',
    //         id:2,
    //         description: 'This is Card 2'
    //     }]
    // },
    // {
    // title: 'First Task',
    // id:`list-${1}`,
    // cards:[{
    //     title: 'Card 1',
    //     id:`card-${1}`,
    //     description: 'This is Card 1'
    // },
    // {
    //     title: 'Card 2',
    //     id:`card-${2}`,
    //     description: 'This is Card 2'
    // },
    // {
    //     title: 'Card 2',
    //     id:`card-${3}`,
    //     description: 'This is Card 2'
    // }]
    // },
    // {
    // title: 'First Task',
    // id:`list-${2}`,
    // cards:[{
    //     title: 'Card 1',
    //     id:`card-${1}`,
    //     description: 'This is Card 1'
    // },
    // {
    //     title: 'Card 2',
    //     id:`card-${2}`,
    //     description: 'This is Card 2'
    // },
    // {
    //     title: 'Card 2',
    //     id:`card-${3}`,
    //     description: 'This is Card 2'
    
    // },
    // {
    //     title: 'Card 2',
    //     id:`card-${4}`,
    //     description: 'This is Card 2'
    // },
    // {
    //     title: 'Card 2',
    //     id:`card-${5}`,
    //     description: 'This is Card 2'
    
    // }]
    // }
]

const listReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case CONSTRAINTS.ADD_LIST:
            const newList ={
                title:action.payload,
                cards:[],
                id:`list-${listID}`
            }
            listID=listID+1;
            return [...state,newList];

            
        case CONSTRAINTS.ADD_CARD:
            {
            const newCard={
                description:action.payload.description,
                id:`card-${cardID}`,
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
        }
            case CONSTRAINTS.DRAG_HAPPENED :{
                const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } =action.payload
            const newState=[...state];
            if(droppableIdStart===droppableIdEnd)
            {
                const list= state.find(list=>droppableIdStart===list.id)
                const card= list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd,0,...card)
            }
            return newState;
        }
        default: return state
    }
}

export default listReducer
//trying git reset hard