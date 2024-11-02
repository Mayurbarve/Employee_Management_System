import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    return (

        <div id='createTask' className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 '>

            <div className='bg-[#4ea77d] py-2 px-4 mb-2 flex justify-between rounded'>
                <h2 className=' w-1/5 '>Employee Name</h2>
                <h3 className=' w-1/5 '>New Tasks</h3>
                <h5 className=' w-1/5 '>Active Tasks</h5>
                <h5 className=' w-1/5 '>Completed</h5>
                <h5 className=' w-1/5 '>Failed</h5>
            </div>

            <div id='givenTasks' className='h-[80%] overflow-auto '>
                {userData.map((ele, idx) => {
                    return <div key={idx} className='py-2 px-4 mb-2 flex justify-between rounded border-2 border-emerald-500'>
                        <h2 className='text-lg font-medium w-1/5 '>{ele.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-500'>{ele.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-500'>{ele.taskCounts.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-500'>{ele.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-500'>{ele.taskCounts.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask