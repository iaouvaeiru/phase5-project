import React, { useState, useEffect } from 'react'



export default function PastOrders(props) {
    return (
        <div>
            <hr></hr>
            <h2>{props.orderObj.item.name}</h2>
            <h4>${props.orderObj.bid}</h4>
            <h4>status: {props.orderObj.accepted}</h4>
            <hr></hr>
        </div>
    )
}
