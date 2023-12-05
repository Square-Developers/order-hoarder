import { createStyles, Loader } from '@mantine/core'
import { useEffect } from 'react'
import { Logo } from '../Navbar/NavbarNested/Logo'
import useSWR from 'swr'
import { SCOPES } from '../../constants'

const useStyles = createStyles(() => ({
    wrapperDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    titleDiv: {
        display: 'flex',
        alignItems: 'center',
    },
    contentDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    appTitle: {
        marginLeft: '1rem',
        fontWeight: 700,
        fontSize: 16
    },
    h1: {
        fontWeight: 700,
        fontSize: 32,
    },
    subtitle: {
        fontWeight: 400,
        fontSize: 16,
        marginBottom: '1rem'
    },
}))


const OAuthLoadingScreen = ({ url }: { url: string }) => {
    const { data: {
        squareCodeChallenge,
        squareCodeVerifier,
        squareState,
        baseURl,
        appId } = {
            squareCodeChallenge: null,
            squareCodeVerifier: null,
            squareState: null,
            baseURl: null,
            appId: null
        }, isValidating } = useSWR(url)
    useEffect(() => {
        if (!isValidating) {
            document.cookie = `square-code-verifier=${squareCodeVerifier}`
            document.cookie =  `square-state=${squareState}`
            window.location.assign(`${baseURl}oauth2/authorize?client_id=${appId}&session=false&scope=${SCOPES.join('+')}&state=${squareState}&code_challenge=${squareCodeChallenge}`)
        }
    })

    const { classes } = useStyles()
    return <div className={classes.wrapperDiv}>
        <div className={classes.titleDiv}>
            <Logo />
            <span className={classes.appTitle}>Order Hoarder</span>
        </div>
        <div className={classes.contentDiv}>
            <h1 className={classes.h1}>Connecting you to Square</h1>
            <span className={classes.subtitle}>Just one moment...</span>
            <Loader />
        </div>

    </div>

}

export default OAuthLoadingScreen