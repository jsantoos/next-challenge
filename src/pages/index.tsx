// src/pages/index.tsx
import React from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import router from 'next/router';

interface HomeProps {
  posts: { id: number; title: string }[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <h1>Lista de Posts</h1>
      <PostList posts={posts} onItemClick={(postId) => router.push(`/posts/${postId}`)} />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = response.data;

  return {
    props: { posts },
  };
}

export default Home;
