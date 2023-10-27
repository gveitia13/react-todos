import React, {useState} from "react";
import './App.css';
import TodoTable from "./components/TodoTable";

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Feed asd', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'sadasd puppy', rowAssigned: 'User one'},
    {rowNumber: 4, rowDescription: 'sadasd asdasdasda', rowAssigned: 'User one'},
  ])
  const addTodo = () => {
    console.log('hola')
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}></TodoTable>
          <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
