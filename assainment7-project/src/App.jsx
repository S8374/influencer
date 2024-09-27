import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import SingleProduct from './SingleProduct';

function App() {
   const [products , setProducts] = useState([]);
   const [cart , setCart] = useState([]);
  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

const handelCart = (p) => {
  console.log(p) ;
  // array ar modha rakhci  noyto direct object set hoiya jaito
  // setCart([p]) ;
  const isExist = cart.find(pd =>  pd.id == p.id) ;
  if(!isExist){
    setCart([...cart,p])
  }
  else{
    alert('already in cart')
  }
}


const handleDelete = (id) => {
  console.log(id);
  const newCart = cart.filter(item => item.id != id ) ;
  console.log(newCart); 
  setCart(newCart)
}
  return (
    <>
   
     <div className="main-container flex justify-center justify-evenly">
         <div className="card-container">
          {
            products.map((product , idx) => <SingleProduct key={idx} handelCart = {handelCart} product = {product} ></SingleProduct>)
          }

         </div>
         <div className="cart-container">
           <h1 className='text-5xl font-bold'>This is cart</h1>
           <div className="cart-tittle flex justify-around">
               <h4>Name</h4>
               <h4>Price</h4>
           </div>
           <div>
               {
                      cart.map((car) => (

                        <div key={car.id} className="cart-tittle flex justify-around">
                        <h4>{car.title}</h4>
                        <h4>{car.price}</h4>
                        <button onClick={()=>handleDelete(car.id)}>Delete</button>
                    </div>
                      ))
               }
           </div>
         </div>
     </div>

    
    </>
  )
}

export default App
