import './style.css'

import StepsHeader from './StepsHeader'
import ProductsList from './ProductList'
function Orders() {
    return (
        <div className="order-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}

export default Orders;