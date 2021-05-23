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
        default: return state
    }
}

export default listReducer
