import { useContext } from 'react';
import './foodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/toContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);



    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img src={url + "/images/" + image} className='food-item-image' alt="food-image" />
                {
                    !cartItem[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='icon' /> : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='icon' />
                        <p>{cartItem[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='icon' />

                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='rating' />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>


        </div>

    )
}

export default FoodItem;
