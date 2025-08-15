import PostsList from "@/components/Home/PostsList";
import { posts } from "@/blogposts/posts";

export default function Home() {
  return <PostsList posts={posts} />;
}
