import { useEffect } from 'react'
import useSWR from 'swr'
import { BasicUserData } from '../types'

export default function useUser() {
    const { data: user, mutate: mutateUser } = useSWR<BasicUserData>('/api/users/user')
    useEffect(() => {
        if (!user) return
    }, [user])
    return {
        user,
        mutateUser
    }
}