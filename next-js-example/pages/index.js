import Head from 'next/head'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic'

const DivaWebPlanner = dynamic(
  () => import('../components/DivaWebplanner'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example Diva Webplanner</title>
        <meta name="description" content="An example next.js integration for the Diva Webplanner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <DivaWebPlanner />
      </main>
    </div>
  )
}
