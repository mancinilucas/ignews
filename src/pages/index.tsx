import { GetServerSideProps } from 'next'

import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
//permite importar o head do "_doc" e acrescentar conteúdo na tag em questão em qualquer local do código

import styles from './home.module.scss'

interface HomeProps{
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
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
        <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
    
    </>
  )
}
//O conteúdo do 'title' foi adicionado dentro do Head do component '_doc'

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1K0y2cCUa5iKyTrwofa7iHaQ')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return{
    props: {
      product,
    }
  }
}

//a função sempre deve receber esse nome "getServerSideProps"
//Essa função getServerSideProps é executada na camada Next (servidor node) e não no browser
//expand: ['product'] = é possível buscar várias infos dos produtos