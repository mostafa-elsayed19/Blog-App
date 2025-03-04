function Comments({ comments }) {
  if (!comments) return null;

  return (
    <>
      {comments?.map((comment, i) => (
        <div
          key={i}
          className="flex items-baseline gap-2 rounded-md bg-foreground p-4 text-lightText"
        >
          <h3 className="text-lg font-semibold">{comment.name}: </h3>
          <p>{comment.content}</p>
        </div>
      ))}
    </>
  );
}

export default Comments;
