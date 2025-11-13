import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://evangadi-api-question-answer.onrender.com/api",
  // baseURL: "https://evangadi-api.digitalyibeltal.com/api",
  headers: {
    // "Content-Type": "application/json",
  },
});

export default axiosInstance;
