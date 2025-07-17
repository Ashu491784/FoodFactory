import React, { useState } from "react";
import { FoodFctory } from "../components/FoodmakeFactory";

const foodOrderItemss = () => {
    const [output, setoutput] = useState("");

    const handleOrder = (type) => {
        try{
            const item = FoodFctory.createFood(type);
            setoutput(`${item.getInfo()} | ${item.prepare()}`);

        }catch(error){
            setoutput(error.message);
        }
    };
    return (
        <>
            <div>
                <button onClick={() => handleOrder("pizza")}>Order Pizza</button>
                <button onClick={() => handleOrder("burger")}>Order Burger</button>
                <button onClick={() => handleOrder("hotdog")}>Order Hotdog</button>
                <button onClick={() => handleOrder("juice")}>Order Juice</button>
            </div>
            <div>{output}</div>
        </>
    )
}

export default foodOrderItemss;