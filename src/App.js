import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import Button from './components/Button';
import {DragDropContext} from 'react-beautiful-dnd'
function App({lists}) {
  const onDragEnd=()=>{
    
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
