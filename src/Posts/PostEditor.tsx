// An editor for creating and editing posts.
// Posts have a title, body, and optional image
// They also have a community id, which is required

import { useState } from "react";
import { useParams } from "react-router";
import { users, communities } from "../Database";

export default function PostEditor() {
    const { id } = useParams();
    const community = communities.find((community) => community.id === id);
    // const user = users.find((user) => user.uid === uid) || {profileData: {memberOf: []}};
    const post = {
        title: "",
        body: "",
        imageURL: "",
        community: id,
        id: new Date().getTime().toString()
    };
    const [newPost, setNewPost] = useState(post);
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
                    <input type="text" className="post-field form-control" id="community" value={(community || {name: "ERROR"}).name} disabled/>
                    {/* <label htmlFor="community" className="form-label wd-green-yellow wd-secondary-font">Community</label>
                    <select className="form-select post-field" id="community" value={newPost.community} onChange={(e) => setNewPost({...newPost, community: e.target.value})}>
                        {(user.profileData.memberOf).map((community: any) => (
                            <option key={community} value={community}>{communities.find((c) => c.id === community)?.name}</option>
                        ))}
                    </select> */}
                </div>
                <button type="submit" className="btn wd-bg-camb-blue">Submit</button>
            </form>
        </div>
    )
}