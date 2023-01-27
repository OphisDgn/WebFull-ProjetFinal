import "../styles/globals.css";
import "my-lib-ui/dist/index.css";
import SSRProvider from 'react-bootstrap/SSRProvider'

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>);
}

export default MyApp;
