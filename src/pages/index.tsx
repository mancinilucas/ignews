import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
//permite importar o head do "_doc" e acrescentar conteúdo na tag em questão em qualquer local do código

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br/>
        <span>for $9.90 month</span>
        </p>
        <SubscribeButton />
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
    
    </>
  )
}
//O conteúdo do 'title' foi adicionado dentro do Head do component '_doc'