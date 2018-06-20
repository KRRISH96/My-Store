import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checking } from '../utils/moltin.js'
import { StyledCheckout } from './StyledComponents'

class Checkout extends Component {
 state = {
  reference: '123',
  email:'test@example.com',
   name: 'Test',
  first_name:'Test',
  last_name:'Function',
  company_name: 'personal',
  line_1:'#123, street5',
  line_2: 'test state, country',
  city:'Hitech',
  postcode:'123456',
  county: 'ABC',
  country: 'US',
  checkoutResults: {},
  loading: true
 }


  async componentDidMount() {
   const {reference, email,name,first_name, last_name, company_name, line_1, line_2, city, postcode, county, country} = this.state
   const customer = { email, name }
   const billing = {
     first_name, last_name, company_name,line_1, line_2, city, postcode,county,  country
   }
   const checkoutResults = await Checking(reference,customer,billing);
   this.setState({
     checkoutResults,
     loading: false
   })
 }

  render() {
    const { checkoutResults,loading } = this.state
    return loading === true
      ? <h1>Loading...</h1>
      : <StyledCheckout>
          <h1>Checkout</h1>
          <h3>Name:{checkoutResults.data.customer.name}</h3>
          <h3>Email: {checkoutResults.data.customer.email}</h3>
          <div style={{display:'flex'}}>
          <div>
            <h2>Billing Address</h2>
            <ul>
              {Object.keys(checkoutResults.data.billing_address).map((entry,index) => (
                <li key={index}>
                  <strong>{entry}</strong> -----> {Object.values(checkoutResults.data.billing_address)[index]}
                </li>
              ))}
            </ul>
            </div>
            <div>
            <h2>Shipping Address</h2>
            <ul>
              {Object.keys(checkoutResults.data.shipping_address).map((entry,index) => (
                <li key={index}>
                  <strong>{entry}</strong> -----> {Object.values(checkoutResults.data.shipping_address)[index]}
                </li>
              ))}
            </ul>
            </div>
          </div>
          <h2>Total Price: {checkoutResults.data.meta.display_price.with_tax.formatted}</h2>
            <Link to='/cart'>
                Go Back
            </Link>
        </StyledCheckout>
  }
}

export default Checkout;
