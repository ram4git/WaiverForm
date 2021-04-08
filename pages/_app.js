import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  return (
    <Layout className="bg-red-900 no-scrollbar mx-auto">
      <Head>
        <title>TAP Waiver</title>
        <meta name="Description" content="student waiver" />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
