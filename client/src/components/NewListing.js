import React, {useState} from 'react'
import {Card, Form, Button} from 'semantic-ui-react'

export default function NewListing(props) {

    const [formData, setFormData]=useState({
        name:'',
        price: 0,
        image: '',
        description: '',
        user_id: 0
        })
    
    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name: formData.name,
            image: formData.image
        })
        fetch("/items", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                image: formData.image,
                price: formData.price,
                description: formData.description,
                user_id: props.state.id
            })
        })
        .then(res => res.json())
        .then(newItem => props.addToItem(newItem))
        .then(() => props.history.push('/profile/listings'))
    }

    return (
        <div className='createListing'>
            <Card fluid>
            <h1 className='cardHeader'>Create a Listing</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field className='inputField'>
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Name' 
                            value={formData.name} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field className='inputField'>
                        <label>Image</label>
                        <input 
                            placeholder="Image url" 
                            name='image' 
                            type='text' 
                            value={formData.image} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field className='inputField'>
                        <label>Price</label>
                        <input 
                            placeholder = '0' 
                            name='price' 
                            type='number' 
                            value={formData.price} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.TextArea
                        className='inputField'
                        label='Description' 
                        name='description' 
                        type='text'  
                        placeholder="Description..." 
                        onChange={handleChange} 
                        value={formData.description} >
                    </Form.TextArea>
                    <br />
                    <Button fluid color='black' type='submit'>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}
