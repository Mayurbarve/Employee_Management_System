import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className=' mt-10 flex justify-between gap-5 screen '>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-[#74c69d]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-[#52b788]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-[#40916c]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-[#2d6a4f]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNum

// ajke liye fhilal itna hi aapki tarha mai bhi mayoos hu, lekin ummid pr duniya kayam hai
// dil dukha hai magar tuta to nahi aur ummid ka daman chutaa to nhi hai 