import { AppShell } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const LayoutExternal = ({ children }: Props) => {
    return <NotificationsProvider position='bottom-center' limit={2}>
        <AppShell>
            {children}
        </AppShell>
    </NotificationsProvider>
}

export default LayoutExternal