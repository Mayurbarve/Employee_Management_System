import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-[#52b788]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded-full'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm rounded-full'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask