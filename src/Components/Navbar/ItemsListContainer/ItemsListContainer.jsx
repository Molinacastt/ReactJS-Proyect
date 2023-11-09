import { useState, useEffect } from 'react'
import { getProducts } from '../../../asyncMock'
import ItemList from '../../ItemList/ItemList'



const ItemsListContainer = ({greeting}) => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>


    )

}

export default ItemsListContainer