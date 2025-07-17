import React, { useState } from 'react';
import { FoodmakeFactory, FoodFctory } from '../components/FoodmakeFactory';
import cartInstance from '../components/CardSingleton';

const FoodViewCard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const foodData = [
    { name: 'Pizza', image: '🍕', price: 400 },
    { name: 'Burger', image: '🍔', price: 250 },
    { name: 'Hotdog', image: '🌭', price: 300 },
    { name: 'Juice', image: '🥤', price: 150 },
  ];

  const handleAdd = ({ name, image, price }) => {
    const foodItem = FoodFctory.createFood(name, image, price);
    cartInstance.addItem(foodItem);
    setCartItems([...cartInstance.getItems()]);
    setTotal(cartInstance.getTotal());
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">🍽️ Order Your Food</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {foodData.map((item, i) => (
          <div
            key={i}
            onClick={() => handleAdd(item)}
            className="cursor-pointer bg-white rounded-xl p-4 shadow hover:scale-105 transition"
          >
            <div className="text-4xl text-center">{item.image}</div>
            <h3 className="text-lg font-semibold text-center mt-2">{item.name}</h3>
            <p className="text-sm text-center text-gray-600">Rs.{item.price}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🧾 Your Bill</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <ul className="space-y-2 mb-4">
            {cartItems.map((item, i) => (
              <li key={i} className="flex justify-between text-gray-700 border-b pb-1">
                <span>{item.name}</span>
                <span>Rs.{item.price}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="text-right font-bold text-xl text-gray-900">
          Total: Rs.{total}
        </div>
      </div>
    </div>
  );
};

export default FoodViewCard;
