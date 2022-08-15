import axios from "axios";

const API_URL =
  "https://j0je57sf25.execute-api.us-west-1.amazonaws.com/dev/sppublic";
const axiosApi = axios.create({
  baseURL: API_URL,
});

export async function add(url: string, data: object, config = {}) {
  return await axiosApi
    .post(url, data, { ...config })
    .then((response) => response.data);
}
