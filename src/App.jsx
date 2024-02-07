import React from 'react'
import GetTodos from './components/GetTodos'
import AddTodos from "./components/AddTodos"
const App = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-bold underline mt-4">Todos</h1>
      <div className='flex justify-center items-center'><AddTodos /></div>
      <div className='flex justify-center items-center'><GetTodos /></div>
    </>
  )
}

export default App
