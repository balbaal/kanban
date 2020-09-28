import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_API}/api/v1`,
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err) {
      console.log("err :>> ", err);
      return Promise.reject(err);
    }
  }
);

export default instance;
