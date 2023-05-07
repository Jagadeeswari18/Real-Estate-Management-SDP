import React, { useState } from 'react';
import Recent from '../home/recent/Recent';
const AddPropertyForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProperty = {
      name,
      location,
      price,
      type,
      category: 'For Sale',
      cover: 'https://via.placeholder.com/300',
    };

    onAdd(newProperty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Property</h2>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor='location'>Location</label>
        <input type='text' id='location' value={location} onChange={(event) => setLocation(event.target.value)} />
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input type='text' id='price' value={price} onChange={(event) => setPrice(event.target.value)} />
      </div>
      <div>
        <label htmlFor='type'>Type</label>
        <input type='text' id='type' value={type} onChange={(event) => setType(event.target.value)} />
      </div>
      <button type='submit'>Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
