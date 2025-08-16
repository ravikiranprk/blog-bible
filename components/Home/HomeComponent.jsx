import PostsList from "@/components/Home/PostsList";
import { posts } from "@/blogposts/posts";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <Menu />
      <PostsList posts={posts} />
      <Footer />
    </>
  );
}
