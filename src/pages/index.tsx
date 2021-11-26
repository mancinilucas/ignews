import Head from 'next/head';
//permite importar o head do "_doc" e acrescentar conteúdo na tag em questão em qualquer local do código

export default function Home() {
  return (
    <>
    <Head>
      <title>Início | ig.news</title>
    </Head>
    <h1>
    Hello World
    </h1>
    </>
  )
}
//O conteúdo do 'title' foi adicionado dentro do Head do component '_doc'