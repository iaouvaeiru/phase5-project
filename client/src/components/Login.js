import React, {useState} from 'react'
import {Card, Form, Button} from 'semantic-ui-react'
import { Switch, Link } from 'react-router-dom'

export default function Login(props) {

    const [formData, setFormData]=useState({
        username:'',
        password:''
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
            username: formData.username,
            password: formData.password
        })
        fetch("/login", {
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
        .then(props.handleResponse)
        .then(res => console.log("login response", res))
    }

    return (
        <div className='login'>
            <Card >
                <h1>Log in</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='username' 
                            placeholder='Username' 
                            value={formData.username} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input 
                            placeholder="Password" 
                            name='password' 
                            type='password' 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <br />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Card>
            <div>
                <Switch>
                    <Link to='/signup'>
                        <Button color='blue'>Create an Account</Button>
                    </Link>
                </Switch>
            </div>
        </div>
    )
}
