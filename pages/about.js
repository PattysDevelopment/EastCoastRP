/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import getConfig from 'next/config'

export default function About() {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
  return (
    <div>
      <Head>
      <title>About us | {`${publicRuntimeConfig.serverName}`}</title>
        <meta name="description" content="On this page you can learn more about us and our departments aswell as apply for them" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image alt="A banner of the server logo above the about me description" className="object-cover object-center h-full w-full" width="1200" height="400" src={`${publicRuntimeConfig.bannerLink}`}></Image>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-100 text-lg">{`${publicRuntimeConfig.ownerName}`}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base text-gray-100">{`${publicRuntimeConfig.aboutText}`}</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l text-gray-100 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">{`${publicRuntimeConfig.serverDescription}`}</p>
          <Link href="applications" passHref>
          <div className="text-indigo-500 cursor-pointer inline-flex items-center">
          Apply now
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>

    </div>
  )
}
