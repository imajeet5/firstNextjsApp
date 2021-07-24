import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
        pariatur? Voluptate inventore dolores, quae nobis eos impedit animi
        voluptatibus cupiditate velit laudantium neque quidem aperiam possimus
        vero temporibus consequuntur sint?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
        pariatur? Voluptate inventore dolores, quae nobis eos impedit animi
        voluptatibus cupiditate velit laudantium neque quidem aperiam possimus
        vero temporibus consequuntur sint?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>

    </>
  );
}
