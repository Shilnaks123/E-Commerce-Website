import React from 'react'
import { Navbar,Container, Nav, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




function Header() {
  const cartCount = useSelector(state=>state.cartReducer).length
  return (
    <>
      <Navbar expand="lg" className="bg-warning ">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-dark fw-bolder' style={{textDecoration:'none'}}> <i className='fa-solid fa-cart-shopping me-1'></i>ShopSizzle</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/cart'} className='text-dark fw-bolder' style={{textDecoration:'none'}}><i style={{height:'17px'}} className= 'fa-solid fa-cart-plus text-info'></i> Cart <Badge bg='secondary'>{cartCount}</Badge>
            </Link></Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header