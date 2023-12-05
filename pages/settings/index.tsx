import { Modal, Container, createStyles, Loader } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { Check, X } from 'tabler-icons-react'
import { RefreshTokenResponse } from '../../types'
import fetchJson, { FetchError } from '../../lib/fetchJson'
import OAuthLoadingScreen from '../../components/OAuthLoadingScreen'
import LayoutInternal from '../../components/Layouts/LayoutInternal'
import TaskList from '../../components/Tasks/TaskList'
import { OAuthDenied, ConnectToSquare, OAuthComplete, TokenManagement } from '../../components/Tasks/TaskComponents'
import useSWR from 'swr'

const useStyles = createStyles(() => ({
    header: {
        fontSize: 32,
        fontWeight: 700,
        marginTop: 50,
        marginBottom: 32,
    },
    loader: {
        justifyContent: 'center',
        display: 'flex'
    },
    topMargin: {
        marginTop: '1rem'
    }
}))

const Settings = () => {
    const { classes } = useStyles()
    // Handle the modal
    const [opened, setOpened] = useState(false)
    // if the user has data from Square
    const [hasSquareData, setHasSquareData] = useState<boolean>(false)
    // token is valid Check
    const [tokenIsValid, setTokenIsValid] = useState<boolean>(false)
    // check if user denied Square OAuth
    const [deniedSquare, setDeniedSquare] = useState<boolean>(false)

    const deauthorizeSquareUser = async () => {
        // TODO: Check for failure or errors
        try {
            await fetchJson('/api/square/deauthorize', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setHasSquareData(false)
            showNotification({
                title: 'Success',
                message: 'Square user deauthorized',
                autoClose: 3000,
                color: 'green',
                icon: <Check />
            })
        } catch (error) {
            if (error instanceof FetchError) {
                showNotification({
                    title: 'Error',
                    message: error.data.message,
                    autoClose: 3000,
                    color: 'red',
                    icon: <X />,
                })
            }
        }
    }

    const revokeAccessToken = async () => {
        const body = JSON.stringify({ revokeToken: true })
        try {
            await fetchJson('/api/square/deauthorize', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body
            })
            setTokenIsValid(false)
            showNotification({
                title: 'Success',
                message: 'User token revoked',
                autoClose: 3000,
                color: 'green',
                icon: <Check />
            })
        } catch (error) {
            if (error instanceof FetchError) {
                showNotification({
                    title: 'Error',
                    message: error.data.message,
                    autoClose: 3000,
                    color: 'red',
                    icon: <X />,
                })
            }
        }
    }

    const refreshTokens = async () => {
        try {
            const data = await fetchJson('api/square/refresh_tokens', {
                method: 'GET',
            }) as RefreshTokenResponse

            setTokenIsValid(true)
            showNotification({
                title: 'Success',
                message: data.message,
                autoClose: 3000,
                color: 'green',
                icon: <Check />
            })
        } catch (error) {
            if (error instanceof FetchError) {
                showNotification({
                    title: 'Error',
                    message: error.data.message,
                    autoClose: 3000,
                    color: 'red',
                    icon: <X />,
                })
            } else {
                console.error('An unexpected error happened:', error)
            }
        }
    }
    const { data: { isAuthed, userDeniedSquare } = { isAuthed: null,
userDeniedSquare: null } } = useSWR('/api/square/retrieve_auth_data') ?? {}
    // TODO: this is running on page load if user if not authed
    const { data: { isValid, error } = { isValid: null }, isValidating: isTokenValidating } = useSWR('/api/square/check_token_valid')

    useEffect(() => {
        if (isAuthed){
            setTokenIsValid(isValid)
        }
        setHasSquareData(isAuthed)
        setDeniedSquare(userDeniedSquare)
    }, [isAuthed, userDeniedSquare,isValid])


    const SettingsData = ({ isTokenValidating }: {isTokenValidating: boolean}) => {
        // If the user denied giving access to their Square Account
        if (deniedSquare === null) {
            return <Loader/>
        }
        if (deniedSquare) {
            return <div>
                <TaskList tasks={[OAuthDenied(setOpened)]}/>
            </div>
        }
        // If the user does not have squareData, then prompt them to Auth
        return !hasSquareData ? 
            <>
                <TaskList tasks={[ConnectToSquare(setOpened)]}/>
            </>
        : 
        // Otherwise show the user Control settings
        <>
            <TaskList tasks={[OAuthComplete(deauthorizeSquareUser)]}/>
                <div className={classes.topMargin}>
                    <TaskList tasks={[TokenManagement(
                        { refreshTokens,
                          tokenIsValid,
                          revokeAccessToken,
                          isValidating: isTokenValidating
                        })]}
                    />
                </div>
        </>
    } 
    return <LayoutInternal>
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                fullScreen
            >
                <OAuthLoadingScreen url={'/api/square/auth_url'} />
            </Modal>
        </>
        <Container size='xl'>
            <h1 className={classes.header}>Settings</h1>
            <SettingsData isTokenValidating={isTokenValidating}/>
        </Container>
    </LayoutInternal>



}

export default Settings