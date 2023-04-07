import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/common_components/header'
import Banner from '@/components/home/banner'
import About from '@/components/home/about'



const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
    </div>
  )
}
