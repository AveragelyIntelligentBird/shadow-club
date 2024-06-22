import "./styles.css";
import React, { ReactElement } from 'react';
// import { users, posts } from '../Database';
import { RiHeartFill, RiHeartLine, RiReplyLine } from "react-icons/ri";
import { FaCommentDots, FaTrash } from "react-icons/fa";
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
  const liked = user && user.likedPosts.includes(id);
  const likePost = async () => {
    if (liked) {
      await client.unlikePost(user._id, id);
    }
    else {
      await client.likePost(user._id, id);
    }
  }
  const deletePost = async () => {
    await client.deletePost(id);
  }
  // overseer user
  return (
    // We need to set the border based on the author's role and wether they are a mod of the post's community
    <div className={!author ? "post" :
                    author.role === "premium" ? "post wd-elite-border" :
                    author.role === "overseer" ? "post wd-overseer-border" :
                    author.moderatorOf.find((c: any) => {return c === circle._id}) ? "post wd-moderator-border" :
                    author.role === "user" ? "post" : "post"}>
      <div className="d-flex">
        <h2 className="post-title">{post.title}</h2>
        {author && <Link to={`/Profile/${author._id}`} className="post-author"> {author.username}</Link>}
        {/* If the user is the author of the post OR moderates the community it is posted in, add a deletion button */}
        {author && user &&
          /* If the user is the author or a moderator of the community, display the button. */
          (user._id === author._id || user.moderatorOf.find((c: any)=>{return c._id === circle._id}))
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
        {user && <button className="reply-button">Reply <RiReplyLine/></button>}
        {user && <button className="like-button" onClick={() => likePost()}>
          {liked ? <RiHeartFill/> : <RiHeartLine/>}
        </button>}
      </div>
    </div>
  );
};