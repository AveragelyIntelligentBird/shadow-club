import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const POSTS_API = `${REMOTE_SERVER}/api/posts`;
const CIRCLES_API = `${REMOTE_SERVER}/api/circles`;
const PROFILES_API = `${REMOTE_SERVER}/api/profiles`;

export const deletePost = async (postId: string) => {
  const response = await axiosWithCredentials
    .delete(`${POSTS_API}/${postId}`);
  return response.data;
};

export const findPostsForCircle = async (circleId: string) => {
  const response = await axiosWithCredentials
    .get(`${CIRCLES_API}/${circleId}/posts`);
  return response.data;
};

export const findPostsForUser = async (userId: string) => {
  const response = await axiosWithCredentials
    .get(`${PROFILES_API}/${userId}/posts`);
  return response.data;
};

export const findLikedPostsForUser = async (userId: string) => {
  const response = await axiosWithCredentials
    .get(`${PROFILES_API}/${userId}/liked`);
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

// We very likely need a function to fetch posts by partial description/title