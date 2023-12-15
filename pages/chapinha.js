import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Chapinha = (props) => {
  return (
    <>
      <header className="chapinha-container">
        <Head>
          <title>chapinha - Presentelive</title>
          <meta property="og:title" content="chapinha - Presentelive" />
        </Head>
        <div className="chapinha-container1">
          <div className="chapinha-container2">
            <Script
              html={`<!DOCTYPE html>
<html>
   <head>
      <title>Exemplo de redicionamento HTML</title>
      <meta http-equiv="refresh" content="1; url = https://shope.ee/601lrkx6Tw" />
   </head>
   <body>
      <p>você será redirecionado para a shopee.</p>
   </body>
</html>`}
            ></Script>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .chapinha-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .chapinha-container1 {
            width: 618px;
            height: 464px;
          }
          .chapinha-container2 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Chapinha
