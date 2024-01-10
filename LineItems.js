import React from 'react'
import { FaTrash } from "react-icons/fa";

const LineItems = ({item,handleChange,handleDelete}) => {
  return (
             <li>
                <input type='checkbox' checked={item.checked} onChange={()=>handleChange(item.id)}></input>
                <label>{item.item}</label>
                <FaTrash role='button' id="btn" tabIndex={0} onClick={()=>handleDelete(item.id)}/>
            </li>
  )
}

export default LineItems
