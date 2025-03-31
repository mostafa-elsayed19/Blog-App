"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../_context/AuthContext";
import AddComment from "./AddComment";
import Button from "./Button";

function Comments({ comments, blogId }) {
  const { user } = useAuth();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (user) {
      setUserId(user.uid);
    }
  }, [user]);
  return (
    <div className="mt-4 flex flex-col gap-4">
      {!comments ? (
        <p className="rounded-md bg-foreground p-4 text-lightText">
          Be the first to comment.
        </p>
      ) : (
        comments?.map((comment, i) => (
          <div
            key={i}
            className="flex items-baseline gap-2 rounded-md bg-foreground p-4 text-lightText"
          >
            <h3 className="text-lg font-semibold">{comment.name}: </h3>
            <p>{comment.content}</p>
            {userId === comment.user && (
              <Button
                className="ml-auto"
                type="button"
                onClick={() => console.log("Delete comment")}
              >
                Delete
              </Button>
            )}
          </div>
        ))
      )}
      <AddComment blogId={blogId} />
    </div>
  );
}

export default Comments;
