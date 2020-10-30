import React from "react";
import Post from "../../components/Blog/Post";
import { posts } from "../../lib/getAllPosts";

const BlogPage = () => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
};

export default BlogPage;
