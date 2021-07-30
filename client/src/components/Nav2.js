import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <NavLink to='/profile/listings' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Your Listings</NavLink>
            <NavLink to='/profile/offers' style={{ marginRight: '50px', fontSize: '15pt', paddingTop: '30px', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Offers</NavLink>
            <NavLink to='/profile/orders' style={{ marginRight: '50px', fontSize: '15pt', paddingTop: '30px', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Past Orders</NavLink>
            {/* <NavLink to='/signup' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Sign Up</NavLink> */}
            {/* <NavLink to='/orders' style={{ marginRight: '50px', marginLeft: '30px', fontSize: '15pt', color:'black' }} activeClassName="active" activeStyle={{fontWeight: "bold", color: "black"}}>Orders</NavLink> */}
        </div>
    )
}
