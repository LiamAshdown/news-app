import axios from "axios";
import { camelizeKeys } from "humps";
import Toast from "react-native-root-toast";

const client = axios.create({
  baseURL: "http://localhost:50570/api",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  return {
    ...config,
  };
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 422) {
      if (error.response.data) {
        error.response.data = camelizeKeys(error.response.data);
      }
    } else if (error.response.status === 401) {
      console.log("401 error", error.response.data);
      // dispatch(logout());
    } else {
      Toast.show("Woops! Something went wrong.", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
      });
    }

    return Promise.reject(error);
  },
);

export default client;
