import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checking } from '../utils/moltin.js'

class Checkout extends Component {
 state = {
  reference: '123',
  email:'test@example.com',
   name: 'Test',
  first_name:'Test',
  last_name:'Function',
  line_1:'#123, street5',
  line_2: 'test state, country',
  city:'',
  postcode:'123456',
  county: 'ABC',
  country: 'US',
  checkoutResults: {},
  loading: true
 }


  async componentDidMount() {
   const {reference, email,name,first_name, last_name, line_1, line_2, city, postcode, county, country} = this.state
   const customer = { email, name }
   const billing = {
     first_name, last_name, line_1, line_2, city, postcode,county,  country
   }
   const checkoutResults = await Checking(reference,customer,billing);
   this.setState({
     checkoutResults,
     loading: false
   })
 }

  render() {
    const { checkoutResults,loading } = this.state
    console.log(checkoutResults,'im at render')
    return loading === true
      ? <h1>Loading...</h1>
      : <div>
          <h1>Checkout</h1>
          <p>Name:{checkoutResults.data.customer.name}</p>
          <Link to='/cart'>Go Back</Link>
        </div>
  }
}

export default Checkout;
