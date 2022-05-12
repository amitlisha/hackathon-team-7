import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:9000",
  timeout: 100000,
  withCredentials: true,
});
