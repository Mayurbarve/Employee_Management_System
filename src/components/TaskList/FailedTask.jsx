import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-[#2d6a4f]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded-full'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-2'>
                <button className='bg-red-500 w-full rounded-full'>Faild</button>
            </div>
        </div>
    )
}

export default FailedTask