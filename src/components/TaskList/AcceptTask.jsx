import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] rounded-xl p-5 bg-[#40916c]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 text-sm px-3 py-1 rounded-full'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-blue-500 py-1 px-2 text-sm rounded-full'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded-full'>Mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask

