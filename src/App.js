import React, { useState } from 'react';
import './App.css';

import AccordianContainer from './Component/AccordianContainer/AccordianContainer';

const App = () => {
  return (
    <div className="App">
        <div className='shipping_zone_container'>
          <div className="shipping_zone_container_header">
            <h6>Shipping To</h6>
          </div>
          <div className="shipping_zone_container_btn">
            <button className="btn_create_shipping_zone">Create Shipping Zone</button>
          </div>
        </div>
        <AccordianContainer />
    </div>
  );
}

export default App