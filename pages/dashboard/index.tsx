import React, { useEffect, useState } from 'react'
import { Container, Loader } from '@mantine/core'
import TaskList from '../../components/Tasks/TaskList'
import { TaskProps } from '../../components/Tasks/Task'
import { useRouter } from 'next/router'
import LayoutInternal from '../../components/Layouts/LayoutInternal'
import Metrics from '../../components/Metrics'
import { createStyles } from '@mantine/core'
import { Arrow } from '../../components/Tasks/Task/Arrow'
import { Check } from '../../components/Tasks/Task/Check'
import useSWR from 'swr'
import { AuthStatus } from '../../types/user'

import type { User } from '@supabase/supabase-js'
import type { GetServerSidePropsContext } from 'next'

import { createClient } from '../../utils/supabase/server-props'

const useStyles = createStyles(() => ({
    header: {
        fontSize: 32,
        fontWeight: 700,
        marginTop: 50,
        marginBottom: 32,
    },
    arrowSpan: {
        cursor: 'pointer'
    },
    loader: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

export default function Dashboard({ user }: { user: User }) {
    const router = useRouter()
    const { classes } = useStyles()

    // if the user has data from Square
    const [hasSquareData, setHasSquareData] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { data, error } = useSWR<AuthStatus>('/api/square/retrieve_auth_data')
    // TODO: Handle Error Response from the API
    useEffect(() => {
        if (data?.isAuthed) {
            setIsLoading(false)
            setHasSquareData(data.isAuthed)
        } else {
            setIsLoading(false)
            setHasSquareData(false)
        }
        if (error) {
            console.log(error)
        }
    }, [data, error])

    const mockTaskList: TaskProps[] = [
        {
            title: user?.email ? `Welcome to Order Hoarder, ${user?.user_metadata?.first_name}! ${String.fromCodePoint(0x1f389)}` : 'Welcome to Order Hoarder',
            description: 'In order to start using Order Hoarder, we need data from Square',
            color: '#151C1F',
        },
        {
            title: 'Connect To Square',
            description: 'Connect your account to Square to get started.',
            color: '#EF476F',
            actions: [
                {
                    component: () => <span className={classes.arrowSpan} onClick={() => router.push('/settings')}><Arrow/></span>,
                }
            ]
        },
    ]

    const DashboardData = () => {
        return !hasSquareData ?  
            <TaskList tasks={mockTaskList}/> 
            :
            <>
                <TaskList tasks={[squareSuccess]} />
                <Metrics />
            </>
    }
    
    const squareSuccess: TaskProps = {
        title: 'Connected To Square',
        description: 'Your Account has been successfully connected to Square.',
        color: '#151C1F',
        actions: [{
            component: () => <Check/>
        }]
    }

    return (
        <LayoutInternal user={user}>
            <Container size='xl'>
                <h1 className={classes.header}>Dashboard</h1>
                {isLoading ? <div className={classes.loader}><Loader/></div> : <DashboardData/>}
            </Container >
        </LayoutInternal>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const supabase = createClient(context)
  
    const { data, error } = await supabase.auth.getUser()
  
    if (error || !data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: {
        user: data.user,
      },
    }
  }
