import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import {Draggable} from 'react-beautiful-dnd'
function card({ description,id,index}) {
    return (
        <Draggable draggableId={String(id)} index={index} >
            {provided=>(
                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
        <Card style={styles.cardcomponent}>
            <CardContent >
            <Typography gutterBottom>{description}</Typography>
            </CardContent>
        </Card>
        </div>
        )}
        </Draggable>

    )
}
const styles={
    cardcomponent:{
        marginBottom: 8
    }
}

export default card
