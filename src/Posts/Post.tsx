import "./styles.css";
import React, { ReactElement } from 'react';
// import { users, posts } from '../Database';
import { RiHeartFill, RiHeartLine, RiReplyLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as client from './client';
import * as circleClient from '../Circles/client';

type PostProps = {
    id: string;
};

export default function Post({id }: PostProps)  {
  const {user} = useSelector((state: any) => state.accountReducer);
  const [post, setPost] = React.useState<any>(null);
  const [author, setAuthor] = React.useState<any>(null);
  const [circle, setCircle] = React.useState<any>(null);
  const fetchPost = async () => {
    const post = await client.findPostForId(id);
    const author = await client.findAuthorForPost(id);
    const circle = await circleClient.findCircleForId(post.circle);
    setPost(post);
    setAuthor(author);
    setCircle(circle);
  }
  React.useEffect(() => {
    fetchPost();
  }, []);

  if (!post) return null;
  // May be fucky
  const liked = user && user.profileData.likedPosts.includes(id);
  const likePost = async () => {
    if (liked) {
      await client.unlikePost(user._id, id);
    }
    else {
      await client.likePost(user._id, id);
    }
  }
  return (
    <div className="post">
      <div className="d-flex">
        <h2 className="post-title">{post.title}</h2>
        {author && <Link to={`/Cabal/Profile/${author._id}`} className="post-author"> {author.username}</Link>}
      </div>
      {/* Maybe add styling?? */}
      <Link to={`/Cabal/Circles/${post.circle}`} className="post-community"> {circle.name}</Link>
      {post.imageURL && <img src={post.imageURL} alt="" className="post-image" />}
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        {user && <button className="reply-button">Reply <RiReplyLine/></button>}
        {user && <button className="like-button" onClick={() => likePost()}>
          {liked ? <RiHeartFill/> : <RiHeartLine/>}
        </button>}
      </div>
    </div>
  );
};