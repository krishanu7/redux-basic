import React from 'react'
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice"
const GetTodos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    return (
        <ul className='list-none w-[60%] sm:w-[50%] md:w-[40%]'>
            {
                todos.map((todo) => (
                    <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' key={todo.id}>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <p className='text-white flex-grow'>{todo.text}</p> {/* Using flex-grow to push the button to the end */}
                            <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 p-1 rounded-md focus:outline-none'>
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>

    )
}

export default GetTodos
