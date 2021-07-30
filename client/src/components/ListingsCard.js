import React from 'react'

export default function ListingsCard(props) {
    let handleClick = (e) => {
        fetch('/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                item_id: props.itemObj.id,
                user_id: props.state.id,
                bid: props.itemObj.price,
                accepted: false
            })
        })
        .then(res => res.json())
        .then(itemObj => props.orderBidder(itemObj))
        .then(() => alert('bid submitted'))
    }

    return (
        <div>
            <h1>{props.itemObj.name}</h1>
            <img src={props.itemObj.image} style={{width: 300}}/>
            <p>${props.itemObj.price}</p>
            <p>{props.itemObj.description}</p>
            <button onClick={handleClick}>Buy now</button>
        </div>
    )
}
