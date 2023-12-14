import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const httpClient = async (config: AxiosRequestConfig) => {
  let response: AxiosResponse | null = null;
  try {
    response = await axios(config);
  } catch (error) {
    console.log(error);
  }

  return response?.data;
};
