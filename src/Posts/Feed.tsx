import React, { ReactElement } from 'react';
import Post from './Post';
import './styles.css';

export default function Feed({ posts }: FeedProps): ReactElement {
    return (
        <div className="feed">
          {posts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              body={post.body}
              imageUrl={post.imageUrl}
              liked={post.liked}
            />
          ))}
        </div>
    );
}

export type FeedProps = {
    posts: {
        title: string;
        body: string;
        imageUrl?: string;
        liked?: boolean;
    }[];
};