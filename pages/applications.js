import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import getConfig from 'next/config'

export default function  Applications() {
  const { publicRuntimeConfig } = getConfig()
  return (
<div className="dark:bg-gray-900">
        <Head>
        <title>Apply @ {`${publicRuntimeConfig.serverName}`}</title>
        <meta name="description" content="On this page you can learn more about us and our departments aswell as apply for them" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div className=" relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-gray-800"
          >
            <circle
              fill="currentColor"
              fillOpacity="0.4"
              cx="44"
              cy="44"
              r="15.5"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.1"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="apps/lspd" passHref>  
          <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-3xl">
            <p className=" font-semibold text-gray-200">
              Apply for LSPD
            </p>
          </div>
          </Link>
          <Link href="apps/bcso" passHref>
          <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for BCSO
            </p>
          </div>
          </Link>
          <Link href="apps/safr" passHref>
          <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for SAFR
            </p>
          </div>
          </Link>
          <Link href="apps/sahp" passHref>
          <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for SAHP
            </p>
          </div>
          </Link>
          <Link href="apps/comms" passHref>
            <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for Dispatch
            </p>
          </div>
          </Link>
          <Link href="apps/staff" passHref>
            <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for Staff
            </p>
          </div>
          </Link>
          <Link href="apps/civ" passHref>
          <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for Civilian
            </p>
          </div>
          </Link>
          <Link href="apps/dev" passHref>
          <div className="cursor-pointer px-10 py-20 text-center transition duration-300 transform dark:bg-gray-800 bg-gray-500 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <p className="font-semibold text-gray-200">
            Apply for Developer
            </p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
