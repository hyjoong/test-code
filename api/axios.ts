import axios from "axios";

// 실제 프로젝트에선 .env파일에 BASE_URL경로 작성 후
// const BASE_URL = process.env.BASE_URL
const BASE_URL = `https://api.github.com`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
