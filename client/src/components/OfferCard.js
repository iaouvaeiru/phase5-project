import React from 'react'


export default function OfferCard(props) {

    
    return (
        <div>
            <h3>{props.orderObj.item.name}</h3>
            <p>bid: {props.orderObj.bid}</p>
            <button>accept</button> <button>decline</button>
        </div>
    )
}
