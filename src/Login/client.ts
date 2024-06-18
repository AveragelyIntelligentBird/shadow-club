import axios from "axios";
// Use credentials ???
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

export const signin = async (credentials: any) => {
    const response = await axios.post(`${REMOTE_SERVER}/api/signin`, credentials);
    return response.data;
  };
  export const profile = async () => {
    const response = await axios.post(`${REMOTE_SERVER}/api/profile`);
    return response.data;
  };
  export const signup = async (profile: any) => {
    console.log(profile);
    // console.log('${REMOTE_SERVER}/api/signup');
    const response = await axios.post(`${REMOTE_SERVER}/api/signup`, profile);
    return response.data;
  };
  export const signout = async () => {
    const response = await axios.post(`${REMOTE_SERVER}/api/signout`);
    return response.data;
  };
  export const anonymous = async () => {
    console.log(`${REMOTE_SERVER}/api/anonymous`);
    const response = await axios.post(`${REMOTE_SERVER}/api/anonymous`);
    // set the current user
    return response.data;
  };