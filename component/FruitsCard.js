import React, { useState } from 'react'

const FruitsCard = ({fruit}) => {

  const [show,setShow] = useState(false);
  const [add,setAdd] = useState(true);

  const handleClick = () => {
    setShow(true);
    setAdd(false);
    setTimeout(()=>{
      setShow(false);
      setAdd(true);
    },2000)
  }

  return (
    <div className='shadow-xl rounded-2xl overflow-hidden transform hover:scale-110 duration-100 relative group' onClick={handleClick}>
        <img src={require(`../assests/${fruit.image}.jpeg`)} alt='img' className='w-full h-52 object-cover' />
        <div className='flex flex-col items-center my-2 '>
            <span className='font-body text-slate-500 py-1'>{fruit.name}</span>
            <span className='font-body text-slate-500 pb-1'>{`Rs.${fruit.price} /kg`}</span>
            {add && <span className='font-body uppercase text-lime-500 invisible group-hover:visible'>add to cart</span>}
            {show && <span className='font-body uppercase text-lime-500 invisible group-hover:visible'>Item Added!</span>}
        </div>
        <span className='absolute top-3 right-3 bg-violet-500 text-white rounded-lg text-sm p-1 mx-2 my-1'>11% off</span>
    </div>
  )
}

export default FruitsCard