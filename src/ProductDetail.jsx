import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: "1",
      name: "M·A·CStack Waterproof Mascara",
      price: "Rp. 430.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_SLEH01_1x1_0.png?width=1080&height=1080",
      variants: [
        "https://sdcdn.io/mac/us/mac_sku_SLEH01_1x1_0.png?width=1080&height=1080",
        "https://sdcdn.io/mac/us/mac_sku_SLEH01_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/us/mac_sku_SLEH01_1x1_2.png?width=1080&height=1080",
        "https://sdcdn.io/mac/us/mac_sku_SLEH01_1x1_3.png?width=1080&height=1080",
      ],
      description:
        "Our endlessly stackable mascara is now available in waterproof! Featuring a smudge-proof, 24-hour formula that stays put all day.",
    },
    {
      id: "2",
      name: "M.A.C Lustreglass Sheer-Shine Lipstick",
      price: "IDR 295.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_NW9M29_1x1_0.png?width=1080&height=1080",
      variants: [
        "https://sdcdn.io/mac/us/mac_sku_NW9M29_1x1_0.png?width=1080&height=1080",
        "https://sdcdn.io/mac/us/mac_sku_NW9M29_1x1_1.png?width=1080&height=1080",
        "https://sdcdn.io/mac/us/mac_sku_SMXF02_1x1_2.png?width=1080&height=1080",
        "https://sdcdn.io/mac/us/mac_sku_SMXF02_1x1_6.png?width=1080&height=1080",
      ],
      description:
        "A lightweight, raspberry seed- and organic extra-virgin olive oil-infused lipstick that delivers sheer and shiny colour with a long-wearing, lustrous finish.",
    },
    {
      id: "3", 
      name: "M.A.C Studio Radiance Foundation",
      price: "Rp. 980.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_SYP830_1x1_0.png?width=1080&height=1080",
        variants: [
          "https://sdcdn.io/mac/us/mac_sku_SYP830_1x1_1.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SYP830_1x1_2.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SYP830_1x1_3.png?width=1080&height=1080",
          "https://www.maccosmetics.com/media/export/cms/products/mac_sku_119586_1x1_3.png",
        ],
      description:
        "A buildable, weightless, 24-hour hydrating foundation that smooths texture, evens tone, and blurs the look of pores.​",
    },
    {
      id: "4",
      name: "M.A.C Setting Spray",
      price: "IDR 330.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_S0RQ01_1x1_0.png?width=1080&height=1080",
        variants: [
          "https://sdcdn.io/mac/us/mac_sku_S0RQ01_1x1_1.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_S0RQ01_1x1_3.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_S0RQ01_1x1_2.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_S0RQ01_1x1_4.png?width=1080&height=1080",
        ],
      description:
        "A nourishing skin mist that imparts all-day, ultra-hydration. Add a boost of radiance with vitamin C, hyaluronic acid and essential oils. Now with an all-new fine-mist pump!",
    },
    {
      id: "5",
      name: "M.A.C Skinfinish Bronzer",
      price: "Rp. 710.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_NY1505_1x1_0.png?width=1080&height=1080",
        variants: [
          "https://sdcdn.io/mac/us/mac_sku_NY0Y02_1x1_1.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_NY0Y02_1x1_2.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_NY0Y02_1x1_4.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_NY0Y02_1x1_3.png?width=1080&height=1080",
        ],
      description:
        "A dimensional radiant bronzing powder that adds warmth and glow, available in 5 Artist-crafted, colour-true shades.",
    },
    {
      id: "6",
      name: "M.A.C Smooth Wear Concealer",
      price: "IDR 500.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_SF4X02_1x1_0.png?width=1080&height=1080",
        variants: [
          "https://sdcdn.io/mac/us/mac_sku_SF4X02_1x1_0.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SF4X02_1x1_1.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SF4X02_1x1_2.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SF4X02_1x1_3.png?width=1080&height=1080",
        ],
      description:
        "A lightweight liquid concealer with a wand applicator that offers 24-hour wear with medium-to-full buildable coverage and a natural matte finish.",
    },
    {
      id: "7", 
      name: "M.A.C Sheertone Blush",
      price: "Rp. 490.000,00",
      mainImage:
        "https://sdcdn.io/mac/us/mac_sku_S61112_1x1_0.png?width=1080&height=1080",
        variants: [
          "https://sdcdn.io/mac/us/mac_sku_NYF203_1x1_1.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_NYF203_1x1_2.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_NYF203_1x1_3.png?width=1080&height=1080",
          "https://www.maccosmetics.com/media/export/cms/products/mac_sku_STNY13_01.png",
        ],
      description:
        "A bouncy, buildable blush that provides glowy colour in a lightweight formula with skin-conditioning ingredients.",
    },
    {
      id: "8",
      name: "M.A.C Pro Locked Brow Gel",
      price: "IDR 425.000,00",
      mainImage:
        "https://i.pinimg.com/564x/b3/dc/3a/b3dc3a0d4adf88e262cfb78663ed4348.jpg",
        variants: [
          "https://sdcdn.io/mac/us/mac_sku_SW2A01_1x1_1.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SW2A01_1x1_2.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SW2A01_1x1_3.png?width=1080&height=1080",
          "https://sdcdn.io/mac/us/mac_sku_SW2A01_1x1_4.png?width=1080&height=1080",
        ],
      description:
        "Velvet Petals is a warm, floral fragrance with a creamy soft touch. Delicately blended with hints of vanilla and almond, it provides an elegant fragrance experience...",
    },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleVariantClick = (image) => setSelectedImage(image);

  const currentImage = selectedImage || product.mainImage;

  return (
    <div>
      <header className="header">
        <div className="logo">Product Details</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <div className="product-detail">
        <div className="product-image">
          <img src={currentImage} alt={product.name} />
          {/* Variants moved below the main image */}
          <div className="product-variants">
            <h3>About Our Product</h3>
            <div className="variant-images">
              {product.variants.map((variantImage, index) => (
                <img
                  key={index}
                  src={variantImage}
                  alt={`Variant ${index + 1}`}
                  onClick={() => handleVariantClick(variantImage)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <div className="product-rating">Rating: ★★★★☆</div>

          <div className="product-shade">
            <label htmlFor="shade">Your Undertone:</label>
            <select id="shade">
              <option value="Cool">Cool</option>
              <option value="Neutral">Neutral</option>
              <option value="Warm">Warm</option>
            </select>
          </div>

          <div className="product-quantity">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>

          <div className="product-buttons">
            <button className="add-to-cart">Add To Bag</button>
            <button className="order-now">Try It On</button>
          </div>

          <div className="product-description">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
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

export default ProductDetail;
