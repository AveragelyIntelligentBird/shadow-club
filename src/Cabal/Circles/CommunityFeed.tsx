import React, { ReactElement } from 'react';
import { communities } from '../Database';
import { useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';

import Post from '../Posts/Post';

export default function CommunityFeed(): ReactElement {
    const { id } = useParams();
    const community = communities.find((community) => community.id === id);

    const posts: {
        title: string;
        body: string;
        imageUrl?: string | undefined;
        liked?: boolean | undefined;
      }[] = [
        {
          title: "Community Post 1",
          body: "This is the body of my first post. It's just a simple example of how to create a post component.",
          imageUrl: "https://example.com/image.jpg",
          liked: true,
        },
        {
          title: "Community Post 2",
          body: "This is the body of my second post. This post does not have an image.",
          liked: false,
        },
        {
          title: "Community Post 3",
          body: "This is another post with an image.",
          imageUrl: "https://example.com/another-image.jpg",
          liked: false,
        },
    ];

    return (
      <div id="community-feed">
        <CommunityHeader 
          id={community?.id || "0"}
          name={community?.name || ""}
          description={community?.description || ""}
          bannerImage={community?.image || ""}/>

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
      </div>
    );
}