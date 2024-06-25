import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
export const PROFILES_API = `${REMOTE_SERVER}/api/profiles`;

// Session Management
export const profile = async () => {
    const response = await axiosWithCredentials.post(`${PROFILES_API}/profile`);
    return response.data;
  };
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${PROFILES_API}/signin`, credentials);
  return response.data;
};
export const signup = async (profile: any) => {
  console.log(profile);
  const response = await axiosWithCredentials.post(`${PROFILES_API}/signup`, profile);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${PROFILES_API}/signout`);
  return response.data;
};
export const anonymous = async () => {
  const response = await axiosWithCredentials.post(`${PROFILES_API}/anonymous`);
  return response.data;
};

// Profile Retrieves
export const findUserProfileById = async (id: string | undefined) => {
    const response = await axiosWithCredentials.get(`${PROFILES_API}/${id}`);
    return response.data;
};

export const findProfilesByPartialName = async (partialName: string) => {
    const response = await axios.get(`${PROFILES_API}?partialName=${partialName}`);
    return response.data;
};

export const findProfilesNotInCircle = async (notInCircleId: string) => {
    const response = await axios.get(`${PROFILES_API}?notInCircleId=${notInCircleId}`);
    return response.data;
};

export const findProfilesInCircle = async (inCircleId: string) => {
    const response = await axios.get(`${PROFILES_API}?inCircleId=${inCircleId}`);
    return response.data;
};

export const findAllProfiles = async () => {
    const response = await axios.get(`${PROFILES_API}`);
    return response.data;
};

export const findProfileById = async (id: string) => {
    const response = await axios.get(`${PROFILES_API}/${id}`);
    return response.data;
};

export const findManyProfilesById = async (listIds: any) => {
    const response =
        await axios.get(`${PROFILES_API}`, {params: {ids: listIds}});
    return response.data;
};

export const findProfilesByRole = async (role: string) => {
    const response = await
        axios.get(`${PROFILES_API}?role=${role}`);
    return response.data;
};

export const findProfilesByUsername = async (name: string) => {
    const response = await axios.get(`${PROFILES_API}?name=${name}`);
    return response.data;
};

// Profile C_UD
export const createProfile = async (profile: any) => {
    const response = await axios.post(`${PROFILES_API}`, profile);
    return response.data;
};

export const updateProfile = async (profile: any) => {
    const response = await axios.put(`${PROFILES_API}/${profile._id}`, profile);
    return response.data;
};

export const deleteProfile = async (profileId: string) => {
    const response = await axios.delete(`${PROFILES_API}/${profileId}`);
    return response.data;
};
