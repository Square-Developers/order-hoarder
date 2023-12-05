import { createStyles } from '@mantine/core'
import { useState, useEffect } from 'react'
import { Order, SearchOrdersResponse } from 'square'
import fetchJson, { FetchError } from '../../lib/fetchJson'
import { formatMoney } from '../../utils/helpers'
import Metric from './Metric'
import LocationSelect from '../Inputs/LocationSelect'

const useStyles = createStyles(() => (
    {
      metricsContainer: {
        marginTop: 16,
        padding: 24,
        borderRadius: 6,
        border: '1px solid #DEE2E6',
      },
      h1: {
        fontSize: 24,
        fontWeight: 700,
        color: '#000000',
        marginTop: 0,
      },
      locationSelectContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16
      },
      locationSelect: {
        width: '15rem'
      },
      MetricsContainer: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'flex-start',
        height: 100,
      }
    }))

const calculateOrderData = (orders: Order[]): {
    openOrders: number;
    completedOrders: number;
    totalRevenue: string;
} => {
    let totalRevenue = BigInt(0)
    let openOrders = 0
    let completedOrders = 0
    orders.forEach(order => {
        if (order.state === 'COMPLETED') {
            completedOrders += 1
            if (order?.totalMoney?.currency === 'USD') {
                totalRevenue += order?.totalMoney?.amount ? BigInt(order.totalMoney.amount) : BigInt(0)
            }
        }
        if (order.state === 'OPEN') {
            openOrders += 1
        }
    })
    return {
        openOrders,
        completedOrders,
        totalRevenue: totalRevenue > 1000000000 ? 'More than $1B' : formatMoney(totalRevenue, 'USD')
    }

}

const Metrics = () => {
    const { classes } = useStyles()
    const [merchantId, setMerchantId] = useState<string>('')
    const [openOrders, setOpenOrders] = useState<number>(0)
    const [completedOrders, setCompletedOrders] = useState<number>(0)
    const [totalRevenue, setTotalRevenue] = useState<string>('$0')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (merchantId) {
            setIsLoading(true)
            const getOrderData = async () => {
                try {
                    const { orders } = await fetchJson('/api/orders/get_order_data', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: merchantId
                        })
                    }) as SearchOrdersResponse

                    if (orders?.length) {
                        const orderData = calculateOrderData(orders)
                        setOpenOrders(orderData.openOrders)
                        setCompletedOrders(orderData.completedOrders)
                        setTotalRevenue(orderData.totalRevenue)
                        setIsLoading(false)
                        // Transform response data into selectable data
                    } else {
                        setOpenOrders(0)
                        setCompletedOrders(0)
                        setTotalRevenue('$0')
                        setIsLoading(false)
                    }
                } catch (error) {
                    // User has not configured a loyalty Reward Program
                    if (error instanceof FetchError && error.message === 'Not Found') {
                        //                    setLoading(false)
                        //                    setErrorMessage('No loyalty Program configured, please go to your square seller account and create a loyalty program')
                    } else {
                        console.error('An unexpected error happened:', error)
                    }
                }
            }
            getOrderData()
        }
    }, [merchantId])
     //TODO: Should this be a task list? 
    return <div className={classes.metricsContainer}>
        <h1 className={classes.h1}>Location metrics</h1>
        <div className={classes.locationSelectContainer}>
            <div className={classes.locationSelect}>
                <LocationSelect setMerchantId={setMerchantId} />
            </div>
        </div>

        {merchantId &&
            <div className={classes.MetricsContainer}>
                <Metric title={completedOrders} subtitle='Completed Orders' loading={isLoading} />
                <Metric title={totalRevenue} subtitle='Total Revenue' loading={isLoading} />
                <Metric title={openOrders} subtitle='Incomple Orders' loading={isLoading} />
            </div>
        }
    </div>
}

export default Metrics