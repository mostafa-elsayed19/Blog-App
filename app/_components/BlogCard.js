import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <li className="flex flex-col rounded-lg border border-cardBorder bg-white">
      <Image
        src="https://placehold.co/400"
        alt={blog.title}
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
        <p className="text-lg">{blog.content}</p>
      </div>
      <Link
        href={`blogs/${blog.id}`}
        className="mb-3 mr-3 self-end rounded-lg bg-buttonBg px-6 py-2 text-lightText"
      >
        Read more
      </Link>
    </li>
  );
}

export default BlogCard;
