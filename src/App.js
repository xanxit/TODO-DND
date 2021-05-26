import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import Button from './components/Button';
import {DragDropContext} from 'react-beautiful-dnd'
import { sort } from './actions'
import { useDispatch } from 'react-redux';

function App({lists}) {
  const dispatch = useDispatch() ;
  const onDragEnd=(result)=>{
    const { destination, source, draggableId }=result;

    if(!destination)
    {
      return;
    }
    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <br></br><br></br><br></br><br></br>
      <div style={styles.container}>
      {lists.map(list=>(
        <TodoList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>
      ))}
      <Button lists/>
      </div>
      </div>
      </DragDropContext>
  );
}
const mapStateToProps = state => ({
  lists: state.lists
})

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
  }
}


export default connect (mapStateToProps) (App);
