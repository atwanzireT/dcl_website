import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/common_components/header'
import Footer from '@/components/common_components/footer'
import Banner from '@/components/home/banner'
import About from '@/components/home/about'
import Services from '@/components/home/services'
import Monitor from '@/components/home/monitor'
import Counter from '@/components/home/counter'
import WhyUs from '@/components/home/whyUs'
import Pricing from '@/components/home/pricing'
import Head from 'next/head'



const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Head>
        {/* <script type="text/javascript" src='/scripts/custom.js'></script>
        <script type="text/javascript" src='/scripts/bootstrap.min.js'></script>
        <script type="text/javascript" src='/scripts/jquery-3.6.0.min.js'></script>
        <script type="text/javascript" src='/scripts/jquery.counterup.min.js'></script>
        <script type="text/javascript" src='/scripts/jquery.magnific-popup.min.js'></script>
        <script type="text/javascript" src='/scripts/jquery.meanmenu.min.js'></script>
        <script type="text/javascript" src='/scripts/jquery.nice-select.min.js'></script>
        <script type="text/javascript" src='/scripts/jquery.waypoints.min.js'></script>
        <script type="text/javascript" src='/scripts/popper.min.js'></script>
        <script type="text/javascript" src='/scripts/progressbar.min.js'></script>
        <script type="text/javascript" src='/scripts/swiper-bundle.min.js'></script>
        <script type="text/javascript" src='/scripts/wow.min.js'></script> */}
      </Head>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Monitor/>
      <Counter/>
      <WhyUs/>
      {/* <Pricing/> */}
      <Footer/>
    </div>
  )
}
