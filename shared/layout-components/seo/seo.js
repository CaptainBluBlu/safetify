import React from 'react'
import Head from "next/head"
import favicon from "../../../public/assets/images/brand/safetify-white.ico"

const Seo = ({title}) => {
  let i = `Sash - ${title}`
  return (
    <Head>
        <title>{i}</title>
        <link rel="icon" href={favicon.src} />
        <meta name="description" content="Sash - Nextjs Admin &amp; Dashboard Template"/>
        <meta name="author" content="Spruko Technologies Private Limited"/>
    </Head>
  )
}

export default Seo