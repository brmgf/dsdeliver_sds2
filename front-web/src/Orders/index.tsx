import './style.css'
import StepsHeader from './StepsHeader'
import ProductsList from './ProductList'
import {useEffect, useState} from 'react'
import { Product } from './type';
import { fetchProducts } from '../api';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => console.log(error))
    }, []);
    
    return (
        <div className="order-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;