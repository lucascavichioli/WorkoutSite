import axios from "axios";

const Api = axios.create({
  baseURL: "https://localhost:7255",
});

export default Api;