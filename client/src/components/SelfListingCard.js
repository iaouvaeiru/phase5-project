import React from 'react'

export default function SelfListingCard(props) {
    let handleClick = (e) => {
        fetch(`/items/${props.itemObj.id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => props.deleteItem(props.itemObj.id))
    }

    return (
        <div>
            <h1>{props.itemObj.name}</h1>
            <img src={props.itemObj.image} style={{width: 300}}/>
            <p>${props.itemObj.price}</p>
            <p>{props.itemObj.description}</p>
            <p>{props.itemObj.sold ? 'sold' : "available for purchase"}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
