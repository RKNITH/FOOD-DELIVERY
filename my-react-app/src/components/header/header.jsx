import { useState } from 'react';
import './header.css'


function Header() {
    const [count, setCount] = useState(0)

    return (
        <div className='header'>
            <div className='header-content'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finestingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>View Menu</button>
            </div>

        </div>

    )
}

export default Header;
