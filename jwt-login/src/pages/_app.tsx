import type { AppProps } from "next/app";
import { GlobalStyled } from "../styles/global";
import { AuthProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyled />
    </AuthProvider>
  );
}
