import axios from "axios";
// Use credentials ???
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const PROFILES_API = `${REMOTE_SERVER}/api/profiles`;

  export const findAllProfiles = async () => {
    const response = await axios.get(`${PROFILES_API}`);
    return response.data;
  };
  
  export const findProfilesByRole = async (role: string) => {
    const response = await
      axios.get(`${PROFILES_API}?role=${role}`);
    return response.data;
  };

  // extend for posts and circles?
  export const findProfilesByPartialName = async (name: string) => {
    const response = await axios.get(`${PROFILES_API}?name=${name}`);
    return response.data;
  };

  export const findProfileById = async (id: string) => {
    const response = await axios.get(`${PROFILES_API}/${id}`);
    return response.data;
  };

  export const deleteProfile = async (profileId: string) => {
    const response = await axios.delete( `${PROFILES_API}/${profileId}` );
    return response.data;
  };

  export const updateProfile = async (profile: any) => {
    const response = await axios.put(`${PROFILES_API}/${profile._id}`, profile);
    return response.data;
  };

  export const createProfile = async (profile: any) => {
    const response = await axios.post(`${PROFILES_API}`, profile);
    return response.data;
  };
  