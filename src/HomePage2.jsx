import React, { Component } from "react";

class HomePage2 extends Component {
  render() {
    return (
      <div className='homepage'>
        <header className='header'>
          <div className='logo'>E-Commerce</div>
          <nav className='nav'>
            <a href='/'>Home</a>
            <a href='/products'>Products</a>
            <a href='/cart'>Cart</a>
            <a href='/login'>Login</a>
          </nav>
        </header>

        <div className='banner'>
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Find the best products at the best prices!</p>
        </div>

        <h2>Featured Products</h2>
        <div className='product-list'>
          {/* Product 1 */}
          <div className='product-card'>
            <img src='https://via.placeholder.com/150' alt='Product 1' />
            <div className='product-info'>
              <h3>Product 1</h3>
              <p>$29.99</p>
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className='product-card'>
            <img src='https://via.placeholder.com/150' alt='Product 2' />
            <div className='product-info'>
              <h3>Product 2</h3>
              <p>$39.99</p>
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 3 */}
          <div className='product-card'>
            <img src='https://via.placeholder.com/150' alt='Product 3' />
            <div className='product-info'>
              <h3>Product 3</h3>
              <p>$19.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>

        <footer className='footer'>
          <p>&copy; 2024 E-Commerce. All rights reserved.</p>
          <div className='social-media'>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;