import BlogCard from "./BlogCard";
import Wrapper from "./Wrapper";

function BlogList({ blogs }) {
  return (
    <Wrapper className="my-4">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default BlogList;
