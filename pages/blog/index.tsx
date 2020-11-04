import React from "react";
import { NextSeo } from "next-seo";
import Post from "../../components/Blog/Post";
import { posts } from "../../lib/getAllPosts";
import Container from "@/components/Layout/Container";

const BlogPage = () => {
  console.log(posts);
  return (
    <>
      <NextSeo title="Блог" description="Список статей" />
      <Container>
        <h1 className="text-6xl text-gray-800 text-center font-semibold mb-8">
          Мои статьи
        </h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <Post key={post.link} post={post} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default BlogPage;
