import "./styles.css";
import React, { ReactElement } from 'react';
import { RiHeartFill, RiHeartLine, RiReplyLine } from "react-icons/ri";

type PostProps = {
    title: string;
    body: string;
    imageUrl?: string;
    liked?: boolean;
};

export default function Post({title, body, imageUrl, liked }: PostProps): ReactElement {
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      {imageUrl && <img src={imageUrl} alt={title} className="post-image" />}
      <p className="post-body">{body}</p>
      <div className="post-actions">
        <button className="reply-button">Reply <RiReplyLine/></button>
        <button className="like-button">
          {liked ? <RiHeartFill/> : <RiHeartLine/>}
        </button>
      </div>
    </div>
  );
};