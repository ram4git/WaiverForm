import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <title>TAP Waiver</title>
        <meta name="Description" content="student waiver" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
