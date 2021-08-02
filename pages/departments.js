import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import getConfig from 'next/config'

export default function Home() {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
  return (
    <div>
      <Head>
      <title>Departments | {`${publicRuntimeConfig.serverName}`}</title>
        <meta name="description" content="On this page you can learn more about each department" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>
    <section className="text-blueGray-700">
            <div className="container items-center px-5 py-8 mx-auto lg:px-16">
              <div className="flex flex-wrap mb-12 text-left">
                <div className="w-full p-6 mx-auto lg:w-1/3">
                  <div className="p-4 lg:p-8 rounded-xl bg-blueGray-50">
                    <Image className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://hamy.fileglass.com/16hej.webp" width="720" height="400" alt="a image of the los santos police department standing shoulder to shoulder"/>
                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white title-font"> Los Santos Police Department </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-100 "> The Police Department’s goal is to protect and maintain Los Santos high quality of life and prevent crime. The department is responsible for enhancing overall community safety and safeguarding the rights of individuals. The Police Department is organized into specialized units and teams, staffed by both full-time, and volunteer officers to manage calls for service and facilitate problem-solving throughout the community.  </p>
                    <Link href="apps/lspd" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-black " title="apply now"> Apply now » </Link>
                  </div>
                </div>
                <div className="w-full p-6 mx-auto lg:w-1/3">
                  <div className="p-4 lg:p-8 rounded-xl bg-blueGray-50">
                    <Image className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://hamy.fileglass.com/370ff.webp" width="720" height="400" alt="a image of the blaine county sheriffs office fleet"/>
                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white title-font"> Blaine County Sherrif{"'"}s Office </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-100 ">The Blaine County Sheriff’s Office is committed to protect the lives, property and rights of all people, to maintain order and to enforce the law. The Blaine County Sheriff’s Office will strive to accomplish this mission by setting goals and objectives and practicing the core values of the Office. It is our mission to improve and maintain the quality of life we enjoy and to ensure that our county is a safe place to live, work and visit.</p>
                    <Link href="apps/bcso" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-black " title="apply now"> Apply now » </Link>
                  </div>
                </div>
                <div className="w-full p-6 mx-auto lg:w-1/3">
                  <div className="p-4 lg:p-8 rounded-xl bg-blueGray-50">
                    <Image className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://hamy.fileglass.com/h240a.webp" width="720" height="400" alt="a image of the san andreas fire and rescue fleet"/>
                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-white title-font"> San Andreas Fire & Rescue </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-100 ">We provide emergency medical care and firefighting services to the citizens of Los Santos and Blaine County. We have ground and air transport units offering Basic and Advanced level services. We have firefighting apparatuses with up-to-date equipment including high angle rescue and entrapment extrication. We also respond to a variety of calls including fires, motor vehicle accidents, technical rescues, and medical calls.  </p>
                    <Link href="apps/safr" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-black " title="apply now"> Apply now » </Link>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
    </div>

    </div>
  )
}
