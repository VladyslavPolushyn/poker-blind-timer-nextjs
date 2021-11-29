import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../src/components/Layout/Layout';
import store from '../src/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
