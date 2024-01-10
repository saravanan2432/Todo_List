import React from 'react'
import LineItems from './LineItems';


const ItemList = ({items,handleChange,handleDelete}) => {
  return (
      <ul>
           {items.map((item)=>(
            <LineItems 
            item={item}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
           ))}
        </ul>
  )
}

export default ItemList
