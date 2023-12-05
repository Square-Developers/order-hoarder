import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

type Props = {
    title?: string
    link?: string
    className?: string
    children?: JSX.Element | JSX.Element[]
}

export default function BaseLayout({ title, className = 'px-0', children }: Props) {
    return <div className={className}>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                /** Put your mantine theme override here */
                colorScheme: 'light',
                primaryColor: 'pink',
                colors: {
                    pink: [
                        '#f2f2f2',
                        '#f2f2f2',
                        '#8D0C2B',
                        '#BC1039',
                        '#EB1447',
                        '#EE3F68',
                        '#F15076',
                        '#F693AB',
                        '#F9BDCC',
                        '#FDE8ED',
                    ]
                },
                fontFamily: 'Inter',
            }}
        >
            {children}
        </MantineProvider>
    </div>
}