import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [updatedProductData, setUpdatedProductData] = useState({
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    axios.get('http://54.174.115.213:3000/products', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        // error handling
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://54.174.115.213:3000/products/${id}`, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        // filter out the deleted items and show the remaining ones
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdate = (id) => {
    axios.put(`http://54.174.115.213:3000/products/${id}`, updatedProductData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // Update the state with the updated product
        setProducts(prevProducts => prevProducts.map(product => product.id === id ? response.data : product));
        // Reset the editing mode and updated data
        setEditProductId(null);
        setUpdatedProductData({
          name: '',
          description: '',
          price: ''
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProductData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const toggleEditMode = (id) => {
    setEditProductId(id);
    // this should show the current fata as placeholder text
    const productToEdit = products.find(product => product.id === id);
    if (productToEdit) {
      setUpdatedProductData({
        name: productToEdit.name,
        description: productToEdit.description,
        price: productToEdit.price
      });
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div id="products">
        {products.map(product => (
          <div key={product.id}>
            {editProductId === product.id ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={updatedProductData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="description"
                  value={updatedProductData.description}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="price"
                  value={updatedProductData.price}
                  onChange={handleInputChange}
                />
                <button onClick={() => handleUpdate(product.id)}>Save</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Name:</strong> {product.name}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Price (€per kilo)</strong> {product.price}
                </p>
                <p>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                  {' '}
                  <button onClick={() => toggleEditMode(product.id)}>Update</button>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
