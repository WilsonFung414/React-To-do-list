import { useState } from "react";

function CreateForm({addTodo, setShowAlert}) {
  const [content, setContent] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
        content == "" ? setShowAlert(true) :(
            addTodo(content),
            setContent(''),
            setShowAlert(false)
        )
  }

  return (
    <>
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input thing to do"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></input>
      <button type="submit">Add</button>
    </form>
    </>
  );
}

export default CreateForm;
