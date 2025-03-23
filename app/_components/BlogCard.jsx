import Image from "next/image";
// import Link from "next/link";
import Button from "./Button";

function BlogCard({ blog }) {
  return (
    <li className="flex flex-col rounded-lg border border-cardBorder bg-white">
      <Image
        src={blog.imageUrl || "https://placehold.co/400"}
        alt={"Cover Image"}
        className="h-48 w-full object-cover"
        width={400}
        height={200}
      />
      <div className="flex-1 space-y-2 p-4">
        <h2 className="text-lg font-medium">{blog.title}</h2>
        <p>
          <span className="text-lg font-medium">Author: </span>
          {blog.author}
        </p>
        <p className="text-lg">
          {blog.content.split(" ").slice(0, 20).join(" ")}
          {blog.content.split(" ").length > 20 && "..."}
        </p>
      </div>
      <Button type={"link"} href={`blogs/${blog.id}`} className="mb-3 mr-3">
        Read more
      </Button>
    </li>
  );
}

export default BlogCard;
