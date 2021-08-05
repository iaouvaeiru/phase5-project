import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar(props) {

    const Login = () => {
        return <NavLink to='/login' style={{ float: 'right', marginRight: '50px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Login</NavLink>
    }

    const clearToken = () => {
        props.setState({
            username: '',
            past_orders: [],
            token: "",
            id: 0,
            orders: [],
            ordersIMade: []
        })
    }

    const Logout = () => {
        return <NavLink to='/login' style={{ float: 'right', marginRight: '50px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}} onClick={clearToken}>Logout</NavLink>
    }

    return (
        <div className="nav">
            {props.state.token.length > 0 ? Logout() : Login() }
            <NavLink to='/' style={{ marginRight: '60px', marginLeft: '30px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Home</NavLink>
            <NavLink to='/listings' style={{fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Listings</NavLink>
            <NavLink to='/profile' style={{ float: 'right', marginRight: '50px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Profile</NavLink>
            {/* <NavLink to='/orders' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Orders</NavLink> */}
        </div>
    )
}
