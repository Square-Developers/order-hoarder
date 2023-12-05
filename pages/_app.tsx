import fetchJson from '../lib/fetchJson'
import { SWRConfig } from 'swr'
import { AppProps } from 'next/app'
import BaseLayout from '../components/Layouts/BaseLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </SWRConfig>
  )
}
