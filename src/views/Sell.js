import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductsList from './ProductsList'

function Sell() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/products',
        { name, description, price: parseFloat(price) }, 
        { headers: { Accept: 'application/json' } }
      );

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }

  return (
    <div className="sell-container">
      <h1>Sell</h1>
      <label>
        Title:
        <input value={name} type="text" onChange={handleName} />
      </label>
      <br />
      <label>
        Description:
        <input value={description} type="text" onChange={handleDescription} />
      </label>
      <br />
      <label>
        Price (€per kilo):
        <input value={price} type="number" onChange={handlePrice} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Sell;
