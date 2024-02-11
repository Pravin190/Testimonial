import React, { useState } from 'react'
import Testimonials from './Testimonials'
import reviews from './Data'

function App() {


  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-zinc-700">

        <div className="text-center">

          <h1 className="text-white text-4xl font-bold">Our Testimonials</h1>

          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>

          <Testimonials reviews = {reviews}></Testimonials>
        </div>

    </div>
  )
}

export default App