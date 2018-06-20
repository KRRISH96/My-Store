import React, { Component } from 'react';
import { GetCart, RemoveFromCart } from '../utils/moltin.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Checkout extends Component {
  state={
    cartItems: [],
    totalPrice: 0,
    loading: true
  }

  async componentDidMount() {
    const cartItems = await GetCart('123')
    this.setState({
      items: [...cartItems.data],
      totalPrice: cartItems.meta.display_price.with_tax,
      loading: false
    })
    console.log(cartItems)
  }

  async removeFromCart(id) {
    console.log(id)
    const removeItems = await RemoveFromCart('123',id,1);
    const cartItems = await GetCart('123')
    this.setState({
      items: [...cartItems.data],
      totalPrice: cartItems.meta.display_price.with_tax,
      loading: false
    })
    console.log(removeItems,'items')
  }

  render() {
    const { items, totalPrice, loading } = this.state
    return loading === true
      ? <h1>Loading...</h1>
      : <div style={{display: 'flex',       justifyContent:'space-around',flexWrap: 'wrap'}}>
          <h1>Your Cart Items</h1>
          {items.map((item)=> (
            <div key={item.id} style={{border:'1px solid blue', textAlign:'center', margin:'10px', maxWidth: '350px'}}>
            <img src={item.image.href} alt={item.name} style={{width:'300px', height:'250px'}}/>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <h4>Quantity: {item.quantity}</h4>
            <h3>Price: {item.meta.display_price.with_tax.value.formatted}</h3>
            <button onClick={this.removeFromCart.bind(this,item.id)}>Remove from Cart</button>
            </div>
          ))}
          <Link to='/'>Go Back</Link>
      </div>
  }
}

export default Checkout
