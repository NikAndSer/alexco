import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '../components/header.js';
import MainSection from '../components/mainsection.js';
import Footer from '../components/footer.js';
import Layout from '../components/layout.js';

function Home() {
  const { t } = useTranslation('common')


  console.log('Translation for "welcome":', t('welcome')); // Add this line for debugging


  return (
    <div>
      <Head>
        <title>ALEX Group</title>
      </Head>

      <Layout>
        <Header />
        <MainSection />
      </Layout>

    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Home;
