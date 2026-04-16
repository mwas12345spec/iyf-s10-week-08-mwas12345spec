import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div>
      {posts.map(p => (
        <PostCard key={p.id} {...p} />
      ))}
    </div>
  );
}
export default PostList;