import React from 'react'
import SelfListingCard from './SelfListingCard'
import Nav2 from './Nav2'
import OfferCard from './OfferCard'
import PastOrders from './PastOrders'
import {Switch, Route} from 'react-router-dom'

export default function Profile(props) {
    let selfListings = (routerProps) => props.items.map(itemObj => {
        if (itemObj.user_id === props.state.id) {
            return <SelfListingCard 
                        key = {itemObj.id}
                        itemObj = {itemObj}
                        deleteItem = {props.deleteItem}
                    />
        }
    })

    let selfBids = (routerProps) => props.state.ordersIMade.map(orderObj => {
        return <PastOrders 
                    key = {orderObj.id}
                    orderObj = {orderObj}
                    />
    })

    let offers = (routerProps) => props.state.orders.map(orderObj => {
        return <OfferCard 
                key = {orderObj.id}
                orderObj = {orderObj}
                    />
    })


    return (
        <div>
            <Nav2></Nav2>
            <Switch>
                <Route path={'/profile/listings'}
                >
                    <h1>your listings:</h1>
                    {selfListings()}
                </Route>
                <Route path={'/profile/offers'}>
                    <h1>Offers</h1>
                    {offers()}
                </Route>
                <Route path={'/profile/orders'}>
                    <h1>My Bids:</h1>
                    {selfBids()}
                </Route>
            </Switch>
        </div>
    )
}
