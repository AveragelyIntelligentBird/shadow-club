import { useEffect, useState } from "react";
import Post from "./Post";
import * as client from "./client";
import * as replyClient from "../Replies/client";
import Reply from "../Replies/Reply";
import { useParams } from "react-router";

export default function PostReplies() {
    const {pid} = useParams();
    const [replies, setReplies] = useState<any[]>([]);
    const fetchReplies = async () => {
        const replies = await replyClient.findRepliesForPost(pid || "");
        setReplies(replies);
    };
    useEffect(() => {
        fetchReplies();
    }, []);
    return (
        <div>
            <Post id={pid || ""} />
            {/* This is where we will display the replies to the post */}
            {replies.map((reply) => (<Reply id={reply._id as string} />))}
        </div>
    );
}