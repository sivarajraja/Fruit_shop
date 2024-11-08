import React, { useState } from 'react'

const Filters = () => {
    const [selectedItem,setSelectedItem] = useState(2);
  return (
    <section className='my-11 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around'>
        <button onClick={() => setSelectedItem(1)} className={`fiter ${selectedItem === 1 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Latest</button>
        <button onClick={() => setSelectedItem(2)} className={`fiter ${selectedItem === 2 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Best Seller</button>
        <button onClick={() => setSelectedItem(3)} className={`fiter ${selectedItem === 3 ? 'bg-green-500 text-white' : 'text-slate-500'}`}>Special</button>
    </section>
  )
}

export default Filters