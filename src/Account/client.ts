import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
export const PROFILES_API = `${REMOTE_SERVER}/api/profiles`;

export const findUserProfileById = async (id: string | undefined) => {
    const response = await axiosWithCredentials.get(`${PROFILES_API}/${id}`);
    return response.data;
};
export const profile = async () => {
    console.log("Client fetching profile")
    const response = await axiosWithCredentials.post(`${PROFILES_API}/profile`);
    console.log("profile", response.data)
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
  console.log(`Anon`);
  const response = await axiosWithCredentials.post(`${PROFILES_API}/anonymous`);
  // set the current user
  return response.data;
};