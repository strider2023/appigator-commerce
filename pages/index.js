import Head from 'next/head';
import Header from '../components/home/Header';
import WebsiteHeader from '../components/home/WebsiteHeader';
import HowItWorks from '../components/home/HowItWorks';
import Footer from '../components/home/Footer';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Surplusss</title>
        <meta name="description" content="Surplusss home page" />
      </Head>
      <Header />
      <WebsiteHeader />
      <HowItWorks />
      <Footer />
    </>
  )
}
