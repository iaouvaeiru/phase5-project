import React, { useState, useEffect } from 'react'
import SelfListingCard from './SelfListingCard'
import Nav2 from './Nav2'
import OfferCard from './OfferCard'
import PastOrders from './PastOrders'
import {Switch, Route, Link} from 'react-router-dom'
import { Button, Checkbox } from 'semantic-ui-react'

export default function Profile(props) {
    const [state, setState] = useState(false)
    console.log(state)

    const handleClick = () => {
        setState(!state)
    }

    let selfListings = (routerProps) => props.items.map(itemObj => {
        if (itemObj.user_id === props.state.id ) {
            return <SelfListingCard 
                        key = {itemObj.id}
                        itemObj = {itemObj}
                        deleteItem = {props.deleteItem}
                    />
        }
    })

    const acceptedBids = props.state.ordersIMade.filter(orderObj => {
        return orderObj.accepted === 'accepted'
    })

    console.log(acceptedBids)
    console.log(props.state.ordersIMade)

    let selfBids = (routerProps) => props.state.ordersIMade.map(orderObj => {
        return <PastOrders 
                    key = {orderObj.id}
                    orderObj = {orderObj}
                    />
    })

    let filteredBids = (routerProps) => acceptedBids.map(orderObj => {
        return <PastOrders 
                key = {orderObj.id}
                orderObj = {orderObj}
                />
    })

    let offers = (routerProps) => props.state.orders.map(orderObj => {
        if (orderObj.accepted === 'pending') {
            return <OfferCard 
                clearOrder = {props.clearOrder}
                acceptAndClear = {props.acceptAndClear}
                key = {orderObj.id}
                orderObj = {orderObj}
                    />
        }
    })


    return (
        <div>
            <Nav2></Nav2>
            <Switch>
                <Route path={'/profile/listings'}
                >
                    <br></br>
                    <Link to={"/newlisting"}>
                        <Button basic style={{ marginRight: '50px', marginLeft: '30px' }}>New Listing</Button>
                    </Link>
                    <h1>your listings:</h1>
                    {selfListings()}
                </Route>
                <Route path={'/profile/offers'}>
                    <h1>Offers</h1>
                    {offers()}
                </Route>
                <Route path={'/profile/orders'}>
                    <h1>My Bids:</h1>
                    <Checkbox label="Show only accepted bids" onClick={handleClick}></Checkbox>
                    {state ? filteredBids() : selfBids()}
                </Route>
            </Switch>
        </div>
    )
}
