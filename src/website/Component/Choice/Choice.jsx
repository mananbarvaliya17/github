import React, { useEffect } from 'react'
import './Choice.css'
import axios from 'axios'


const Choice = () => {

    // const [DataValue, setDataValue] = useState([]);

    // console.log(DataValue);

    // useEffect(() => {

    //     const data = async () => {
    //         try {
    //             const ProductData = await axios.get('https://dummyjson.com/products');
    //             setDataValue(ProductData.data.products);
    //         } catch (error) {
    //             console.log("show error to = ", error);
    //         }
    //     }
        // data();
    // }, []);

    return (
        <div>
            {/* {ProductData.map((i) => { */}
                <div className='Choice-box' >
                    <div className='data-box'>

                        <div className='img-box' >
                            {/* <img src={DataValue.thumbnail} /> */}
                        </div>

                        <div className='img-choice'>
                            <div className='img-circle'>
                                {/* <img src={DataValue.images} /> */}
                            </div>
                        </div>

                    </div>

                    <div className='data-box'>

                    </div>
                </div>
            {/* })} */}
        </div>
    )
}

export default Choice


// import React, { useEffect, useState } from 'react';
// import './Choice.css';
// import axios from 'axios';

// const Choice = () => {
//   const [DataValue, setDataValue] = useState([]);
//   const [indexToShow, setIndexToShow] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ProductData = await axios.get('https://dummyjson.com/products');
//         setDataValue(ProductData.data.products);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleToggle = () => {
//     setIndexToShow(prev => (prev === 0 ? 1 : 0));
//   };

//   return (
//     <div>
//       <button onClick={handleToggle}>Toggle Product</button>

//       {DataValue.length > indexToShow && (
//         <div className='Choice-box' key={DataValue[indexToShow].id}>
//           <div className='data-box'>
//             <div className='img-box'>
//               <img src={DataValue[indexToShow].thumbnail} alt="thumbnail" />
//             </div>

//             <div className='img-choice'>
//               {DataValue[indexToShow].images.slice(0, 5).map((img, i) => (
//                 <div className='img-circle' key={i}>
//                   <img src={img} alt={`img-${i}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Choice;
    