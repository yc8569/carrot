import axios from "axios";

export const instance = axios.create({
  
  baseURL: "http://3.38.149.21",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
//   headers: { "Content-Type": "multipart/form-data" },
});
// charset=utf-8
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    
    if (token) {
      config.headers["Authorization"] = `${token}`
    //   config.headers["Accept"]= "multipart/form-data"
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export const login = async (users) => await instance.post("/users/login", users);
export const register = async (users) => await instance.post("/api/user/signup", users);
export const editProfile = async (userImg, nickname, userLocation) => await instance.put("/api/user/edit", {userImg, nickname, userLocation});
export const loadProfile = async () => await instance.get("/api/user/me");


