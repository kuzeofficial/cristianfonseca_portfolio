import '../styles/index.css';
import Head from 'next/head';
import "../styles/prism.css";
import {DefaultSeo,NextSeo } from 'next-seo';
import {useEffect} from 'react'
import { useRouter } from 'next/router';
import { Progress } from './../components/Progress/Progress';
import {useProgressStore} from '../lib/store'

type MyAppProps = {
  Component: any;
  pageProps: Object;
}
export default function MyApp({ Component, pageProps } : MyAppProps) {
  const setIsAnimating = useProgressStore((state:any) => state.setIsAnimating)
  
  const isAnimating = useProgressStore((state:any) => state.isAnimating)
  const router = useRouter()
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  },[router])
  return (
    <>
      
      <Head>
        <title>Cristian Fonseca - Web Developer</title>
        <meta
          name="description"
          content="A young web developer🤓 passionate about technology💻 and communication🛰️ from Brasil🏝️"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.cristianfonseca.com',
          site_name: 'Cristian Fonseca | Web Developer',
        }}
        twitter={{
          handle: '@cristian_devk',
          site: '@cristian_devk',
        }}
      />
       <NextSeo
        openGraph={{
          title: 'Cristian Fonseca',
          description: "A young web developer🤓 passionate about technology💻 and communication🛰️ from Brasil🏝️",
          url: 'Web Developer',
          type: 'profile',
          images: [
            {
              url: "https://cristianfonseca.com/images/logo2.png",
              width: 600,
              height: 600,
            },
          ],
        }}
      />
      <Progress isAnimating={isAnimating}/>
      <Component {...pageProps} />
    </>
  );
}

