import React, { ReactElement } from "react";
import Post from "./Post";
import "./styles.css";
import { Link } from "react-router-dom";
// If the user is anonymous or has the defualt role, display an advertisement image
// from the advertisements folder in the images directory every five posts
export default function Feed({ posts }: FeedProps): ReactElement {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div>
          {index % 5 === 0 &&
            <Link to="/BecomeElite">
              <img className="ad" src={`images/advertisements/${index / 5 + 1}.png`} />
            </Link>}
          <Post key={index} id={post._id} />
        </div>
      ))}
    </div>
  );
}

export type FeedProps = {
  posts: {
    _id: string;
    title: string;
    body: string;
    imageUrl?: string;
    liked?: boolean;
  }[];
};
