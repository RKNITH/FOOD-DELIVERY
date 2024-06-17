import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/toContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")





    }

    return (
        <div className='navbar'>
            <Link to={'/'}><img src={assets.logo} alt='logo' className='logo' /> </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home </Link>
                <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("Mobile App")} className={menu === "Mobile App" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='search-icon' />
                <div className='navbar-search-icon'>
                    <Link to={'/cart'}><img src={assets.basket_icon} alt='basket' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> :
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="img1" />
                        <ul className='nav-profile-dropdown'>
                            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt='img1' /><p>Orders</p> </li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt='img1' /><p>Logout</p></li>

                        </ul>

                    </div>}

            </div>
        </div>
    );
}

export default Navbar;
