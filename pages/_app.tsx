import '@/styles/globals.css'
import '@/styles/main.css'
import type { AppProps } from 'next/app'
import '@/styles/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
