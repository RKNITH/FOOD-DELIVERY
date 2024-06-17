import { useState } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

function List({ url }) {

    const [list, setList] = useState([])
    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)


        if (response.data.success) {
            setList(response.data.data)

        }
        else {
            toast.error("Error")
        }
    }

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        }
        else {
            toast.error("Error")
        }


    }


    useEffect(() => {
        fetchList();

    }, [])


    return (
        <div className='list add flex-col'>
            <p>All FoodS List</p>
            <div className='list-table'>
                <div className='list-table-formate title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Price</b>
                    <b>Category</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-formate'>
                            <img src={`${url}/images/` + item.image} alt='img' />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => { removeFood(item._id) }} className='cursor'>X</p>

                        </div>
                    )

                })}

            </div>

        </div>
    )
}

export default List

