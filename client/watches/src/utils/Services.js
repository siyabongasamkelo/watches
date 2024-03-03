import axios from "axios";
export const baseUrl =
  process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT"
    ? "http://localhost:5000"
    : "https://watches-fks5.onrender.com";

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

export const currencyFormatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
});
