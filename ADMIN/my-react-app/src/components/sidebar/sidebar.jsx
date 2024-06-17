import { useState } from 'react'

import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    const [count, setCount] = useState(0)

    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/add' className='sidebar-option'>
                    <img src={assets.add_icon} alt="img1" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className='sidebar-option'>
                    <img src={assets.order_icon} alt="img1" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/order' className='sidebar-option'>
                    <img src={assets.order_icon} alt="img1" />
                    <p>Order</p>
                </NavLink>
            </div>

        </div>
    )
}

export default Sidebar
