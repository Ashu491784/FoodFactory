import React from "react";
import { ExtraCheese, ExtraSource, Largesize, SpicyLavel } from "../components/changefoodsDecorator";
import {foodmakeFactory, Pizza} from "../components/FoodmakeFactory";
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
       <div style={styles.container}>
      <h2>🍕 Customize Your Pizza</h2>

      <div style={styles.options}>
        <label>
          <input
            type="checkbox"
            checked={addCheese}
            onChange={(e) => setaddcheese(e.target.checked)}
          />
          Add Extra Cheese 🧀
        </label>

        <label>
          <input
            type="checkbox"
            checked={addLarge}
            onChange={(e) => setAddLarge(e.target.checked)}
          />
          Make it Large 🍽
        </label>

        <label>
          <input
            type="checkbox"
            checked={addSpicy}
            onChange={(e) => setaddSpicy(e.target.checked)}
          />
          Spicy Level 🌶
        </label>
      </div>

      <button onClick={handleDecorate} style={styles.button}>
        🍴 Build Pizza
      </button>

      {result && (
        <div style={styles.result}>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default FoodAddViews;