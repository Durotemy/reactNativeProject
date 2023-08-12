import axios from "axios";

export const loginUser = (values) => {
  return axios.post("api/users/login", values);
};

export const RegisterUser = (values) => {
  return axios.post("/api/users", values);
};
