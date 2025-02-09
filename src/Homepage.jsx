import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "M·A·CStack Waterproof Mascara",
      price: "Rp.430.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_SLEH01_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 2,
      name: "M.A.C Lustreglass Sheer-Shine Lipstick",
      price: "Rp.295.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_NW9M29_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 3,
      name: "M.A.C Studio Radiance Foundation",
      price: "Rp.980.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_SYP830_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 4,
      name: "M.A.C Fix+ Stay Over Alcohol Setting Spray",
      price: "Rp.330.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_S0RQ01_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 5,
      name: "M.A.C Skinfinish Bronzer",
      price: "Rp.710.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_NY0Y02_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 6,
      name: "M.A.C Smooth Wear Concealer",
      price: "Rp.500.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_SF4X02_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 7,
      name: "M.A.C Sheertone Blush",
      price: "Rp.490.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_S61112_1x1_0.png?width=1080&height=1080",
    },
    {
      id: 8,
      name: "M·A·C Pro Locked Brow Gel",
      price: "Rp.425.000,00",
      image: "https://sdcdn.io/mac/us/mac_sku_SW2A01_1x1_0.png?width=1080&height=1080",
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">M.A.C Official</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Card</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <div className="banner">
        <h1>Welcome to M.A.C Official</h1>
        <h2 className="t1">Make Your Look More Even Toned</h2>
      </div>

      <h2 className="t1">Our Collection</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => navigate(`/products/${product.id}`)}>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2024 M.A.C Official. All rights reserved.</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
