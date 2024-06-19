import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const POSTS_API = `${REMOTE_SERVER}/api/posts`;
const REPLY_API = `${REMOTE_SERVER}/api/reply`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const deleteReply = async (replyId: string) => {
  const response = await axiosWithCredentials
    .delete(`${REPLY_API}/${replyId}`);
  return response.data;
};

export const findRepliesForPost = async (postId: string) => {
  const response = await axiosWithCredentials
    .get(`${POSTS_API}/${postId}/replies`);
  return response.data;
};

export const findRepliesForUser = async (userId: string) => {
  const response = await axiosWithCredentials
    .get(`${USERS_API}/${userId}/replies`);
  return response.data;
};

// Does this need to encode an author and post as well ??
export const createReply = async (reply: any) => {
    const response = await axiosWithCredentials.post( `${REPLY_API}`, reply );
    return response.data;
};

export const updateReply = async (reply: any) => {
    const response = await axiosWithCredentials
      .put(`${REPLY_API}/${reply._id}`, reply);
    return response.data;
};

export const findReplyForId = async (replyId: string) => {
    const response = await axiosWithCredentials
      .get(`${REPLY_API}/${replyId}`);
    return response.data;
};

// We very likely need a function to fetch posts by partial description/title
// Actually, we will handle this through filtering in the search bar.