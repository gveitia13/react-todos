import React, {useState} from "react";
import './App.css';
import {TodoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";

export const App = () => {

    const [todos, setTodos] = useState([
        {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
        {rowNumber: 2, rowDescription: 'Feed asd', rowAssigned: 'User two'},
        {rowNumber: 3, rowDescription: 'sadasd puppy', rowAssigned: 'User one'},
        {rowNumber: 4, rowDescription: 'sadasd asdasdasda', rowAssigned: 'User one'},
    ])

    const [showAddTodoForm, setShowAddTodoForm] = useState(false)

    const addTodo = (description: string, assigned: string) => {
        let rowNumber = 0
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1
        } else
            rowNumber = 1
        setTodos(todos => [...todos, {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned
        }])
    }

    const deleteTodo = (deleteTodoRowNumber: number) => {
        let filtered = todos.filter(value => value.rowNumber !== deleteTodoRowNumber)
        setTodos(filtered)
    }

    return (
        <div className='mt-5 container'>
            <div className='card'>
                <div className='card-header'>
                    Your Todos
                </div>
                <div className='card-body'>
                    <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
                    <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
                        {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
                    </button>
                    {showAddTodoForm && <NewTodoForm addTodo={addTodo}></NewTodoForm>}
                </div>
            </div>
        </div>
    );
}