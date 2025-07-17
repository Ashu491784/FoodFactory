import {Order, OrderState} from '../components/OrderState';
import { useState } from 'react';

const  OrderStatesViews = () => {
    const [orderState, setOrderState] = useState("");
    const [order] = useState(() => new Order(setOrderState));

    const handleOrdersNext = () => {
        order.nextState();
    };
    return(
        <div>
            <h2>Order Status Track...</h2>
            <div>
                <span>{orderState}</span>
            </div>
            <button onClick={handleOrdersNext}>Next Order</button>
        </div>
    )
}