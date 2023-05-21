import '@/styles/globals.css'
import '@/styles/main.css'
import '@/styles/bootstrap.min.css';
import '@/styles/navigation.css';
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
