import axios from "axios";

const api = axios.create({
  baseURL: "https://api-kenzie-med.herokuapp.com/",
  timeout: 5000, // 5 segundos
});

export default api;