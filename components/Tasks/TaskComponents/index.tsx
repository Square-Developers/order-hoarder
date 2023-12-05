import { Button, Loader, createStyles } from '@mantine/core'
import TipBanner from '../../TipBanner'
import { Dispatch, SetStateAction } from 'react'
import { X, Check } from 'tabler-icons-react'

const useStyles = createStyles(() => ({
    bannerAnchor: {
        color: '#F15076',
        fontSize: 16,
        fontWeight: 600,
        textDecoration: 'none',
    },
    bannerSpan: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    tokenValid: {
        marginTop: 16,
        marginLeft: 16,
        color: '#007D2A',
        fontWeight: 700,
        '<:p': {
            margineLeft: 0
        }
    },
    tokenInvalid: {
        marginTop: 16,
        marginLeft: 16,
        color: '#BF0020',
        fontWeight: 700,
        '&:p': {
            margineLeft: 0
        }
    },
    tokensDiv: {
        display: 'flex',
    },
    rightMargin: {
        marginRight: '1rem'
    }
 }))

const InvalidTokens = () => {
    const { classes } = useStyles()
    return <div className={classes.tokensDiv}><X className={classes.tokenInvalid}/><p className={classes.tokenInvalid}> Tokens for user are invalid</p></div>
}
const ValidTokens = () => {
    const { classes } = useStyles()
    return <div className={classes.tokensDiv}><Check className={classes.tokenValid} /><p className={classes.tokenValid}>Tokens for this user are valid</p></div>
}


const DevelopmentStatus = () => { 
    const { classes } = useStyles()
    return process.env.NODE_ENV === 'development' ? 
    <TipBanner>
        <span className={classes.bannerSpan}>Becuase you are in development, make sure to have a sandbox test account open in another tab.<a className={classes.bannerAnchor} target='_blank' href='https://squareup.com/login?app=developer&return_to=https://developer.squareup.com/apps' rel='noreferrer'>Go here</a></span>
    </TipBanner> 
    : 
    null
}

export const ConnectToSquare = (setOpened: Dispatch<SetStateAction<boolean>>) => {
    return {
        title: 'Connect to your Square Account',
        description: 'Securely connect your Square Seller account with Order Hoarder! Once connected, all of the great benefits from Order Hoarder will be directly available for use on your Square data!',
        color: '#EF476F',
        actions: [
            {
                component: () => <Button size='lg' onClick={() => setOpened(true)}>Connect</Button>
            }
        ],
        status: () => <DevelopmentStatus/>
    }
}


export const OAuthComplete = (revokeUserAccess: () => void) => {
    return {
        title: 'Square OAuth Flow Complete',
        description: 'Congratulations on authorizing Square!',
        color: '#151C1F',
        actions: [
            {
                component: () => <Button size='lg' variant='light' onClick={revokeUserAccess}>Deauthorize</Button>
            }
        ]
    }
}

export const OAuthDenied = (setOpened: Dispatch<SetStateAction<boolean>>) => {
    return {
        title: 'You chose not to authorize Order Hoarder',
        description: 'Please try again, Order Hoarder needs access to your Square account.',
        color: '#151C1F',
        actions: [
            {
            component: () => <Button size='lg' onClick={() => setOpened(true)}>Connect</Button>
            }
        ]
    }
}
// TODO: IMPLEMENT THIS
export const OAuthError = (setOpened: Dispatch<SetStateAction<boolean>>) => {
    return {
        title: 'Something went wrong..',
        description: 'Please try again.',
        color: '#151C1F',
        actions: [
            {
            component: () => <Button size='lg' onClick={() => setOpened(true)}>Connect</Button>
            }
        ]
    }
}

export const TokenManagement = ({
    refreshTokens,
    tokenIsValid,
    revokeAccessToken,
    isValidating
}: {
    refreshTokens: () => void;
    tokenIsValid: boolean;
    revokeAccessToken: () => void;
    isValidating: boolean
}) => {
    const { classes } = useStyles()
    return {
        title: 'Manage Tokens',
        description: 'Feel free to experiment with your access tokens',
        color: '#151C1F',
        actions: [
            {
                component: () => <Button className={classes.rightMargin} size='lg' variant='light' onClick={refreshTokens} >Refresh tokens</Button>
            },
            {
                component: () => <Button size='lg' variant='light' onClick={revokeAccessToken}>Revoke access token</Button>
            },
        ],
        status: () => {
            if (isValidating) {
                return <Loader size='xs'/>
            } else {
                return tokenIsValid ? <ValidTokens/> : <InvalidTokens/>
            }
        }
    }
}