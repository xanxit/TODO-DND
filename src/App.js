import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
function App({lists}) {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div style={styles.container}>
      {lists.map(list=>(
        <TodoList key={list.id} title={list.title} cards={list.cards}/>
      ))}
      </div>
      </div>
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
