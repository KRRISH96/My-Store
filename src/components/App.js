import React, { Component } from 'react';
import { GetAllProducts, AddtoCart } from '../utils/moltin.js'

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
    const cartItems = await AddtoCart('123',id,1)
    console.log(cartItems,'items')
  }

  render() {
    const { products, files, loading } = this.state;
    return loading === true
      ? <h1>Loading...</h1>
      : <div>
          <div style={{display: 'flex', justifyContent:'space-around',flexWrap: 'wrap'}}>
            {products.map((product,index) => (
              <div key={product.id} style={{border:'1px solid blue', textAlign:'center', margin:'10px', maxWidth: '350px'}}>
                <img src={files[index].link.href} alt={product.name} style={{width:'300px', height:'250px'}}></img>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.meta.display_price.with_tax.formatted}</p>
                <button onClick={this.addCart.bind(this,product.id)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button>CheckOut</button>
        </div>
  }
}

export default App;
