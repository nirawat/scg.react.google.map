import { httpClient } from "../httpClient";
import { format } from 'react-string-format';

export const Request = async (_Key1, _Key2, _Key3) => {
  let resp = await httpClient.get(
    format("GoogleMap/GetRestaurants/{0}/{1}/{2}", _Key1, _Key2, _Key3)
  );
  return resp;
};
