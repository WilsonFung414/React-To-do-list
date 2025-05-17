import { MdOutlineDelete, MdEdit } from "react-icons/md";
import EditTodo from "./EditTodo";

function Todo({ todo, deleteTodo, toggleCompleted, toggleEditing, handleEdit}) {
  return todo.isEditing ? 
  (<EditTodo todo = {todo} handleEdit = {handleEdit}/>) : (
      <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
        <p
          onClick={() => {
            toggleCompleted(todo.id);
          }}
        >
          {todo.content}
        </p>
        <div>
          <MdEdit
            style={{ marginRight: "8px", cursor: "pointer" }}
            onClick={() => {
              toggleEditing(todo.id);
            }}
          />
          <MdOutlineDelete
            onClick={() => {
              deleteTodo(todo.id);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      );
}

export default Todo;
