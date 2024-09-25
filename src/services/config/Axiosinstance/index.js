import axios from 'axios';

// export const BASE_URL = 'http://192.168.100.111:8080/'; //Fuz
// export const BASE_URL = 'http://172.28.64.1:8080/';                                //Ale
export const BASE_URL = 'https://cuppa-backend-9a54793717b3.herokuapp.com/';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // console.log('Response data:', error.response.data);
      // console.log('Response status:', error.response.status);
      // console.log('Response headers:', error.response.headers);
      return error.response;
    } else if (error.request) {
      // console.log('Request:', error.request);
    } else {
      // console.log('Error:', error.message);
    }
    // console.log('Config:', error.config);
    return Promise.reject(error);
  },
);
