import Image from "next/image";
import Comments from "./Comments";

// const comments = [
//   { id: 1, name: "John Doe", content: "Great blog post!" },
//   { id: 2, name: "John Smith", content: "Awesome post!" },
//   { id: 3, name: "Jane Doe", content: "Nice post!" },
// ];

function BlogDetails({ blog }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Blog title and tags */}
      <div className="flex items-center justify-between">
        <h1 className="text-center text-3xl font-bold">{blog.title}</h1>
        <ul className="flex gap-2">
          {blog.tags?.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-foreground px-2 py-1 text-sm text-background"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Image */}
      <div className="relative min-h-[300px]">
        <Image
          src={blog.imageUrl || "https:/placehold.co/400"}
          fill
          alt={"Cover image for " + blog.title}
          className="w-full rounded-lg object-cover"
          priority
        />
      </div>
      {/* Blog content */}
      <p className="font-semibold">
        <span className="font-bold">Author: </span>
        {blog.author}
      </p>
      <p className="font-semibold">{blog.content}</p>

      {/* Blog comments */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold">Comments</h2>
      </div>
      <Comments comments={blog?.comments} />
    </div>
  );
}

export default BlogDetails;
