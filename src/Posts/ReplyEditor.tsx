// An editor for creating and editing posts.
// Posts have a title, body, and optional image
// They also have a community id, which is required

import { useState } from "react";
import { useParams } from "react-router";
import { users, communities } from "../Database";

export default function ReplyEditor() {
    const { uid, id } = useParams();
    const user = users.find((user) => user.uid === uid) || {profileData: {memberOf: []}};
    const reply = {
        id: new Date().getTime().toString(),
        body: "",
        post: id,
    };
    const [newReply, setNewReply] = useState(reply);
    return (
        <div className="border border-3 p-2 rounded-2">
            <h2 className="wd-green-yellow wd-primary-font">Create a new reply</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label wd-green-yellow wd-secondary-font">Body</label>
                    <textarea className="form-control post-field" id="body" value={newReply.body} onChange={(e) => setNewReply({...newReply, body: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}