import { AppProps } from 'next/app'
import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <title>Freeflow Taekwondo</title>
            <meta name="description" content="A safe, family-friendly place for all ages to learn the Korean art of Self Defence." />
            <meta httpEquiv="Content-Language" content="en" />
        </Head>
        {/* <Navbar /> */}
        <Component
            {...pageProps}
        />
    </>
}
