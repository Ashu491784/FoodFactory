import React from "react";
import { ExtraCheese, ExtraSource, Largesize, SpicyLavel } from "../components/changefoodsDecorator";
import {FoodmakeFactory, Pizza} from "../components/FoodmakeFactory";
import { useState } from "react";

const FoodAddViews = () => {
    const [addCheese, setaddcheese] = useState(false);
    const [addSource, setaddSource] = useState(false);
    const [addLargesize, setaddLargesize] = useState(false);
    const [addSpicy, setaddSpicy] = useState(false);

    const handleDisign = () => {
        let items = new Pizza();

        if(addCheese) items = new ExtraCheese(items);
        if(addSource) items = new ExtraSource(items);
        if(addLargesize) items = new Largesize(items);
        if(addSpicy) items = new SpicyLavel(items);

        const info = items.getInfo();
        const prep = items.prepare();
        setResult(`${info}\n${prep}`);

    }
    return (
       <div className="p-20 max-w-xl mx-auto bg-white dark:bg-gray-700 rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">🥦Customize Your Foods🧊</h2>

      <div className="space-y-4">
        <label className="flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-200">
          <input type="checkbox" checked={addCheese} onChange={(e) => setaddcheese(e.target.checked)} className="accent-yellow-500 scale-125 transition-transform duration-300"/>
              <span>Add Extra Cheese 🧀</span> 
        </label>
    <label className="flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-200">
        <input type="checkbox" checked={addLargesize} onChange={(e) => setaddLargesize(e.target.checked)} className="accent-yellow-500 space-y-4 scale-125 transition-transform duration-300"/>
            <span>Make it Large 🍽 </span></label>
        <label className="flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-200">
          <input type="checkbox" checked={addSpicy} onChange={(e) => setaddSpicy(e.target.checked)} className="accent-yellow-500 scale-125 transition-transform duration-300"/>
         <span>Spicy Level 🌶</span> 
       </label>
      </div>

      <button onClick={handleDisign} className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">🍴Cook</button>

      {/* {result && (
        <div>
          <pre>{result}</pre>
        </div>
      )} */}
    </div>
  );
};

export default FoodAddViews;