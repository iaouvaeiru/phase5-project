import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SelfListingCard(props) {
    let handleClick = (e) => {
        fetch(`/items/${props.itemObj.id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(() => props.deleteItem(props.itemObj.id))
    }

    return (
        <div className='listingCard'>
            <div>
                <img src={props.itemObj.image} alt={props.itemObj.name} style={{width: 300}}/>
            </div>
            <div>
                <br></br>
                <h1>{props.itemObj.name}</h1>
                <p>Asking price: ${props.itemObj.price}</p>
                <p>Description: {props.itemObj.description}</p>
                <p>Status: {props.itemObj.sold ? 'sold' : "available for purchase"}</p>
                <Button basic color='red' compact onClick={handleClick}>Delete</Button>
            </div>
        </div>
    )
}
