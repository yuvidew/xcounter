import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0)

  const handleChangeCount = (num) =>{
    setCount(prev => prev + num)
  }

    return (
      <div className='p-[5rem]'>
        <h1 className='text-[1.5rem]'>Counter App</h1>
        <p>Count: {count}</p>
        <div className='mt-[1rem]' />
        <button 
          className='px-2 py-1 mr-2 bg-green-700'
          onClick={() => handleChangeCount(1)}
        >
          Increment
        </button>
        <button 
          className='px-2 py-1 bg-red-700'
          onClick={() => handleChangeCount(-1)}
        >
          Decrement
        </button>
      </div>
    )
}

export default App