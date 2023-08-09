import React, { useState, useEffect } from 'react';

function Buy() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://54.174.115.213:3000/products', {
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Please Peruse our Produce!</h1>
      <div>
        {productsData.map(product => (
          <div key={product.id}>
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Price (€per kilo):</strong> {product.price}
            </p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buy;
