import axios from "axios";

const newRequest = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  withCredentials: true,
});

export default newRequest;