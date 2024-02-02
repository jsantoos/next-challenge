// src/pages/posts/[postId].tsx
import React from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface PostProps {
  post: { title: string; body: string };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params || !params.postId) {
    return {
      notFound: true,
    };
  }

  const { postId } = params;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId as string}`);
  const post = response.data;

  return {
    props: { post },
  };
};

export default Post;
