import React, { Component } from 'react';
import { GetAllProducts } from '../moltin.js'

class App extends Component {
  state = {
    products: [],
    loading: true
  };

  async componentDidMount() {
    const AllProducts = await GetAllProducts
    this.setState({
      products: [...AllProducts.data],
      loading: false
    })
    console.log(AllProducts)
  };

  render() {
    const { products, files, loading } = this.state;
      console.log(products, 'state')
      console.log(files)
    return loading === true
      ? <h1>Loading</h1>
      : <div style={{display: 'flex', justifyContent:'space-around'}}>
          {products.map(product => (
            <div key={product.id}>
              <img src={product.relationships.main_image.data.id} alt={product.name}></img>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.meta.display_price.with_tax.formatted}</p>
              <button>CheckOut</button>
            </div>
          ))}
        </div>
  }
}

export default App;
