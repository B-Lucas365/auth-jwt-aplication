import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

interface UserProps {
  email: string;
  permissions: string[];
  roles: string[];
}

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface AuthContextProps {
  signIn(cretentials: SignInCredentialsProps): Promise<void>;
  isAuthenticated: boolean;
  user: UserProps | undefined;
}

interface childrenProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      api.get('/me').then((response) => {
        const { email, permissions, roles } = response.data;

        setUser({ email, permissions, roles });
      });
    }
  }, []);

  const signIn = async ({ email, password }: SignInCredentialsProps) => {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = response.data;

      setCookie(undefined, "nextauth.token", token, {
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      setCookie(undefined, "nextauth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      setUser({
        email,
        permissions,
        roles,
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`
      
      Router.push("/home");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
