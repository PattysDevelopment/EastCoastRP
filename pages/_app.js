import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>   
    </Head>
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </div>
  )
}

export default MyApp
