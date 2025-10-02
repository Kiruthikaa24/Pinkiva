import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ProductPage.css";
import offerZoneImage from "../assets/images/OfferImage.png"; // Make sure to place the uploaded image here

function Offers() {
  const navigate = useNavigate();

  // Sample offer products
  const products = [
    {
      id: 1,
      name: "Glow Foundation",
      price: "₹799",
      offerPrice: "₹599",
      image:
        "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43247%2F43247_1.png&id=18141969&version=3",
    },
    {
      id: 2,
      name: "Matte Lipstick",
      price: "₹499",
      offerPrice: "₹349",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzgyj3zX3sD7I1t3MT5bXtMzCZ29Fb-t0uA&s",
    },
    {
      id: 3,
      name: "Hydrating Serum",
      price: "₹1199",
      offerPrice: "₹899",
      image:
        "https://wikka.in/cdn/shop/files/81FOlne1pPL._SL1500.jpg?v=1744348407&width=1946",
    },
    {
      id: 4,
      name: "Perfume kit",
      price: "₹299",
      offerPrice: "₹199",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdpkYJS78sJg-5Z2JqEe7sWdyqRGRrbgQ1w&s",
    },
    {
      id: 5,
      name: "Face Primer",
      price: "₹899",
      offerPrice: "₹649",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20250221/OkoU/67b812eb2960820c499aa0cb/-473Wx593H-4912993080-makeupprimer-MODEL.jpg",
    },
  ];

  // State for quantity of each product
  const [quantities, setQuantities] = useState(products.map(() => 1));

  // Increment
  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Decrement
  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  // Buy Now → redirect to cart with product + qty
  const handleBuyNow = (product, qty) => {
    // You can also save product info in localStorage / global state
    localStorage.setItem("cartItem", JSON.stringify({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <div className="product-grid">
      {products.map((product, idx) => (
        <div className="product-card" key={idx}>
          <img src={product.image} alt={product.name} />
          <h5>{product.name}</h5>
          <p>
            <span className="original-price">{product.price}</span> &nbsp;
            <span className="offer-price">{product.offerPrice}</span>
          </p>

          {/* Quantity buttons */}
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(idx)}>-</button>
            <span>{quantities[idx]}</span>
            <button onClick={() => handleIncrement(idx)}>+</button>
          </div>

          {/* Buy Now */}
          <button
            className="buy-now-button"
            onClick={() => handleBuyNow(product, quantities[idx])}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Offers;



