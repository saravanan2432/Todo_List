import React from 'react'

const AddItems = ({newItems,setNewItems,handleSubmit}) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add Items' required
        value={newItems} onChange={(e)=>setNewItems(e.target.value)}></input>
        <button type='submit' value={"+"} >+</button>        
    </form>
  )
}

export default AddItems
