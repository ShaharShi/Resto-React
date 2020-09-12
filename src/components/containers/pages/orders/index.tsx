import React, { useContext } from 'react';
import { MealsContext } from 'App';
import Meal from 'components/containers/ui-components/meal';
import Button from 'react-bootstrap/esm/Button';

export default function OrdersPage() {
    const [state, setState] = useContext(MealsContext)
    const {orders} = state

    function clearOrders() {
        setState({...state, orders: []})
    }

    return (
        <div className={'mt-5'}>
            <div className="row">
                <Button variant={'danger'} onClick={clearOrders}>Clear Orders</Button>
            </div>
            <div className="row mt-5">
                {
                    orders.map((meal: any) => { return <Meal  {...meal} cls="danger" actionTitle="Remove" /> })
                }
            </div>
        </div>
    )
}