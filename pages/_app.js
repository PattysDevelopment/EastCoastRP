import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>   
    </Head>
    <main className="mb-auto h-auto bg-gray-900">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </div>
  )
}

export default MyApp
