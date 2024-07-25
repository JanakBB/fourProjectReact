import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState([""])

    const addNewTask = (e) => {
        setTodos((prevTodos) => {
            return([...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]);
        })
        setNewTodo("")
    }

    const updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    const onKeyDownInput = (e) => {
        if(e.key === "Enter") addNewTask()
    } 

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }

    const markAll =() => {
        setTodos((prevTodos) => (prevTodos.map(todo => ({...todo, isDone: true}))))//task: todo.task.toUpperCase()
    }

    const markAsDone = (id) => {
        setTodos((prevTodos) => (prevTodos.map(todo => {
            if(todo.id == id) {
                return({...todo, isDone: true})
            } else {
                return todo
            }
        })))
    }
    return(
        <div className="todoHead">
            <input type="text" value={newTodo} onKeyDown={onKeyDownInput} onChange={updateTodoValue} placeholder="Add a Task.." />
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h3>
                Todo List
            </h3>
            <hr />
            <button onClick={markAll}>Mark All</button>
            <ul>
                {
                    todos.map((todo) => {
                        return(
                            <li key={todo.id}>
                               <div className="todoOutput">
                                    <p style={todo.isDone ? {textDecoration: "Line-through"} : {}}>
                                        {todo.task}
                                    </p>
                                    <div>
                                        <button onClick={() => deleteTodo(todo.id)}>
                                            Delete
                                        </button>
                                        <button onClick={() => markAsDone(todo.id)}>
                                            Mark
                                        </button>   
                                    </div>
                                                                 
                               </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;