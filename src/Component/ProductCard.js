import React from 'react';
import './ProductCard.css'

const ProductCard = ({ id, img }) => {
  return (
    <div key={id} className="product-card">
        <div className="card-image">
            <img src={img}/>
        </div>
    </div>
  );
};

export default ProductCard;
