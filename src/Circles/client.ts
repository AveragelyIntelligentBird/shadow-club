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

export const createCircle = async (circle: any) => {
    const response = await axiosWithCredentials.post(CIRCLES_API, circle);
    return response.data;
};
export const deleteCircle = async (id: string) => {
    const response = await axiosWithCredentials.delete(`${CIRCLES_API}/${id}`);
    return response.data;
};
export const updateCircle = async (circle: any) => {
    const response = await axiosWithCredentials.put(`${CIRCLES_API}/${circle._id}`, circle);
    return response.data;
};  

// We very likely need a function to fetch circles by partial title
// See profiles for example