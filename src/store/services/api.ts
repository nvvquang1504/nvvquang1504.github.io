import axios from "axios";
import { REACT_APP_STRIPE_APP_KEY, REACT_APP_DEV_URL } from "../../env.ts";

const params: any = {
  headers: {
    Authorization: "bearer " + REACT_APP_STRIPE_APP_KEY,
  },
};
export const fetchDataFromApi = async (url: string) => {
  try {
    const {data} = await axios.get(REACT_APP_DEV_URL + url, params);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
