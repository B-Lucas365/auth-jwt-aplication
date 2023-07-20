import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["nextauth.token"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  
  (error) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === "token.expired") {
        cookies = parseCookies();

        const { "nextauth.refreshToken": refreshToken } = cookies;

        api
          .post("/refresh", {
            refreshToken
          }).then((response) => {
            const { token } = response.data;

            setCookie(undefined, "nextauth.token", token, {
              maxAge: 60 * 60 * 24,
              path: "/",
            });

            setCookie(undefined, "nextauth.refreshToken", response.data.refreshToken, {
              maxAge: 60 * 60 * 24,
              path: "/",
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`

          });
      } else {
        //deslogar o usuário
      }
    }
  }
);
