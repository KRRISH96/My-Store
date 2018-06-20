import React, { Component } from 'react';
import { GetCart, RemoveFromCart } from '../utils/moltin.js'
import { Link } from 'react-router-dom'
import { Container, ItemContainer, Button, Image, LinkContainer } from './StyledComponents'

class Cart extends Component {
  state={
    cartItems: [],
    totalPrice: 0,
    loading: true
  }

  async componentDidMount() {
    const cartItems = await GetCart('123')
    this.setState({
      items: [...cartItems.data],
      totalPrice: cartItems.meta.display_price.with_tax.formatted,
      loading: false
    })
  }

  async removeFromCart(id) {
    await RemoveFromCart('123',id,1);
    const cartItems = await GetCart('123')
    this.setState({
      items: [...cartItems.data],
      totalPrice: cartItems.meta.display_price.with_tax.formatted,
      loading: false
    })
    alert('Product Removed from cart');
  }

  render() {
    const { items, totalPrice, loading } = this.state
    return loading === true
      ? <h1>Loading...</h1>
      : <div>
          <h1 style={{textAlign:'center'}}>Your Cart Items</h1>
          <Container>
          {items.map((item)=> (
            <ItemContainer key={item.id}>
              <Image src={item.image.href} alt={item.name} />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <h4>Quantity: {item.quantity}</h4>
              <h3>Price: {item.meta.display_price.with_tax.value.formatted}</h3>
              <Button onClick={this.removeFromCart.bind(this,item.id)}>Remove from Cart</Button>
            </ItemContainer>
          ))}
          </Container>
          <LinkContainer>
            <h3>Total Payable: {totalPrice}</h3>
              <Link to='/checkout'>Checkout</Link>
              <Link to='/'>Go Back</Link>
          </LinkContainer>
      </div>
  }
}

export default Cart
