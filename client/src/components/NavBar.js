import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <NavLink to='/login' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Login</NavLink>
            <NavLink to='/listings' style={{ marginRight: '50px', fontSize: '15pt', paddingTop: '30px', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Listings</NavLink>
            <NavLink to='/profile' style={{ marginRight: '50px', fontSize: '15pt', paddingTop: '30px', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Profile</NavLink>
            {/* <NavLink to='/signup' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Sign Up</NavLink> */}
            {/* <NavLink to='/orders' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Orders</NavLink> */}
        </div>
    )
}
