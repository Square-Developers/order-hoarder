// @ts-nocheck
import { createStyles, Title, Text, Loader } from '@mantine/core'
const useStyles = createStyles(() => (
    {
        paper: {
            width: '20rem',
            borderRight: '1px solid #DEE2E6',
            marginLeft: 24,
            '&:first-of-type': {
                marginLeft: 0
            },
            '&:last-of-type': {
                borderRight: 'none',
            }

        },
        subtitle: {
            opacity: .75,
            fontWeight: 700
        },
        loadingDiv: {
            display: 'flex',
            justifyContent: 'center'
        }
    }))

const Metric = ({ title, subtitle, loading }) => {
    const { classes } = useStyles()
    return <div className={classes.paper}>
        {loading ?
            <div className={classes.loadingDiv}>
                <Loader />
            </div> :

            <>
                <Title
                    color='black'
                >
                    {title}
                </Title>
                <Text
                    color='black'
                    className={classes.subtitle}
                >
                    {subtitle}
                </Text>
            </>
        }
    </div>

}

export default Metric 