import { useState } from "react";

function CreatePost({ addPost }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Post</button>
    </form>
  );
}
export default CreatePost;
