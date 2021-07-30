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
    }

    return (
        <div>
            <Card>
            <h1>Create a Listing</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Name' 
                            value={formData.name} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Image</label>
                        <input 
                            placeholder="image" 
                            name='image' 
                            type='text' 
                            value={formData.image} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Price</label>
                        <input 
                            placeholder="price" 
                            name='price' 
                            type='number' 
                            value={formData.price} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input 
                            placeholder="description" 
                            name='description' 
                            type='text' 
                            value={formData.description} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <br />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}
