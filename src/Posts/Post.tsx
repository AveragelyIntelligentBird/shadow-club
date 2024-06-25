import "./styles.css";
import React, { ReactElement, useEffect, useState } from 'react';
// import { users, posts } from '../Database';
import { RiHeartFill, RiHeartLine, RiReplyLine } from "react-icons/ri";
import { FaCommentDots, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as client from './client';
import * as circleClient from '../Circles/client';
import * as profileClient from '../Account/client';

type PostProps = {
    id: string;
};

export default function Post({id }: PostProps)  {
  // const {user} = useSelector((state: any) => state.accountReducer);
  let user = useSelector((state: any) => state.accountReducer)["currentUser"];
  
  // console.log(user);
  // console.log(user);
  const [post, setPost] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  const [circle, setCircle] = useState<any>(null);
  const [liked, setLiked] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const fetchPost = async () => {
    const post = await client.findPostForId(id);
    const author = await client.findAuthorForPost(id);
    const circle = await circleClient.findCircleForId(post.circle);
    user = user && await profileClient.findUserProfileById(user._id);
    const liked = user && user.likes.includes(id);
    // console.log(post.title, post._id, liked);
    setPost(post);
    setAuthor(author);
    setCircle(circle);
    setLiked(liked);
  }
  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) return null; 
  const likePost = async () => {
    if (liked) {
      await client.unlikePost(user._id, id);
      setLiked(false);
    }
    else {
      await client.likePost(user._id, id);
      setLiked(true);
    }
  }
  const deletePost = async () => {
    await client.deletePost(id);
    setDeleted(true);
  }
  if (deleted) return null;
  return (
    // We need to set the border based on the author's role and wether they are a mod of the post's community
    <div className={!author ? "post" :
                    author.role === "elite" ? "post wd-elite-border" :
                    author.role === "overseer" ? "post wd-overseer-border" :
                    author.moderatorOf.find((c: any) => {return c === circle._id}) ? "post wd-moderator-border" :
                    author.role === "user" ? "post" : "post"}>
      <div className="d-flex">
        <Link to={`/Post/${id}`} className="post-title text-decoration-none">
          <h2 className="post-title">{post.title}</h2>
        </Link>
        {author && <Link to={`/Profile/${author._id}`} className="post-author"> {author.username}</Link>}
        {/* If the user is the author of the post OR moderates the community it is posted in, add a deletion button */}
        {author && user &&
          /* If the user is the author or a moderator of the community, display the button. */
          (user._id === author._id || user.moderatorOf.find((c: any)=>{return c === circle._id}))
            && <button className="delete-button" onClick={() => deletePost()}> <FaTrash/> </button>}
      </div>
      {/* Maybe add styling?? */}
      <Link to={`/Circles/${post.circle}`} className="post-community"> {circle.name}</Link>
      {post.imageURL && <img src={post.imageURL} alt="" className="post-image" />}
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        <Link to={`/Post/${id}`} className="post-author">
          <button className="comment-button">Comments <FaCommentDots/></button>
        </Link>
        <Link to={`/Post/${id}/New`} className="post-author">
          {user && <button className="reply-button">Reply <RiReplyLine/></button>}
        </Link>
        {user && <button className="like-button float-end" onClick={() => likePost()}>
          {liked ? <RiHeartFill className="fs-4"/> : <RiHeartLine className="fs-4"/>}
        </button>}
      </div>
    </div>
  );
};