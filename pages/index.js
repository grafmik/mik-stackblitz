import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">MIK SITE</a>
        </h1>

        <p className={styles.description}>
          Comment ça va? <code className={styles.code}>Moi ça va</code>
        </p>

        <button type="button">Go go go</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mik and WebAssembly
        </a>
      </footer>
    </div>
  );
}
