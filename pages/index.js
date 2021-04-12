import 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        vitae dolores nisi ab. Consequuntur accusantium dignissimos velit
        tempore, eius porro odio veritatis minima voluptates sint adipisci ipsam
        aperiam ratione animi.
      </Layout>
    </div>
  );
}
