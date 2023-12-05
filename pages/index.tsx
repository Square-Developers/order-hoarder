import type { NextPage } from 'next'
import Link from 'next/link'
import { Button, createStyles, Group, Text } from '@mantine/core'
import styles from './index.module.css'
import { Receipt1 } from '../images/Receipt1'
import { Receipt2 } from '../images/Receipt2'
import { Receipt3 } from '../images/Receipt3'

const useStyles = createStyles(() => ({
  backgroundDiv: {
    width: '100%',
    height: '100vh',
  },
  homeDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  title: {
    fontSize: 32,
    fontWeight: 700
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 100,
  },
  buttonGroup: {
    marginTop: '2rem'
  }

}))

function HeroTitle() {
  const { classes } = useStyles()
  return (
    <div className={styles.indexBg}>
      <ul className={styles.icons}>
        <Receipt1 />
        <Receipt2 />
        <Receipt3 />
        <Receipt2 />
        <Receipt3 />
        <Receipt3 />
        <Receipt3 />
        <Receipt1 />
        <Receipt2 />
        <Receipt2 />
      </ul>
      <div className={classes.homeDiv}>
        <Text className={classes.title}>Order Hoarder</Text>
        <Text  className={classes.subtitle}>Manage, Analyze, and Hoard your Square Orders</Text>
        <Group className={classes.buttonGroup}>
          <Link
            href='/signup'>
            <Button
              size='xl'
            >
              Sign up
            </Button>
          </Link>
          <Link
            href='/login'>
            <Button
              variant='light'
              size='xl'
              >
              Login
            </Button>
          </Link>
        </Group>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <HeroTitle />
  )
}

export default Home
