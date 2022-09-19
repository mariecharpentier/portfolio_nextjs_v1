import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>Marie C. Front-End Developer</title>
        <meta name="description" content="Marie Charpentier Front-End Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Main />

      <About />

      <Work />

      <Contact />

      <Footer />

    </>
  )
}
