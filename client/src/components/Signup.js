import React, {useState} from 'react'
import {Card, Form, Button} from 'semantic-ui-react'

export default function Signup(props) {

    const [formData, setFormData]=useState({
        username:'',
        password:''
        })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            username: formData.username,
            password: formData.password
        })
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        })
        .then(res => res.json())
        .then(alert("Registered successfully"))
    }

    return (
        <div className='login'>
            <Card >
            <h1 className='cardHeader'>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field className='inputField'>
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='username' 
                            placeholder='Username' 
                            value={formData.username} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field className='inputField'>
                        <label>Password</label>
                        <input 
                            placeholder="Password" 
                            name='password' 
                            type='password' 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Button fluid color='blue' type='submit'>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}
