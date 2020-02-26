import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer APIKey"
  }
});

const get = async (url, params = {}) =>
  api.get(url, {
    params
  });

export default {
  get
};
