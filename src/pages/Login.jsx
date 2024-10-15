import React from 'react'

function Login() {
  return (
    <div className='grid justify-center' >
      <div>
        <h1 className='text-black font-bold text-xl'>
            Login Here
        </h1>
      </ div>
      <div>
        <form >
          <div>
            <input type='text' className='border-yellow-300 w-48 h-8 bg-gray-500 ' /> 
            <input type='password'  className='border-pink-900'/>
          </div>
        </form>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Login