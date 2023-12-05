import React, { useEffect, useState } from 'react'
import { Container, Loader } from '@mantine/core'
import TaskList from '../../components/Tasks/TaskList'
import { TaskProps } from '../../components/Tasks/Task'
import { useRouter } from 'next/router'
import LayoutInternal from '../../components/Layouts/LayoutInternal'
import Metrics from '../../components/Metrics'
import { createStyles } from '@mantine/core'
import useUser from '../../lib/useUser'
import { Arrow } from '../../components/Tasks/Task/Arrow'
import { Check } from '../../components/Tasks/Task/Check'
import useSWR from 'swr'
import { AuthStatus } from '../../types/user'


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

export default function Dashboard() {
    const router = useRouter()
    const { classes } = useStyles()
    const { user } = useUser()

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
            title: user?.firstName ? `Welcome to Order Hoarder, ${user?.firstName}! ${String.fromCodePoint(0x1f389)}` : 'Welcome to Order Hoarder',
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
        <LayoutInternal>
            <Container size='xl'>
                <h1 className={classes.header}>Dashboard</h1>
                {isLoading ? <div className={classes.loader}><Loader/></div> : <DashboardData/>}
            </Container >
        </LayoutInternal>
    )
}
