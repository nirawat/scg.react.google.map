import axios from "axios";
import join from "url-join";
import Configs from "../configs";

axios.create();

axios.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json;charset=utf-8",
      // Authorization: `Bearer ${jwtToken.replace('"', "").replace('"', "")}`,
    };
    config.timeout = 10000;
    config.url = join(Configs.config.web_config.core_base_url, config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (resp) => {
    return resp.data.resp;
  },
  (error) => {
    //Do something .....
    return Promise.reject(error);
  }
);

export const httpClient = axios;
