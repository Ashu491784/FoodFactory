import React, { useState } from 'react';
import { FoodFactory } from '../components/FoodmakeFactory';
import cartInstance from '../components/CardSingleton';
import { ExtraCheese, ExtraSource, SpicyLavel, Largesize } from '../components/changefoodsDecorator';
import { Link } from 'react-router-dom';



const FoodViewCard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const foodData = [
    FoodFactory.createFood("Pizza", "🍕", 1200),
    FoodFactory.createFood("Burger", "🍔", 950),
    FoodFactory.createFood("Hotdog", "🌭", 850),
    FoodFactory.createFood("Juice", "🧃", 500),
  ];

  const toggleExtra = (extra) => {
    setSelectedExtras(prev =>
      prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
    );
  };

  const applyExtras = (foodItem) => {
    let decorated = foodItem;
    selectedExtras.forEach(extra => {
      switch (extra) {
        case 'cheese':
          decorated = new ExtraCheese(decorated);
          break;
        case 'sauce':
          decorated = new ExtraSource(decorated);
          break;
        case 'spicy':
          decorated = new SpicyLavel(decorated);
          break;
        case 'large':
          decorated = new Largesize(decorated);
          break;
        default:
          break;
      }
    });
    return decorated;
  };

  const handleAdd = (foodItem) => {
    const finalItem = applyExtras(foodItem);
    cartInstance.addItem(finalItem);

    const updatedItems = cartInstance.getItems();
    setCartItems([...updatedItems]);

    const newTotal = updatedItems.reduce((sum, item) => sum + item.getPrice(), 0);
    setTotal(newTotal);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">🍽️ Order Your Food</h1>


      <div className="flex gap-4 flex-wrap justify-center">
        <label className="flex items-center gap-1 cursor-pointer select-none">
          <input type="checkbox" onChange={() => toggleExtra('cheese')} checked={selectedExtras.includes('cheese')} />
          Extra Cheese (+150)
        </label>
        <label className="flex items-center gap-1 cursor-pointer select-none">
          <input type="checkbox" onChange={() => toggleExtra('sauce')} checked={selectedExtras.includes('sauce')} />
          Extra Sauce (+100)
        </label>
        <label className="flex items-center gap-1 cursor-pointer select-none">
          <input type="checkbox" onChange={() => toggleExtra('spicy')} checked={selectedExtras.includes('spicy')} />
          Spicy Level (+50)
        </label>
        <label className="flex items-center gap-1 cursor-pointer select-none">
          <input type="checkbox" onChange={() => toggleExtra('large')} checked={selectedExtras.includes('large')} />
          Large Size (+200)
        </label>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {foodData.map((item, i) => (
          <div key={i} onClick={() => handleAdd(item)} className="cursor-pointer bg-white rounded-xl p-4 shadow hover:scale-105 transition transform duration-300"
            title={`Click to add ${item.getName()} with selected extras`}>
            <div className="text-4xl text-center">{item.getImage()}</div>
            <h3 className="text-lg font-semibold text-center mt-2">{item.getName()}</h3>
            <p className="text-sm text-center text-gray-600">Rs.{item.getPrice()}</p>
          </div>
        ))}
      </div>

   
      <div className="bg-white rounded-xl shadow-md p-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🧾 Your Bill</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, i) => (
              <li key={i} className="flex justify-between text-gray-700 border-b pb-1">
                <span>{item.getInfo()}</span>
                <span>Rs.{item.getPrice()}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="text-right font-bold text-xl text-gray-900">
          Total: Rs.{total}
        </div>
        <Link to="/PaymentComponents">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mt-4">Checkout</button>
        </Link>
        
      </div>
    </div>
  );
};

export default FoodViewCard;
