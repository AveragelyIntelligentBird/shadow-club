import { useState } from "react";
import Feed, {FeedProps} from "./Feed";
import FeedSelector from "./FeedSelector";

export {
  Feed, FeedSelector
};

export default function HomeFeed() {
    const [selectedFeed, setSelectedFeed] = useState('subscribed');
  // We will route this to a feed tab later, just for demo and integration purposes at meeting
  const postsSubscribed: {
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

  const postsAll: {
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
      {
        title: "General Post 1",
        body: "This is the body of my fourth post. This post is in a different community.",
        imageUrl: "https://example.com/another-image.jpg",
        liked: false,
      },
      {
        title: "General Post 2",
        body: "This is the body of my fourth post. This post is in a different community.",
        imageUrl: "https://example.com/another-image.jpg",
        liked: false,
      },
    ]

  const handleSelectFeed = (feed: 'subscribed' | 'all') => {
    setSelectedFeed(feed);
  };

  const posts = selectedFeed === 'subscribed' ? postsSubscribed : postsAll;
  return (
    <div className="text-primary">
        {/*
        <CommunityHeader
          name="Shadow Club"
          description="A club for people who love shadows"
          bannerImage="images/blue.jpg"
          member={true}
        />
        */}
        <FeedSelector onSelectFeed={handleSelectFeed} />
        <Feed posts={posts} />
    </div>
  );
}