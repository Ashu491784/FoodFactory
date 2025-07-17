import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Layouts/Dasgboard';
import FoodOrderItemss from './Layouts/foods';
import FoodAddViews from './Layouts/Additional';
const App = () => {
  
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path='/foodOrderItemss' element={<FoodOrderItemss />} />
    <Route path='/foodAddViews' element={<FoodAddViews />} />
  </Routes>
  </BrowserRouter>
  )
   
};

export default App;