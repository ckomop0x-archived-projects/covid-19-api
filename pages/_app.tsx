import { AppProps } from 'next/app';
import 'swagger-ui-react/swagger-ui.css';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
