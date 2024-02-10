import axios from "axios";
export const baseUrl = "http://localhost:5000";

export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(url, body);

    return { data: response, error: false };
  } catch (err) {
    return { err, error: true };
  }
};

export const getRequest = async (url) => {
  const response = await axios.get(url);

  return response;
};
