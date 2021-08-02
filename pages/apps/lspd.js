import Head from 'next/head'
import getConfig from 'next/config'

const Lspd = () => {
  const { publicRuntimeConfig } = getConfig()
    return (
        <div>
      <Head>
      <title>LSPD | {`${publicRuntimeConfig.serverName}`}</title>
        <meta name="description" content="Apply for lspd on our awesome website by clicking on me!" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
<div className="m-0 h-half z-40 overflow-hidden">
<iframe className="absolute h-full left-0 right-0 bottom-0 top-0" id="typeform-full" width="100%" height="100%" frameBorder="0" allow="camera; microphone; autoplay; encrypted-media;" src={`${publicRuntimeConfig.lspdApp}?typeform-medium=embed-snippet`}></iframe>  
</div>
       </div>
    );
}
 
export default Lspd;