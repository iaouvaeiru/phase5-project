import React from 'react'
import ListingsCard from './ListingsCard'
import { Switch, Link } from 'react-router-dom'

export default function ListingsPage(props) {
    let renderListings = props.items.map(itemObj => {
        if (itemObj.user_id !== props.state.id && itemObj.sold === false) {
            return <ListingsCard 
                    key = {itemObj.id}
                    orderBidder = {props.orderBidder}
                    itemObj = {itemObj}
                    state = {props.state}
                />
        }
    })

    return (
        <div>
            {renderListings}
        </div>
    )
}
