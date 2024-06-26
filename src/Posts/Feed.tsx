import React, { ReactElement, useEffect, useState } from "react";
import Post from "./Post";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// If the user is anonymous or has the defualt role, display an advertisement image
// from the advertisements folder in the images directory every five posts
export default function Feed({ posts }: FeedProps): ReactElement {
  const user = useSelector((state: any) => state.accountReducer)["currentUser"];
  // Reverse the posts so the most recent post is at the top
  console.log(user.role);
  return (
    <div className="feed">
      {posts.slice().reverse().map((post, index) => (
        <div key={index}>
          {(index % 5 === 0) && (!user || user.role === "user") &&
            <Link to="/BecomeElite">
              <img className="ad" src={`images/advertisements/${index % 6 + 1}.png`} />
            </Link>}
          <Post id={post._id} />
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
