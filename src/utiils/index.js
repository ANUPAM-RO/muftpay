import axios from "axios";

export const fetchApiData = async (url) => {
  let token = sessionStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createApiData = async (url, data) => {
  let token = sessionStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.post(url, data, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const updateApiData = async (url, data) => {
  let token = sessionStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.put(url, data, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteApiData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
