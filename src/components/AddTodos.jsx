import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"

const AddTodos = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
    return (
        <div className='flex flex-col justify-center items-center sm:flex-row w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mt-12'>
            <form onSubmit={addTodoHandler} className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
                <input type="text" className='flex-grow bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    placeholder='Enter a Todo...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit' className='text-white w-[70%] ml-[13%] sm:ml-0 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodos
