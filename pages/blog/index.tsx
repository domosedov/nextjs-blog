import React from "react";
import { NextSeo } from "next-seo";
import Post from "../../components/Blog/Post";
import { posts } from "../../lib/getAllPosts";

const BlogPage = () => {
  return (
    <>
      <NextSeo title="Блог" description="Список статей" />
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
};

export default BlogPage;
