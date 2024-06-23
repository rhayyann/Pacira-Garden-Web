import React, { useRef } from 'react';
import './Gallery.css';
import products from '../Assets/mockData/products';
import ProductCard from '../Component/ProductCard';

function Gallery() {
  const selectedProductIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedProducts = selectedProductIndices.map((index) => products[index]);

  const productWrapperRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 1000; // Adjust the scroll amount as needed
    const wrapper = productWrapperRef.current;

    if (wrapper) {
      if (direction === 'left') {
        wrapper.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        wrapper.scrollLeft += scrollAmount;
      }
    }
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=%2B6285398012141&text&type=phone_number&app_absent=0';
  };

  return (
    <div className="gallery-container" id="Gallery">
      <div className="gallery-wrapper">
        <div className="row1">
          <h1>Gallery Project</h1>
        </div>
        <div className="row2">
          <i className="fa-solid fa-circle-chevron-left icon" onClick={() => handleScroll('left')}></i>
          <i className="fa-solid fa-circle-chevron-right icon" onClick={() => handleScroll('right')}></i>
        </div>
        <div className="row3">
          <div className="product-card-wrapper" ref={productWrapperRef} style={{ scrollBehavior: 'smooth' }}>
            {selectedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div className="row4">
          <button onClick={handleWhatsAppClick}><i className="fa-brands fa-whatsapp"></i>Buy On Whatsapp</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
