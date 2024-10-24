import { AppShell } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { NavbarNested } from '../../Navbar/NavbarNested'
import { User } from '@supabase/supabase-js'

type Props = {
    user: User
    children?: JSX.Element | JSX.Element[]
}

const LayoutInternal = ({ user, children }: Props) => {
    return <NotificationsProvider limit={2}>
        <AppShell
            aside={<NavbarNested user={user}/>}
        >
            {children}
        </AppShell>
    </NotificationsProvider>
}

export default LayoutInternal