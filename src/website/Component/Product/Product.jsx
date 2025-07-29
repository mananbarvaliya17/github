import React, { useEffect, useState } from 'react';
import './Product.css';
import axios from 'axios';

const Product = () => {

  const [products, setProducts] = useState([]);
  const [Add, setAdd] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error  products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='card-product'>
        <h1>product data : {Add}</h1>
      </div>
      <div className='card-container'>
        {products.map((product, i) => (
          <div className='card' key={i}>
            <div className='card-img'>
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <h1>{product.title}</h1>
            <p>product price :- {product.price}</p>
            <div className='card-button'>
              <button onClick={() => { setAdd(Add + 1) }}>Add</button>
              <button onClick={() => { Add > 0 ? setAdd(Add - 1) : setAdd(0) }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
