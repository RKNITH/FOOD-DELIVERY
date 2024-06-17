import { useState } from 'react'
import { assets } from '../../assets/assets'

import './navbar.css'

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <div className='navbar'>
            <img className='logo' src={assets.logo} alt='img1' />
            <img className='profile' src={assets.profile_image} alt='img1' />

        </div>
    )
}

export default Navbar
