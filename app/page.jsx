import BlogList from "./_components/BlogList";
import { getBlogs } from "./_lib/actions";

async function Home() {
  const blogs = await getBlogs();

  return <BlogList blogs={blogs} />;
}

export default Home;
