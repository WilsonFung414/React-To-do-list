import { useState } from "react";

function EditTodo({ todo, handleEdit }) {
  const [content, setContent] = useState(todo.content);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(todo.id, content);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></input>
      <button type="submit">Done</button>
    </form>
    
  );
}

export default EditTodo;
