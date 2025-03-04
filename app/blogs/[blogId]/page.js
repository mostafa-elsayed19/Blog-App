import BlogDetails from "@/app/_components/BlogDetails";
import Wrapper from "@/app/_components/Wrapper";
import { getBlog } from "@/app/_lib/actions";

async function page({ params }) {
  const { blogId: id } = await params;
  const blog = await getBlog(id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <Wrapper className="my-4">
      <BlogDetails blog={blog} />
    </Wrapper>
  );
}

export default page;
