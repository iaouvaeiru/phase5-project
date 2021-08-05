import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import ListingsPage from './components/ListingsPage'
import Profile from './components/Profile'
import NewListing from './components/NewListing'
import {Switch, Route, withRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function App(props) {

  const [items, setItems] = useState([])

  const [state, setState] = useState({
    username: '',
    past_orders: [],
    token: "",
    id: 0,
    orders: [],
    ordersIMade: []
  })

  useEffect(() => {
    fetch('/listings')
    .then(res => res.json())
    .then(itemsArr => setItems(itemsArr))
  },[])

  let handleResponse = (resp) => {
    console.log(resp)
    if(resp.token){
      setState({
        username: resp.user.username,
        past_orders: resp.user.past_orders,
        id: resp.user.id,
        token: resp.token,
        orders: resp.user.orders,
        ordersIMade: resp.user.orders_i_made
      })
      localStorage.token = resp.token

      props.history.push("/listings")
    } else {
      alert("unlucky, maybe next time")
    }
  }

  const addToItem = (item) => {
    let copyOfItems = [...items, item]
    setItems(copyOfItems)
  }
  
  const deleteItem = (deletedID) => {
    let copyOfItems = items.filter(itemObj => {
      return itemObj.id !== deletedID
    })
    setItems(copyOfItems)
  }

  const orderBidder = (item) => {
    let copyOfOrders = [...state.ordersIMade, item]
    setState({
      ...state,
      ordersIMade: copyOfOrders
    })
  }

  const clearOrder = deletedID => {
    let copyOfOrders = state.orders.filter(orderObj => {
      return orderObj.id !== deletedID
    })
    setState({
      ...state,
      orders: copyOfOrders
    })
  }

  const acceptAndClear = orderItemID => {
    let copyOfOrders = state.orders.filter(orderObj => {
      return orderObj.item.id !== orderItemID
    })
    setState({
      ...state,
      orders: copyOfOrders
    })
  }


  console.log(state)
  console.log(items)
  return (
    <div>
      <NavBar />
      <br></br>
      <Switch>
        <Route path={'/login'}
          render={routerProps => {
            return <div>
              <Login
                {...routerProps} setState={setState}
                handleResponse={handleResponse}>
              </Login>
            </div>
          }}>
        </Route>
        <Route path={'/signup'}
          render={routerProps => {
            return <div>
              <Signup
                {...routerProps}>
              </Signup>
            </div>
          }}>
        </Route>
        <Route path={'/listings'}
          render={routerProps => {
            return <div>
              <ListingsPage
                {...routerProps}
                  orderBidder={orderBidder}
                  state={state}
                  items={items}>
              </ListingsPage>
            </div>
          }}>
        </Route>
        <Route path={'/profile'}
          render={routerProps => {
            return <div>
              <Profile
                {...routerProps}
                deleteItem={deleteItem}
                clearOrder={clearOrder}
                acceptAndClear={acceptAndClear}
                state={state}
                items={items}>
              </Profile>
            </div>
          }}>
        </Route>
        <Route path={'/newlisting'}
          render={routerProps => {
            return <div>
              <NewListing
                {...routerProps}
                addToItem={addToItem}
                state={state}
                items={items}>
              </NewListing>
            </div>
          }}>
        </Route>
        <Route path={'/'} >

        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
