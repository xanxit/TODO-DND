import React from 'react';
import Card from './Card';
import Button from './Button';
import {Droppable} from 'react-beautiful-dnd'
const TodoList = ({ title , cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style= {styles.container}>
            <h3>{title}</h3>
            {cards.map((card,index)=>(
            <Card key={card.id} index={index} description={card.description} id={card.id} /> 
            ))}
            <Button listID={listID}/>
            {provided.placeholder}
        </div>
      
        )}
        </Droppable>
    )
}
const styles={
        container: {
            backgroundColor:"#ccc",
            borderRadius:3,
            width:300,
            padding:8,
            marginRight:20,
            height:"100%"

        }
}

export default TodoList
