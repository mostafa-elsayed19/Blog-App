import BlogList from "./_components/BlogList";
import { getBlogs } from "./_lib/actions";

async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="h-full w-full">
      <BlogList blogs={blogs} />
    </main>
  );
}

export default Home;
