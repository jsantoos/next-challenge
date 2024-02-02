// src/components/PostList.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface PostListProps {
  posts: { id: number; title: string }[];
  onItemClick: (postId: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onItemClick }) => {
  return (
    <List>
      {posts.map((post) => (
        <ListItem button key={post.id} onClick={() => onItemClick(post.id)}>
          <ListItemText primary={post.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
