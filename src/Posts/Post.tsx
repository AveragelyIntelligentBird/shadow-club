import "./styles.css";
import React, { ReactElement } from 'react';
import { users, posts } from '../Database';
import { RiHeartFill, RiHeartLine, RiReplyLine } from "react-icons/ri";
import { Link } from "react-router-dom";

type PostProps = {
    id: string;

};

export default function Post({id }: PostProps)  {
  const author = users.find((u) => u.profileData.posts.includes(id));
  const post = posts.find((p) => p.id === id);
  if (!post) return null;
  const liked = false;
  return (
    <div className="post">
      <div className="d-flex">
        <h2 className="post-title">{post.title}</h2>
        {author && <Link to={`/Cabal/Profile/${author.uid}/Posts`} className="post-author"> {author.username}</Link>}
      </div>
      {post.imageURL && <img src={post.imageURL} alt="" className="post-image" />}
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        <button className="reply-button">Reply <RiReplyLine/></button>
        <button className="like-button">
          {liked ? <RiHeartFill/> : <RiHeartLine/>}
        </button>
      </div>
    </div>
  );
};