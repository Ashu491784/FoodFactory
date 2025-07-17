import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Layouts/Dasgboard';
import FoodOrderItemss from './Layouts/foods';
import FoodAddViews from './Layouts/Additional';
import OrderStatesViews from './Layouts/orderStatesview';
import PaymentComponents from './Layouts/PaymentView';
import FoodViewCard from './Layouts/Cardview';
import Login from './Layouts/login';
import Register from './Layouts/register';
const App = () => {
  
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path='/foodOrderItemss' element={<FoodOrderItemss />} />
    <Route path='/foodAddViews' element={<FoodAddViews />} />
    <Route path='/OrderStatesViews' element={<OrderStatesViews />} />
    <Route path='/PaymentComponents' element={<PaymentComponents />} />
    <Route path='/FoodViewCard' element={<FoodViewCard />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
  </Routes>
  </BrowserRouter>
  )
   
};

export default App;