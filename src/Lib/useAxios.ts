import { useNavigate  } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
// import { LOGOUT_URL } from 'Lib'
import useAuthToken from './useAuthToken';

export function useAxios(timeout: number = 500000000) {
  const history = useNavigate ();
  const apiUrl = process.env.REACT_APP_API;

  const { token, refresh } = useAuthToken();

  const config = {
    baseURL: `${apiUrl}/v1`,
    timeout: timeout,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };

  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (token !== 'no-token-present') {
        refresh();
      }
      return response;
    },
    (error: AxiosError) => {
      const status = error.response?.status;

      if (status) {
        if (status >= 400 && status <= 500) {
          if (status === 401) {
            history('/login');
          }
          if (status === 422) {
            return Promise.reject(error.response?.data);
          }
          return Promise.reject(error);
        }
      } else {
        return Promise.reject(error);
      }
    }
  );

  return axiosInstance;
}
