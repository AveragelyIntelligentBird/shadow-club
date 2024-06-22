// An editor for creating and editing posts.
// Posts have a title, body, and optional image
// They also have a community id, which is required

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as client from './client';
import * as circleClient  from '../Circles/client';
import * as profileClient from '../Account/client';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { users, communities } from "../Database";

export default function PostEditor() {
    // get the id of the community from the url
    const { id } = useParams();
    // Need to get user from redux
    const { user } = useSelector((state: any) => state.accountReducer);
    const post = {
        title: "",
        body: "",
        imageURL: "",
        community: id
    };
    const [newPost, setNewPost] = useState(post);
    const [circle, setCircle] = useState<any>();
    const fetchCircle = async () => {
        const circle = await circleClient.findCircleForId(id || "");
        setCircle(circle);
    }
    const submitPost = async () => {
        await client.createPost(id || "", newPost).then(p => {client.addPostToProfile(user._id, p._id)});
    }
    useEffect(() => {
        fetchCircle();
    }, []);
    if (!circle) return null;
    if (!user) return <Link className="wd-green-yellow wd-bg-jet" to="/Login">Login to reply</Link>
    return (
        <div className="border border-3 p-2 rounded-2">
            <h2 className="wd-green-yellow wd-primary-font">Create a new post</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label wd-green-yellow wd-secondary-font">Title</label>
                    <input type="text" className="form-control post-field" id="title" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label wd-green-yellow wd-secondary-font">Body</label>
                    <textarea className="form-control post-field" id="body" value={newPost.body} onChange={(e) => setNewPost({...newPost, body: e.target.value})}/>
                </div>
                {/* Need to come up with a better way to handle images */}
                <div className="mb-3">
                    <label htmlFor="imageURL" className="form-label wd-green-yellow wd-secondary-font">Image</label>
                    <input type="text" className="post-field form-control" id="imageURL" value={newPost.imageURL} onChange={(e) => setNewPost({...newPost, imageURL: e.target.value})}/>
                </div>
                {/* The community will be parsed from where it is being posted from */}
                <div className="mb-3">
                    <label htmlFor="community" className="form-label wd-green-yellow wd-secondary-font">Community</label>
                    <input type="text" className="post-field form-control" id="community" value={(circle.name || {name: "ERROR"}).name} disabled/>
                    {/* <label htmlFor="community" className="form-label wd-green-yellow wd-secondary-font">Community</label>
                    <select className="form-select post-field" id="community" value={newPost.community} onChange={(e) => setNewPost({...newPost, community: e.target.value})}>
                        {(user..memberOf).map((community: any) => (
                            <option key={community} value={community}>{communities.find((c) => c.id === community)?.name}</option>
                        ))}
                    </select> */}
                </div>
                <Link to={`/Cabal/Post/${id}`} className="btn btn-secondary">Cancel</Link>
                <Link to={`/Cabal/Post/${id}`}>
                    <button type="submit" className="btn wd-bg-camb-blue" onClick={()=> submitPost()}>Submit</button>
                </Link>
            </form>
        </div>
    )
}