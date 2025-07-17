import {Order, OrderState, ConfirmStatus, PreparingState, ReadyState, DeliverState} from '../components/OrderState';
import { useState } from 'react';

const  OrderStatesViews = () => {
    const [orderState, setOrderState] = useState("");
    const [order] = useState(() => new Order(setOrderState));

    const statuesColour = {
        Confirm: "bg-green-500",
        Preparing: "bg-yellow-500",
        Ready: "bg-blue-500",
        Deliver: "bg-red-500",
    }
    const handleOrdersNext = () => {
        order.nextState();
        setOrderState(order.getStatus());
    };
    return(
         <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl text-center space-y-6">
      <h2 className="text-2xl font-bold">🚚 Order Tracker</h2>

      <div className="flex flex-col items-center">
        <div
          className={`w-40 h-40 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-lg transition-all duration-300 ${statuesColour[orderState]}`}>
          {orderState}
        </div>

        <div className="mt-6 space-x-2">
          <button onClick={handleOrdersNext} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow transition duration-300 disabled:bg-gray-400"
            disabled={orderState === "Deliver"}> Next ➡️</button>
        </div>
      </div>
    </div>
    )
}
export default OrderStatesViews;