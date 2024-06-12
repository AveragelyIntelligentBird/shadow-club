import React, { ReactElement } from 'react';
import Post from './Post';
import './styles.css';

export default function Feed({ posts }: FeedProps): ReactElement {
    return (
        <div className="feed">
          {posts.map((post, index) => (
            <Post
              key={index}
              id={post.id}
            />
          ))}
        </div>
    );
}

export type FeedProps = {
    posts: {
        id: string;
        title: string;
        body: string;
        imageUrl?: string;
        liked?: boolean;
    }[];
};