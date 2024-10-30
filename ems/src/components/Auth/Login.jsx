import React, { useState } from 'react'

const Login = ({handleLogin}) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
      e.preventDefault()
      handleLogin(email,password)
      setEmail('')
      setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-white p-20 rounded-2xl'>
            <form 
            onSubmit= {(e)=>{
              submitHandler(e)
            }}  
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e) =>{
                  setEmail(e.target.value)
                }}
                required type='email' placeholder='Enter Your email' className='text-white border-2 outline-none bg-transparent  border-green-400 text-xl py-2 px-3 rounded-full' />
                <input 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required type='password' placeholder='Enter Your password' className='text-white border-2 outline-none bg-transparent  mt-3 border-green-400 text-xl py-2 px-3 rounded-full' />
                <button className='mt-5 text-white border-none outline-none  placeholder:text-white  bg-green-600 text-xl py-2 px-24 rounded-full'>Log in</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login