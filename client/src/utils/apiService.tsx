/* 2023-07-07 axios 요청 함수 - 김다함 */
import axios, { RawAxiosRequestConfig, AxiosHeaders } from 'axios'
import { Cookies } from 'react-cookie';
// import { CustomAxiosInterface } from '@/types/axiosInterface'
// import { API_BASE_URL } from "@/app-config.js";
export const API_BASE_URL = ''
const ACCESS_TOKEN = "ACCESS_TOKEN";
// const IS_ADMIN = "IS_ADMIN";
// const USER_NAME = "USER_NAME";

axios.defaults.baseURL = API_BASE_URL;

export async function call(api: string, method: string, data?: any) {
  const headers = new AxiosHeaders({
    "Content-Type": "application/json",
    "withCredentials": true,
  });

  // const accessToken = localStorage.getItem(ACCESS_TOKEN);
  // if (accessToken) {
  //   headers.append("Authorization", "Bearer " + accessToken);
  // }
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  if(accessToken ){ console.log(accessToken)}

  const options: RawAxiosRequestConfig = {
    headers: headers,
    method: method,
    url: API_BASE_URL + api,
  };

  if (data)
    options.data = JSON.stringify(data);

  // 에러처리고려
  return await axios.request(options)
    .then((res) => res.data)
    .catch(error => {
      console.log(error);
    })
}