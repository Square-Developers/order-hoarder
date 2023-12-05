import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
} from '@mantine/core'
import { ChevronRight } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
    user: {
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
    },
}))

interface UserButtonProps extends UnstyledButtonProps {
    image: string;
    name: string;
    username: string;
    icon?: React.ReactNode;
}

export function UserButton({ image, name, username, icon, ...others }: UserButtonProps) {
    const { classes } = useStyles()

    return (
        <UnstyledButton className={classes.user} {...others}>
            <Group>
                <Avatar src={image} radius='xl' />

                <div style={{ flex: 1 }}>
                    <Text size='sm' weight={500}>
                        {name}
                    </Text>

                    <Text color='dimmed' size='xs'>
                        {username}
                    </Text>
                </div>

                {icon || <ChevronRight size={14} stroke={'1.5'} />}
            </Group>
        </UnstyledButton>
    )
}