import * as client from "./client";
import { useState } from "react";
import { useParams } from "react-router";
import { users, communities } from "../Database";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ReplyEditor() {
    const { id } = useParams();
    const {user} = useSelector((state: any) => state.accountReducer);
    const reply = {
        body: "",
        post: id,
    };
    const [newReply, setNewReply] = useState(reply);
    const submitReply = async () => {
        await client.createReply(newReply).then(r => {client.addReplyToProfile(user._id, r._id)});
    }
    if (!user) return <Link to="/Login">Login to reply</Link>
    return (
        <div className="border border-3 p-2 rounded-2">
            <h2 className="wd-green-yellow wd-primary-font">Create a new reply</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label wd-green-yellow wd-secondary-font">Body</label>
                    <textarea className="form-control post-field" id="body" value={newReply.body} onChange={(e) => setNewReply({...newReply, body: e.target.value})}/>
                </div>
                <Link to={`/Cabal/Post/${id}`} className="btn btn-secondary">Cancel</Link>
                <Link to={`/Cabal/Post/${id}`}>
                    <button type="submit" className="btn btn-primary" onClick={()=> submitReply()}>Submit</button>
                </Link>
            </form>
        </div>
    )
}