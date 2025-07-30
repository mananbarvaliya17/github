// import React, { useEffect, useState } from 'react'
// import './Choice.css'
// import axios from 'axios'
// import { useParams } from 'react-router-dom';

// const Choice = () => {

//     const { id } = useParams();
//     const [products, setProducts] = useState([]);
//     // const [Data, setData] = useState([])
//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://dummyjson.com/products');
//                 setProducts(response.data.products);
//             } catch (error) {
//                 console.error('Error  products:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Selected Product ID: {id}</h1>
//             <div className='Choice-box' >
//                 <div className='data-box'>

//                     <div className='img-box' >
//                         <img src={product.thumbnail}/>
//                     </div>

//                     <div className='img-choice'>
//                         <div className='img-circle'>
//                             <img src={product.images}/>
//                         </div>
//                     </div>

//                 </div>

//                 <div className='data-print'>
//                     <h1>Product name :-</h1>
//                     <p>Price :-</p>
//                     <p>Rating :-</p>
//                     <p>Catagery :-</p>
//                     <p>Stock :-</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Choice

import React, { useEffect, useState } from 'react';
import './Choice.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Choice = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(); 
    const [error, setError] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to fetch product data');
                console.error('Error:', err);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return 

    return (
        <div>
            <div className='Choice-box'>
                <div className='data-box'>
                    <div className='img-box'>
                        <img src={product.thumbnail} alt={product.title} />
                    </div>

                    <div className='img-choice'>
                        {product.images.slice(0, 4).map((img, index) => (
                            <div className='img-circle' key={index}>
                                <img src={img} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='data-print'>
                    <h1>Product Name: {product.title}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Category: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Product id : {id}</p>
                    <button>Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Choice;

