import { useEffect, useState } from 'react'
import './add.css'
import { Form } from 'react-router-dom'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

function Add({ url }) {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"

    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)

        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"

            })
            setImage(false)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)

        }

    }

    useEffect(() => {
        console.log(data);

    }, [data])





    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='img1' />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>



                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='type here' />
                </div>


                <div className='add-product-description flex-col'>
                    <p>Add description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='write content here' ></textarea>
                </div>

                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value='Salad'>Salad</option>
                            <option value='Rolls'>Rolls</option>
                            <option value='Desert'>Desert</option>
                            <option value='Sandwich'>Sandwich</option>
                            <option value='Cake'>Cake</option>
                            <option value='Pure Veg'>Pure Veg</option>
                            <option value='Pasta'>Pasta</option>
                            <option value='Noodle'>Noodle</option>
                        </select>
                    </div>

                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20' />
                    </div>

                </div>
                <button type='submit' className='add-btn'>Add</button>





            </form>

        </div>
    )
}

export default Add
