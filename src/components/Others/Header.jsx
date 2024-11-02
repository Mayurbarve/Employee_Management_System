import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl fornt-semibold'>username  👋 </span></h1>
      <button onClick={logOutUser} className='hover:bg-[#54b288] bg-[#2d6a4f] text-lg font-medium text-white px-3 py-2 rounded-full'>Log Out</button>
    </div>
  )
}

export default Header