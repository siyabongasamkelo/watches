import axios from "axios";
export const baseUrl = "http://localhost:5000";

export const postRequest = async (url, body) => {
  const response = await axios.post(url, body);

  console.log(response);
  const data = await response.json();

  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }

    return { error: true, message };
  }

  return data;
};

export const getRequest = async (url) => {
  const response = await axios.get(url);
  const data = await response.json();
  if (!response.ok) {
    let message = data.message;

    if (data?.message) {
      message = data.message;
    }
    return { error: true, message };
  }
  return data;
};
