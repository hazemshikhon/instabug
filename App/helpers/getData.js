import axios from "axios";

export default function getData(url) {
  return axios(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "Application/json",
    },
    data: undefined,
  });
}
