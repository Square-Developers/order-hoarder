import { AppShell } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { NavbarNested } from '../../Navbar/NavbarNested'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const LayoutInternal = ({ children }: Props) => {
    return <NotificationsProvider limit={2}>
        <AppShell
            aside={<NavbarNested />}
        >
            {children}
        </AppShell>
    </NotificationsProvider>
}

export default LayoutInternal