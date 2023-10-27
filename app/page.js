import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '@/components/HomePage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>هنرستان صیاد شیرازی</title>
        {/* <meta name="google" content="nositelinkssearchbox" key="sitelinks" /> */}
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="robots" content="index,follow" />
      </Head>
      <HomePage/>
      {/* <about/> */}
      {/* <workers/> */}
    </>
  )
}
