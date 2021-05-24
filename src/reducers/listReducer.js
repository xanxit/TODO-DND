import {CONSTRAINTS} from '../actions'
let listID=5;
const initialState=[{
    title: 'First Task',
    id:1,
    cards:[{
        title: 'Card 1',
        id:1,
        description: 'This is Card 1'
    },
    {
        title: 'Card 2',
        id:2,
        description: 'This is Card 2'
    }]
},
{
title: 'First Task',
id:2,
cards:[{
    title: 'Card 1',
    id:1,
    description: 'This is Card 1'
},
{
    title: 'Card 2',
    id:2,
    description: 'This is Card 2'
},
{
    title: 'Card 2',
    id:3,
    description: 'This is Card 2'
}]
},
{
title: 'First Task',
id:3,
cards:[{
    title: 'Card 1',
    id:1,
    description: 'This is Card 1'
},
{
    title: 'Card 2',
    id:2,
    description: 'This is Card 2'
},
{
    title: 'Card 2',
    id:3,
    description: 'This is Card 2'

},
{
    title: 'Card 2',
    id:4,
    description: 'This is Card 2'
},
{
    title: 'Card 2',
    id:5,
    description: 'This is Card 2'

}]
}
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
            return [...state,newList]
        default: return state
    }
}

export default listReducer
