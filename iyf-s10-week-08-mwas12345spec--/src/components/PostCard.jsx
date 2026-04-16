function PostCard({ title, excerpt, author, date }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <small>{author} - {date}</small>
    </div>
  );
}
export default PostCard;