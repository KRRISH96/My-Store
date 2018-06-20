import React, { Component } from 'react';
import { GetAllProducts, AddtoCart } from '../utils/moltin.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cart from './Cart'
import Checkout from './Checkout'

class App extends Component {
  state = {
    products: [],
    files: [],
    loading: true
  };

  async componentDidMount() {
    const AllProducts = await GetAllProducts
    this.setState({
      products: [...AllProducts.data],
      files: [...AllProducts.included.main_images],
      loading: false
    })
  };

  async addCart(id) {
    await AddtoCart('123',id,1);
    alert('Product added to cart')
  }

  render() {
    const { products, files, loading } = this.state;
    return loading === true
      ? <h1>Loading...</h1>
      : <Router>
        <div>
        <Route exact path='/' render={(props) => (
          <div style={{display: 'flex', justifyContent:'space-around',flexWrap: 'wrap'}}>
          {products.map((product,index) => (
            <div key={product.id} style={{border:'1px solid blue', textAlign:'center', margin:'10px', maxWidth: '350px'}}>
            <img src={files[index].link.href} alt={product.name} style={{width:'300px', height:'250px'}} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.meta.display_price.with_tax.formatted}</p>
            <button onClick={this.addCart.bind(this,product.id)}>Add to Cart</button>
            <p>* Product quantity limited to 4 per user</p>
            </div>
          ))}
          <Link to='/cart' style={{background: 'yellow', padding: '10px', display: 'flex', maxWidth: '70px',height: '70px',justifyContent: 'center'}}>
          My Cart
          </Link>
          </div>
        )} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </div>
        </Router>
  }
}

export default App;
