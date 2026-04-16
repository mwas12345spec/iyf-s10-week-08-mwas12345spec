import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Form Component
function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Main App Component
function App() {
  const name = "Mark";
  const date = new Date().toLocaleDateString();
  const hour = new Date().getHours();

  let message;
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";

  const posts = [
    { id: 1, title: "First Post", excerpt: "Hello React", author: "Alice", date: "Jan 1" },
    { id: 2, title: "Second Post", excerpt: "Learning props", author: "Bob", date: "Jan 2" }
  ];

  return (
    <div>
      <Header />

      <h1>Hello, I am Mark Mwangi</h1>
      <p>I am learning React this week.</p>
      <p>I enjoy coding and building web apps.</p>
      <p>This is my CommunityHub project.</p>
      <p>Today's date: {date}</p>
      <p>{message}</p>

      <h2>Posts</h2>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}

      <h2>Counter</h2>
      <Counter />

      <h2>Form</h2>
      <Form />

      <Footer />
    </div>
  );
}

export default App;