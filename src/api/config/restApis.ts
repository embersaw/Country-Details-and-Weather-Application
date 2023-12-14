import { AxiosRequestConfig } from 'axios';
import { httpClient } from './httpClient';

export const get = (config: AxiosRequestConfig) =>
  httpClient({ ...config, method: 'GET' });
