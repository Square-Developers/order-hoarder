// @ts-nocheck
import { Group, Box, UnstyledButton, createStyles } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    control: {
        fontWeight: 500,
        display: 'block',
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        fontSize: theme.fontSizes.sm,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },

    link: {
        fontWeight: 700,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        fontSize: 18,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        width: '100%',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },
    linkActive: {
        '&, &:hover': {
            fontWeight: 800,
            color: theme.fn.variant({
                variant: 'light',
                color: theme.colors.pink[5]
            }).color,
            borderRight: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.pink[5]
                }`,
        },
    },

    chevron: {
        transition: 'transform 200ms ease',
    },
}))

interface LinksGroupProps {
    label: string;
    link: string
    active: string
}

export function LinksGroup({ label, link, active }: LinksGroupProps) {
    const { classes, cx } = useStyles()
    return (
        <>
            <Link href={link} key={label}>
                <UnstyledButton className={cx(classes.link, { [classes.linkActive]: `/${label.toLowerCase()}` === active })}                >
                    <Group position='apart' spacing={0}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box ml='md'
                            >{label}</Box>
                        </Box>
                    </Group>
                </UnstyledButton>
            </Link>
        </>
    )
}