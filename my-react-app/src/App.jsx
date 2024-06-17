import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import PlaceOrder from './pages/placeOrder/placeOrder';
import { Route, Routes } from 'react-router-dom';
import Verify from './pages/verify/verify';
import MyOrders from './pages/myOrders/myOrders';

import './App.css';
import Footer from './components/footer/footer';
import Login from './components/login/login';

function App() {
  const [showLogin, setShowLogin] = useState(false)


  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>

      </div>
      <Footer />
    </div>



  )
}

export default App;
