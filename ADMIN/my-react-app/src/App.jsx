import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/add'
import List from './pages/list/list'
import Order from './pages/order/order'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = 'http://localhost:3000'

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
