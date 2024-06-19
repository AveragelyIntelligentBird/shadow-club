import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const POSTS_API = `${REMOTE_SERVER}/api/posts`;
const CIRCLES_API = `${REMOTE_SERVER}/api/circles`;
const PROFILES_API = `${REMOTE_SERVER}/api/profiles`;

export const deletePost = async (postId: string) => {
  const response = await axiosWithCredentials
    .delete(`${POSTS_API}/${postId}`);
  return response.data;
};

export const findAllPosts = async () => {
  const response = await axiosWithCredentials.get(POSTS_API);
  return response.data;
};

export const findPostForId = async (postId: string) => {
  const response = await axiosWithCredentials
    .get(`${POSTS_API}/${postId}`);
  return response.data;
};

export const findPostsForCircle = async (circleId: string) => {
  const response = await axiosWithCredentials
    .get(`${CIRCLES_API}/${circleId}/posts`);
  return response.data;
};

export const findPostsForProfile = async (profileId: string) => {
  const response = await axiosWithCredentials
    .get(`${PROFILES_API}/${profileId}/posts`);
  return response.data;
};

export const findLikedPostsForProfile = async (profileId: string) => {
  const response = await axiosWithCredentials
    .get(`${PROFILES_API}/${profileId}/likes`);
  return response.data;
}

// Does this need to encode an author as well ??
export const createPost = async (circleId: string, post: any) => {
    const response = await axiosWithCredentials.post( `${CIRCLES_API}/${circleId}/posts`, post );
    return response.data;
};

export const updatePost = async (post: any) => {
    const response = await axiosWithCredentials
      .put(`${POSTS_API}/${post._id}`, post);
    return response.data;
};

// Needed for finding whether the user has liked a post/can delete a post
export const profile = async () => {
  const response = await axios.post(`${REMOTE_SERVER}/api/profile`);
  return response.data;
};

export const findAuthorForPost = async (postId: string) => {
  const response = await axiosWithCredentials
    .get(`${POSTS_API}/${postId}/author`);
  return response.data;
};

export const likePost = async (profileId: string, postId: string) => {
  const response = await axiosWithCredentials
    .post(`${PROFILES_API}/${profileId}/likes/${postId}`);
  return response.data;
}

export const unlikePost = async (profileId: string, postId: string) => {
  const response = await axiosWithCredentials
    .delete(`${PROFILES_API}/${profileId}/likes/${postId}`);
  return response.data;
}

export const findPublicPosts = async () => {
  const response = await axiosWithCredentials.get(`${POSTS_API}/public`);
  return response.data;
}
// We very likely need a function to fetch posts by partial description/title