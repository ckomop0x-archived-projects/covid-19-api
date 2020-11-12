import Head from 'next/head';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';



const Swagger: any = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

const HomePage: React.FC = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here you can find COVID-19 REST and GraphQL APIs.</p>
        <p>
          Graphql{' '}
          <Link href="/api/graphql">
            <a>api</a>
          </Link>
          ,{' '}
          <Link href="/api/graphiql">
            <a>playground</a>
          </Link>
          <br />
          REST{' '}
          <Link href="/api/countries/netherlands">
            <a>Dutch statistics</a>
          </Link>
        </p>
      </section>
      <section>
        <Swagger url="openapi/openapi_1_1_1.yaml" />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default HomePage;
