import { useEffect, useState } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Reply({ id }: { id: string}) {
    const [author, setAuthor] = useState<any>(null);
    const [reply, setReply] = useState<any>(null);
    const fetchReply = async () => {
        const reply = await client.findReplyForId(id);
        const author = await client.findAuthorForReply(id);
        console.log(author);
        setReply(reply);
        setAuthor(author);
    };
    useEffect(() => {
        fetchReply();
    }, []);
    if (!reply) return null;
    return (
        <div className="reply">
            {/* Like with the post component, link to the author then have the reply body */}
            {author && <Link to={`/Profile/${author._id}`} className="post-author"> {author.username}</Link>}
            <p className="reply-body">{reply.body}</p>
        </div>
    );
}