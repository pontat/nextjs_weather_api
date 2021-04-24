import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const aaa = 1
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex justify-center items-center">Weather Application</div>
    </div>
  )
}
