import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="nav">
            <NavLink to='/login' style={{ float: 'right', marginRight: '50px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Login</NavLink>
            <NavLink to='/' style={{ marginRight: '60px', marginLeft: '30px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Home</NavLink>
            <NavLink to='/listings' style={{fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Listings</NavLink>
            <NavLink to='/profile' style={{ float: 'right', marginRight: '50px', fontSize: '15pt', color:'white' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "white"}}>Profile</NavLink>
            {/* <NavLink to='/orders' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Orders</NavLink> */}
        </div>
    )
}
