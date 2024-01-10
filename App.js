import React, { useState } from 'react'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import AddItems from './AddItems'

const App = () => {
  const [items,setItems]=useState([
    {
        id:1,
        checked:false,
        item:"Tamil"
    },
    {
        id:2,
        checked:false,
        item:"English"
    },
    {
        id:3,
        checked:false,
        item:"Maths"
    },
])
const [newItems,setNewItems]=useState('')

const addItem=(item)=>{
  const id=items.length ? items[items.length -1].id +1:1
  const addNewItem={id,checked:false,item}
  const listItems=[...items,addNewItem]
  setItems(listItems)
}

const handleChange=(id)=>{
    const listItems=items.map((item)=>id===item.id?{...item,checked:!item.checked}:item)
    setItems(listItems)
}
const handleDelete=(id)=>{
    const listItems=items.filter((item)=>id!==item.id)
    setItems(listItems)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(newItems)
    //add
    setNewItems('')
    addItem(newItems)
}

  return (
    <div>
      <Header  />
      <AddItems
      newItems={newItems}
      setNewItems={setNewItems}
      handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
      />
      
    </div>
  )
}

export default App
