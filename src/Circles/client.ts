import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const CIRCLES_API = `${REMOTE_SERVER}/api/circles`;

export const fetchAllCircles = async () => {
  console.log("fetchAllCircles")
  const { data } = await axiosWithCredentials.get(CIRCLES_API);
  return data;
};

export const fetchAllPublicCircles = async () => {
    const { data } = await axiosWithCredentials.get(`${CIRCLES_API}/public`);
    return data;
}

export const findCircleForId = async (circleId: string) => {
    const response = await axiosWithCredentials
      .get(`${CIRCLES_API}/${circleId}`);
    return response.data;
};

// Maybe this will be useful for the profile page
export const findCirclesForMember = async (userId: string) => {
    const response = await axiosWithCredentials
      .get(`${CIRCLES_API}/member/${userId}`);
    return response.data;
}

// Maybe this will be useful for the profile page
export const findCirclesForModerator = async (moderatorId: string) => {
    const response = await axiosWithCredentials
      .get(`${CIRCLES_API}/moderator/${moderatorId}`);
    return response.data;
}

// Needed for finding who is signed in
export const profile = async () => {
  const response = await axios.post(`${REMOTE_SERVER}/api/profile`);
  console.log("profile", response.data)
  return response.data;
};

// get the posts for a circle
export const findPostsForCircle = async (circleId: string) => {
    const response = await axiosWithCredentials
      .get(`${CIRCLES_API}/${circleId}/posts`);
    return response.data;
};

export const findModeratorsForCircle = async (circleId: string) => {
    const response = await axiosWithCredentials
      .get(`${CIRCLES_API}/${circleId}/moderators`);
    return response.data;
}

export const joinCircle = async (circleId: string, userId: string) => {
    const response = await axiosWithCredentials
      .put(`${CIRCLES_API}/${circleId}/join/${userId}`);
    // console.log("joinCircle", response.data)
    // return response.data;
}

export const leaveCircle = async (circleId: string, userId: string) => {
    const response = await axiosWithCredentials
      .put(`${CIRCLES_API}/${circleId}/leave/${userId}`);
    // console.log("leaveCircle", response.data)
    return response.data;
}

// export const createCircle = async (circle: any) => {
//     const response = await axiosWithCredentials.post(CIRCLES_API, circle);
//     return response.data;
// };
// export const deleteCircle = async (id: string) => {
//     const response = await axiosWithCredentials.delete(`${CIRCLES_API}/${id}`);
//     return response.data;
// };
// export const updateCircle = async (circle: any) => {
//     const response = await axiosWithCredentials.put(`${CIRCLES_API}/${circle._id}`, circle);
//     return response.data;
// };  

// We very likely need a function to fetch circles by partial title
// See profiles for example