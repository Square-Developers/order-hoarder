import { Navbar, Group, ScrollArea, createStyles } from '@mantine/core'
import { UserButton } from '../UserButton'
import { LinksGroup } from '../NavbarLinksGroup'
import { Logo } from './Logo'
import { useRouter } from 'next/router'
import { NavBarItems } from '../../../types/components'
import { User } from '@supabase/supabase-js'

const navbarItems: NavBarItems[] = [
    {
        label: 'Dashboard',
        link: '/dashboard'
    },
    {
        label: 'Settings',
        link: '/settings'
    },
    {
        label: 'Logout',
        link: '/api/users/logout'
    },
]

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },
    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },
    appTitle: {
        marginBottom: 0,
        fontSize: 18,
        fontWeight: 700
    }
}))


export function NavbarNested({ user }: { user: User }) {
    const { classes } = useStyles()
    const router = useRouter()

    const links = navbarItems.map((item) => <LinksGroup key={item.label} label={item.label} link={item.link} active={router.pathname} />)
    return (
        <Navbar width={{ sm: 300 }} p='md' className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position='left' align='center'>
                    <Logo />
                    <p className={classes.appTitle}>Order Hoarder</p>
                </Group>
            </Navbar.Section>
            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                {user?.user_metadata?.first_name &&
                    <UserButton
                        image={`https://www.gravatar.com/avatar/${user?.user_metadata?.avatar || ''}?d=https%3A%2F%2Fimages.ctfassets.net%2F1wryd5vd9xez%2F5JA4qHKaSk47mqhd0M8s9p%2F99b9a16e0012ada4e2ecf31a4b4fb1fe%2Fsquare_logo.jpeg`}
                        name={`${user?.user_metadata?.first_name || ''} ${user?.user_metadata?.last_name || ''}`}
                        username={user?.email || ''}
                    />
                }
            </Navbar.Section>
        </Navbar>
    )
}

