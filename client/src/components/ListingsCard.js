import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'

export default function ListingsCard(props) {

    const [formData, setFormData]=useState({
        bid: props.itemObj.price
        })
    
    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            [e.target.name]: e.target.value
            
        })
    }

    let handleClick = (e) => {
        fetch('/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                item_id: props.itemObj.id,
                user_id: props.state.id,
                bid: formData.bid,
                accepted: 'pending'
            })
        })
        .then(res => res.json())
        .then(itemObj => props.orderBidder(itemObj))
        .then(() => {
            if (props.state.token.length > 0) {
                alert('bid submitted')
            } else {
                alert('please log in to make a bid')
            }
        })
    }

    return (
        <div className='listingCard'>
            <div>
                <img src={props.itemObj.image} style={{width: 300}}/>
            </div>
            <div>
                <br/>
                <h1>{props.itemObj.name}</h1>
                <p>Asking Price: ${props.itemObj.price}</p>
                <p>{props.itemObj.description}</p>
                <Form>
                    <Form.Field>
                            <label>Offer:</label>
                            <input 
                                placeholder={props.itemObj.price} 
                                name='bid' 
                                type='number' 
                                value={formData.price} 
                                onChange={handleChange}
                            />
                        </Form.Field>
                </Form>
                <br/>
                <Button compact basic color='green' onClick={handleClick}>Make Offer</Button>
            </div>
        </div>
    )
}
