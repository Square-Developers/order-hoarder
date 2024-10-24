import {
  Checkbox,
  Anchor,
  Paper,
  Text,
  Container,
  Group,
  Button,
  createStyles,
  Title,
  Loader
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import { useState } from 'react'
import fetchJson, { FetchError } from '../../lib/fetchJson'
import { showNotification } from '@mantine/notifications'
import { X } from 'tabler-icons-react'
import { Logo } from '../Navbar/NavbarNested/Logo'
import FloatingLabelInput from '../Inputs/FloatingLabelInput'
import LayoutExternal from '../Layouts/LayoutExternal'
import { useRouter } from 'next/router'
import { validateFormInput } from '../../utils/helpers'

interface LoginSignupProps {
  variation: 'login' | 'signup'
}

const useStyles = createStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  rowDiv: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '2rem',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.55)',
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
}))

export function LoginSignup({ variation }: LoginSignupProps) {

  const { classes } = useStyles()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const loginHandler = async () => {
    setIsLoading(true)
    const loginData: { username: string, password: string } = {
      username: email,
      password: password
    }

    const info = validateFormInput(loginData)
    if (info.length > 0 ){
      setIsLoading(false)
      showNotification({
        title: 'Error',
        message: 'Must include: ' + info.join(' '),
        autoClose: 3000,
        color: 'red',
        icon: <X />,
      })
      return
    }

    try {
      await fetchJson('/api/users/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })

      router.push('/dashboard')

    } catch (error) {
      setIsLoading(false)
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

  const signupHandler = async () => {
    setIsLoading(true)
    const loginData: { username: string, password: string, firstName: string, lastName: string } = {
      username: email,
      password,
      firstName,
      lastName
    }
    const info = validateFormInput(loginData)
    if (info.length > 0 ){
      setIsLoading(false)
      showNotification({
        title: 'Error',
        message: 'Must include: ' + info.join(' '),
        autoClose: 3000,
        color: 'red',
        icon: <X />,
      })
      return
    }
    try {
      // Create the user in our DB
      const { error } = await fetchJson('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })


      if (!error) {
        router.push('/dashboard')
        return
      } else {
        setIsLoading(false)
        showNotification({
          title: 'Error',
          message: error.message,
          autoClose: 3000,
          color: 'red',
          icon: <X />,
        })
        return
      }
    } catch (error) {
      setIsLoading(false)
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

  return (
    <LayoutExternal>
      <Container size={800} my={40}>
        <div className={classes.titleDiv}>
          <Logo />
          <span className={classes.appTitle}>Order Hoarder</span>
        </div>

        <Paper p={30} mt={30} radius='md' className={classes.paper}>
          <Title
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900
            })}
          >
            {variation === 'login' ? 'Get Back to Hoarding!' : 'Welcome to the Hoard'}
          </Title>

          {(variation === 'login') ? <Text color='dimmed' size='sm' mt={5}>
            Need an account?{' '}
            <Anchor href='/signup' size='sm' component={NextLink}>
              Create account
            </Anchor>
          </Text> : <Text className={classes.subtitle}>To get started, we only need a few pieces of information</Text>}
          {variation === 'signup' &&
            <div className={classes.rowDiv}>
              <FloatingLabelInput label='First Name' width='md' value={firstName} setValue={setFirstName} onSubmit={signupHandler} />
              <FloatingLabelInput label='Last Name' width='md' value={lastName} setValue={setLastName} onSubmit={signupHandler} />
            </div>
          }
          <FloatingLabelInput 
            label='Email' 
            width='lg' 
            value={email} 
            setValue={setEmail} 
            onSubmit={(variation === 'login') ? loginHandler : signupHandler}
            />
          <FloatingLabelInput
            label='Password'
            width='lg'
            value={password}
            setValue={setPassword}
            onSubmit={(variation === 'login') ? loginHandler : signupHandler}
            type='password'
          />

          {(variation === 'login') ?
            <Group position='apart' mt='md'>
              <Checkbox label='Remember me' />
              <Anchor<'a'> onClick={(event) => event.preventDefault()} href='#' size='sm'>
                Forgot password?
              </Anchor>
            </Group> : ''
          }
          <div>
            <Button mt='md' size='lg' radius='md' onClick={(variation === 'login') ? loginHandler : signupHandler}>
              {
              (isLoading === true) ? <Loader color='white' size='sm'/>
              : (variation === 'login') ? 'Login' : 'Continue'
              }
            </Button>
          </div>
        </Paper>
      </Container>
    </LayoutExternal>
  )
}
