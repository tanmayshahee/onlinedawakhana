// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.scss';
import Image from 'next/image';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <Head>
          <title>Online Dawakhana</title>
          <meta
            name='description'
            content='Homeopathic Clinic | Online Dawakhana'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Our Homeopathic Clinic</h1>

          <p className={styles.description}>
            We offer personalized homeopathic treatments to promote natural
            healing and well-being.
          </p>

          {/* Image section */}
          <div className={styles.imageContainer}>
            <Image
              src='https://assets.toothsi.in/homeopathy_5c204a7ee4.png'
              alt='Homeopathy vs Allopathy'
              className={styles.image}
              width={200}
              height={200}
            />
          </div>

          {/* Comparison section */}
          <section className={styles.comparison}>
            <h2>Comparison: Homeopathy vs. Allopathy</h2>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Advantages of Homeopathic Treatment</th>
                    <th>Advantages of Allopathic Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Natural healing process</td>
                    <td>Fast symptom relief</td>
                  </tr>
                  <tr>
                    <td>Individualized treatment plans</td>
                    <td>Effective for acute conditions</td>
                  </tr>
                  <tr>
                    <td>Minimal side effects</td>
                    <td>Advanced diagnostic tools</td>
                  </tr>
                  <tr>
                    <td>Treats underlying causes</td>
                    <td>Emergency care</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              While allopathy focuses on suppressing symptoms, homeopathy aims
              to stimulate the body's natural healing abilities.
            </p>
          </section>
        </main>
      </div>

      <WhatsAppIcon></WhatsAppIcon>

      <Footer></Footer>
    </>
  );
}
