import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>   
    </Head>
    <main className="mb-auto overflow-auto transition duration-300 ease-in-out bg-gray-100  dark:bg-gray-800">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </div>
  )
}

export default MyApp
