import { createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
    banner: {
        border: '1px solid rgba(241, 80, 118, 0.20)',
        background: 'rgba(241, 80, 118, 0.10)',
        padding: '16px 16px',
        borderRadius: 6,
        gap: 12
    },
}))
const TipBanner = ({ children }:{children: JSX.Element}) => {
    const { classes } = useStyles()
    return <div className={classes.banner}>
        {children}
    </div>
}

export default TipBanner