import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
import AlertBox from "./AlertBox";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [showAlert, setShowAlert] = useState(false)

const addTodo = (content) => {
    setTodos([{content:content, id: Math.random(), isCompleted:false, isEditing:false},...todos])
}

const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => {
        return todo.id !== id
    }))
}

const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => {
        return todo.id === id ? {...todo, isCompleted : !todo.isCompleted}
        : todo
    }))
}

const toggleEditing = (id) => {
    setTodos(todos.map((todo) => {
        return todo.id === id ? {...todo, isEditing : !todo.isEditing}
        : todo
    }))
}

const handleEdit = (id, newContent) => {
    setTodos(todos.map((todo)=>{
        return todo.id === id && newContent != "" ? {...todo, content:newContent, isEditing:false} : {...todo, isEditing:false}
    }))
}

const closeAlert = () => {
    setShowAlert(false)
}

  return (
    <>
    <div className="wrapper">
      <h1>To-do List</h1>
      <div className="operation-field">
      <CreateForm addTodo = {addTodo} setShowAlert = {setShowAlert}/>
      </div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleCompleted = {toggleCompleted} toggleEditing = {toggleEditing} handleEdit = {handleEdit}/>;
      })}
    </div>
    {showAlert && <AlertBox message={"Please Enter Something Please..."} closehint = {"Click somewhere to close"} closeAlert={closeAlert}/>}
    </>
  );
}

export default TodoWrapper;
