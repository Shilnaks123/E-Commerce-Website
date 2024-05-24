
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Watch from './Pages/Watch'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'


function App() {
  

  return (
    <>
    <Header/>
   <Routes>
    <Route path='/'element={<Home/>} />
    <Route path='/cart'element={<Cart/>} />
    <Route path='/watch/:id'element={<Watch/>} />
    <Route path='/*' element={<Navigate to={'/'}/>}/>
    
    
   </Routes>
   <Footer/>
    </>
  )
}

export default App
