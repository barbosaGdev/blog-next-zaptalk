import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Zaptalk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Aqui será feito o Login</h1>
    </div>
  )
}
