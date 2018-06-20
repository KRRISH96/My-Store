import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checking } from '../utils/moltin.js'

class Checkout extends Component {
 state = {
   reference: '123',
   email: '',
   name: '',
   first_name: '',
   last_name: '',
   line_1: '',
   line_2: '',
   city: '',
   postcode: '',
   country: '',
   checkData: {}
 }

 handleCustomer = (e) => {
   this.setState({
       [e.target.name]: e.target.value
   })
 }

 async handleSubmit (e) {
   const {reference, email,name,first_name, last_name, line_1, line_2, city, postcode, country} = this.state
   console.log(this)
   const customer = { email, name }
   const billing = {
     first_name, last_name, line_1, line_2, city, postcode, country
   }
   const checkoutResults = await Checking(reference,customer,billing)
   console.log(checkoutResults)
   e.preventDefault();
 }
 //
 // async checkoutDetails(reference,customer,billing) {
 //   const checkingResults = await Checking(reference,customer,billing)
 //   console.log(checkingResults)
 // }

// async hi() {
//   const {reference, email,name,first_name, last_name, line_1, line_2, city, postcode, country,checkData,detailesFilled} = this.state
//   const customer = {
//     email,
//     name
//   }
//   const billing = {
//     first_name, last_name, line_1, line_2, city, postcode, country
//   }
//   console.log(customer)
//   console.log(billing)
//   if(detailesFilled) {
//     const checkoutResults = await Checking(reference,customer,billing)
//   console.log(checkoutResults)
// }
// }

  render() {
    const { email,name,first_name, last_name, line_1, line_2, city, postcode, country} = this.state
    return (
      <div>
        <h1>Checkout page</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='yourmail@example.com'
            name='email'
            value={email}
            onChange={this.handleCustomer}
          />
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Your Name'
            name='name'
            value={name}
            onChange={this.handleCustomer}
          />
          <label htmlFor='first_name'>First Name</label>
          <input
            type='text'
            id='first_name'
            placeholder='First Name'
            name='first_name'
            value={first_name}
            onChange={this.handleCustomer}
          />
          <label htmlFor='last_name'>Last Name</label>
          <input
            type='text'
            id='last_name'
            placeholder='Last Name'
            name='last_name'
            value={last_name}
            onChange={this.handleCustomer}
          />
          <label htmlFor='line_1'>Address line-1</label>
          <input
            type='text'
            id='line_1'
            placeholder='#123, abc colony'
            name='line_1'
            value={line_1}
            onChange={this.handleCustomer}
          />
          <label htmlFor='line_2'>Address line-2</label>
          <input
            type='text'
            id='line_2'
            placeholder='state,country'
            name='line_2'
            value={line_2}
            onChange={this.handleCustomer}
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            id='city'
            placeholder='city'
            name='city'
            value={city}
            onChange={this.handleCustomer}
          />
          <label htmlFor='postcode'>Postcode</label>
          <input
            type='text'
            id='postcode'
            placeholder='state,country'
            name='postcode'
            value={postcode}
            onChange={this.handleCustomer}
          />
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            id='country'
            placeholder='country'
            name='country'
            value={country}
            onChange={this.handleCustomer}
          />
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
        <Link to='/cart'>Go Back</Link>
      </div>
    )
  }
}

export default Checkout;
