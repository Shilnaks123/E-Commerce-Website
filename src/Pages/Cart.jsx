import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slice/cartSlice'



function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cartReducer)

 const hanldeDecrementQuantity = (product)=>{
    if(product.quantity>1){
    dispatch(decQuantity(product.id))
    }else{
   dispatch(removeCartItem(product.id))
    }
  }
  return (
    <>
    <div className='container' style={{marginTop:"100px"}}>
      
   {
    cartItems?.length>0?
    <div className="pt-5">
   
      <h1>Summary</h1>
       <div className="row mt-5">
    <div className="col-lg-8">
  <table className='table'>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
     cartItems?.map((product,index)=>(
      <tr>
      <td>{index+1}</td>
      <td>{product.title.slice(0,16)}...</td>
      <td><img width={'60px'} height={'60px'} src={product.image} alt="" /></td>
      <td>
        <div className='d-flex'>
        
        <button onClick={()=>hanldeDecrementQuantity(product)} className='btn'>-</button>
        <input value={product.quantity} style={{width:'50px'}} className='form-control'  type="text" placeholder='0' readOnly />
        <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bolder'>+</button>
        </div>
        </td>
      <td> ${product.totalPrice}</td>
      <td>
        <button onClick={()=>dispatch(removeCartItem(product.id))} className='btn'><i style={{height:'20px'}} className='fa-solid fa-trash text-primary'></i></button>
      </td>
    </tr>
     ))
      }
    </tbody>
  </table>
<div className='float-end mt-3'>
  <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>EMPTY CART</button>
  <Link  className='btn btn-danger ms-5' to={'/'} >Shop More</Link>
</div>
    </div>
      </div>
    </div>
    :
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center flex-column'> 
    <img className='img-fluid' width={'400px'} src="https://st2.depositphotos.com/4520249/7018/v/450/depositphotos_70183359-stock-illustration-empty-cart.jpg" alt="" />
    <h3 style={{height:'50px'}}>Oops!!! Empty Cart!!!</h3>
      </div>
      }
    </div>
    </>
  )
}

export default Cart