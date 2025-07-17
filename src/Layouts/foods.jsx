import React from 'react';
import { FoodmakeFactory, FoodFactory } from '../components/FoodmakeFactory';
import { Link } from 'react-router-dom';

const foodData = [
  { name: 'Pizza', image: '/public/images/pizza.webp', price: 1200 },
  { name: 'Burger', image: '/public/images/burger.avif', price: 900 },
  { name: 'Hotdog', image: '/public/images/hotdog.webp', price: 700 },
  { name: 'Juice', image: '/public/images/juice.webp', price: 400 }
];
const FoodOrderItemss = () => {
const foodItems = foodData.map(FoodmakeFactory => FoodFactory.createFood(FoodmakeFactory.name, FoodmakeFactory.image, FoodmakeFactory.price));

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">🍴 Our Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {foodItems.map((item, index) => {
          const prepared = item.prepare(); 
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={prepared.image} alt={prepared.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{prepared.name}</h2>
                <p className="text-gray-600 text-lg mt-2">Rs. {prepared.price}.00</p>
               <Link to="/FoodViewCard">
               <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mt-4" >Buy Now</button>
               </Link> 
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodOrderItemss;
