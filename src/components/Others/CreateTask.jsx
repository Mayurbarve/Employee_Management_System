import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData


        // console.log(data);

        userData.forEach((ele) => {
            if (asignTo == ele.firstName) {
                ele.tasks.push(newTask)
                // console.log(ele);
                ele.taskCounts.newTask = ele.taskCounts.newTask + 1

            }
        })
        setUserData(data)
        console.log(data);


        setTaskTitle('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
        setTaskDescription('')
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 nb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 nb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 nb-0.5'>Asign to </h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div className='text-sm text-gray-300 nb-0.5'>
                        <h3>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' /></div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 nb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-[#2d6a4f] py-3 hover:bg-[#52b788] px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask