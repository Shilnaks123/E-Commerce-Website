import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, searchProduct } from '../REDUX/Slice/productSlice';



function Home() {
  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state=>state.productReducer)
  console.log(allProducts,error,loading);

  useEffect(()=>{
 dispatch(fetchProducts())
  },[])
  return (
    <>
    <div className="container mt-5 w-100">
    <div className="d-flex">
    <input onChange={(e)=>dispatch(searchProduct(e.target.value))} style={{width:'400px'}} type="text" className="d-flex justify-content-align-items-center form-control mb-5 pt-3" placeholder='Search!!!' />
    <button className='btn btn'></button>
         
        </div>
      <div className="header row align-items-center">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
         style={{width:'100%' ,height:'100vh'}}  className="d-block "
          src="https://www.jagranimages.com/images/newimg/04072023/04_07_2023-best_lakme_products__23461161.webp"
          alt=""
        />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Super Sale Offers</h3>
          <p style={{color:"white"}}>Cosmetics under 1000</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:'100%' ,height:'100vh'}} className="d-block w-100"
          src="https://www.thekarighars.com/wp-content/uploads/2023/07/home-decor-items-list.png"
          alt=""
        />
        <Carousel.Caption>
        <h3 style={{color:"white"}}>Furnitures</h3>
          <p style={{color:"white"}}>Furnitures under 10000</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{width:'100%' ,height:'100vh'}} className="d-block w-100 "
          src="https://previews.123rf.com/images/gmast3r/gmast3r1710/gmast3r171002170/88646835-black-friday-sale-template-horizontal-banner-discounts-on-modern-smart-phones-poster-design-vector.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Phones</h3>
          <p style={{color:"white"}}>
            Mega Offers!!!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className="products">
          <h3 style={{height:'100px'}} className='text-center pt-5'>Top Selection</h3>
          <div className='row mt-5'>
           <div className='col-lg-4'>
          
           <Card >
      <Card.Img  height={'300px'} variant="top" src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016239596_437Wx649H_202302071203501.jpeg" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>One Plus Earbuds</Card.Title>
        
      </Card.Body>
    </Card>
           </div>
           <div className='col-lg-4'>
           <Card >
      <Card.Img  height={'300px'} variant="top" src="https://www.apple.com/v/iphone/home/bu/images/meta/iphone__ky2k6x5u6vue_og.png" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Iphones</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
           </div>
           <div className='col-lg-4'>
           <Card >
      <Card.Img height={'300px'} variant="top" src="https://assets.ajio.com/medias/sys_master/root/20231212/ZQsS/65784b2cddf7791519c67383/-473Wx593H-466877358-white-MODEL.jpg" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Flare Dress Womens</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
    </Card>
   

    
           </div>
       {loading?<div className='mt-5 text-center fw-bolder'> <Spinner animation="border" variant="danger" className='me-2' /> Loading...</div>
       :
        <Row>
        
       { allProducts?.length>0?
        allProducts?.map(product=>(
          <Col className='mb-5' style={{marginTop:"100px"}} sm={12} md={6} lg={4} xl={3}>  
    <Card className='shadow rounded' style={{ width: '18rem' }}>
      <Card.Img 
      style={{height:"180px"}} 
      variant="top"
       src={product?.image} 
       />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,15)}...</Card.Title>
       <div className='text-center mt-4'>
         <Link to={`/watch/${product?.id}`} variant="secondary">Click Here...</Link></div>
      </Card.Body>
    </Card>
        </Col>
        )):
        <div className='fw-bolder text-primary text-center mt-5 mb-5 fs-4'>Nothing to display!!!</div>
        }
        </Row>
        }
    
        
          
          </div>
        </div>
     </div>
     <hr/>
    </>
  )
}

export default Home