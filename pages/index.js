/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import getConfig from 'next/config'


export default function Home() {
    const { publicRuntimeConfig } = getConfig()
  return (
    <div>
      <Head>
        <title>HOME |  {`${publicRuntimeConfig.serverName}`}</title>
        <meta name="description" content="Welcome to our website! We hope you enjoy your visit and take advantage of the many perks we offer! These include, applications, descriptions of our departments and our discord invite!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div>
<header className="bg-gray-800">


        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">The Roleplay server you{"'"}ve been looking for.</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Get ready for the best experience of your life 😎</p>
                    <div className="grid gap-6 mt-8 sm:grid-cols-2">
                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>{publicRuntimeConfig.advantageN1}</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>{publicRuntimeConfig.advantageN2}</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>{publicRuntimeConfig.advantageN3}</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>{publicRuntimeConfig.advantageN4}</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>{publicRuntimeConfig.advantageN5}</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>{publicRuntimeConfig.advantageN6}</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <Image className="object-cover w-full h-full max-w-2xl rounded-md" src="https://hamy.fileglass.com/14i2h.webp" width="1050" height="640" alt="picture of the fivem server"></Image>
            </div>
        </div>
    </header>
    </div>
    </div>
  )
}
