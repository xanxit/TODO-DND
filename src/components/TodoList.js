import React from 'react';
import Card from './Card';
import Button from './Button';
const TodoList = ({ title , cards }) => {
    return (
        <div style= {styles.container}>
            <h3>{title}</h3>
            {cards.map(card=>(
            <Card key={card.id} description={card.description} /> 
            ))}
            <Button/>
        </div>
    )
}
const styles={
        container: {
            backgroundColor:"#ccc",
            borderRadius:3,
            width:300,
            padding:8,
            marginRight:20,

        }
}

export default TodoList
