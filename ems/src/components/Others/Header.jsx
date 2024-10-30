import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl fornt-semibold'>Mayur!</span></h1>
        <button className='bg-[#2d6a4f] text-lg font-medium text-white px-3 py-2 rounded-full'>Log Out</button>
    </div>
  )
}

export default Header