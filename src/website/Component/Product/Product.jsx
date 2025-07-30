import React, { useEffect, useState } from 'react';
import './Product.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Choice from '../Choice/Choice';

const Product = () => {

  const [products, setProducts] = useState([]);
  const [Add, setAdd] = useState(0);

  const Navigat = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.log('Error  products:', error);
      }
    };

    fetchData();
  }, []);


  console.log(Navigat)
  const handlRout = (id) =>{
      Navigat(`/Product/${id}`);
  }

  return (
    <div>
      <div className='card-product'>
        <h1>product data : {Add}</h1>
        <input type='text' placeholder='Search Your Product :'  list="category-options" />
        <datalist id="category-options">
          <option value="Beauty" />
          <option value="Food" />
          {/* <option value="Food" /> */}
        </datalist>
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
              <button onClick={()=>handlRout(product?.id)}>show</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
