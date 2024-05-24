import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../REDUX/Slice/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Watch() {
  const  cart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [product,setproduct] = useState({})
  const {id} =useParams()
  console.log(id);

  useEffect(()=>{
if(sessionStorage.getItem("allProducts")){
  const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
  //console.log(allProducts);
  setproduct(allProducts.find(item=>item.id==id))
 }
  },[])
  console.log(product);

  const handleCart =(product)=>{
    const exisitingProduct =cart?.find(item=>item.id==product.id)
   if (exisitingProduct){
    dispatch(addToCart(product))
   toast.dark("products added to your cart!!!")
   }else{
    dispatch(addToCart(product))
    toast.dark("product added to your cart!!!")
   }
   }
  return (
    <>
 
    <div style={{marginTop:"100px"}} className='container d-flex aligm-items-center'>
      <div className="row mb-5 aligm-items-center">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img width={'400px'} height={'300px'} className='imag-fluid' src={product?.image} alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div  className="col-lg-6">
          <h1>{product?.title}</h1>
          <h3>${product?.price}</h3>
          <p  style={{textAlign:'justify'}}> <b>Description</b> :{product?.description}</p>
         <div className='d-flex' >
          
            <button onClick={()=>handleCart(product)} className='btn btn-outline-light'>Add To Cart</button>
  
         </div>
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
   
  )
}

export default Watch