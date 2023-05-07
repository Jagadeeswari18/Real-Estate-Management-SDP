import React, { useState } from "react"
import { list } from "../../data/Data"

const RecentCard = ({ propertyList, handleDelete }) => {
  return (
    <>
      <div className='content grid3 mtop'>
        {propertyList.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
              <button className='btn2' onClick={() => handleDelete(index)}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

const Admin = () => {
  const [propertyList, setPropertyList] = useState(list);

  const handleDelete = (index) => {
    const updatedList = [...propertyList];
    updatedList.splice(index, 1);
    setPropertyList(updatedList);
  }

  return (
    <div>
     
      <RecentCard propertyList={propertyList} handleDelete={handleDelete} />
    </div>
  );
};

export default Admin;
