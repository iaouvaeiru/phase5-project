import React from 'react'
import { Button } from 'semantic-ui-react'



export default function OfferCard(props) {

    let handleAccept = () => {
        console.log(props.orderObj)
        fetch('/accept', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: props.orderObj.id
            })
        })
        .then(res => res.json())
        .then(() => props.acceptAndClear(props.orderObj.item.id))
    }

    let handleReject = () => {
        fetch('/reject', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: props.orderObj.id
            })
        })
        .then(res => res.json())
        .then(()=> props.clearOrder(props.orderObj.id))
        
    }
    
    return (
        <div>
            <h3>{props.orderObj.item.name}</h3>
            <p>bid: {props.orderObj.bid}</p>
            <Button compact basic color='green'onClick={handleAccept}>accept</Button> <Button compact basic color='red'onClick={handleReject}>decline</Button>
        </div>
    )
}
