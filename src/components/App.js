import React, { Component } from 'react';
import { GetAllProducts, AddtoCart } from '../utils/moltin.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cart from './Cart'
import Checkout from './Checkout'
import { Container, ItemContainer, Button, Image } from './StyledComponents'

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
          <h1>My-Store</h1>
            <Route exact path='/' render={(props) => (
              <div>
              <Link to='/cart' style={{left: '50%'}}>
              My Cart
              </Link>
              <Container>
              {products.map((product,index) => (
                <ItemContainer key={product.id}>
                <Image src={files[index].link.href} alt={product.name}  />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p><strong>{product.meta.display_price.with_tax.formatted}</strong></p>
                <Button onClick={this.addCart.bind(this,product.id)}>Add to Cart</Button>
                <p>* Product quantity limited to 4 per user</p>
                </ItemContainer>
              ))}
              </Container>
              </div>
            )} />
            <Route path='/cart' component={Cart} />
            <Route path='/checkout' component={Checkout} />
          </div>
        </Router>
  }
}

export default App;
