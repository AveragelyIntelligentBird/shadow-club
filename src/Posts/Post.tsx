import "./styles.css";
import React, { ReactElement } from 'react';
// import { users, posts } from '../Database';
import { RiHeartFill, RiHeartLine, RiReplyLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as client from './client';

type PostProps = {
    id: string;
};

export default function Post({id }: PostProps)  {
  const {user} = useSelector((state: any) => state.accountReducer);
  const [post, setPost] = React.useState<any>(null);
  const [author, setAuthor] = React.useState<any>(null);
  const fetchPost = async () => {
    const post = await client.findPostForId(id);
    const author = await client.findAuthorForPost(id);
    setPost(post);
    setAuthor(author);
  }
  React.useEffect(() => {
    fetchPost();
  }, []);

  if (!user) return null;
  if (!post) return null;
  const liked = user.profileData.likedPosts.includes(id);
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
        {author && <Link to={`/Cabal/Profile/${author._id}/Posts`} className="post-author"> {author.username}</Link>}
      </div>
      {post.imageURL && <img src={post.imageURL} alt="" className="post-image" />}
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        {user.role !== "anonymous" && <button className="reply-button">Reply <RiReplyLine/></button>}
        {user.role !== <button className="like-button" onClick={() => likePost()}>
          {liked ? <RiHeartFill/> : <RiHeartLine/>}
        </button>}
      </div>
    </div>
  );
};