import React from 'react'
import { useNavigate } from 'react-router-dom'

function MedicineChoose() {
  return (
    <div>
        <div className="flex justify-between bg-ghost-white " >
           <div className=" w-max ml-28 mt-32 p-5 ">
                <h1 className=" text-4xl  font-bold pb-3">Choose The Type Of Service </h1>
                <button type = "button" className=" bg-gradient-to-r from-green-700 to-emerald-900 text-white rounded-3xl hover:scale-105 hover:duration-300 h-12 w-36 mt-3 mr-5" > <a href='/ayurvedic-form'> <span className='font-bold text-lg' > Ayurvedic </span> </a></button>
                <button type = "button" className=" bg-gradient-to-r from-cyan-500 to-sky-900 text-white rounded-3xl hover:scale-105 hover:duration-300 h-12 w-36 mt-3 " > <a href='/modern-form'><span className='font-bold text-lg' > Modern </span> </a>  </button>
                
            </div> 
           <div className=" h-max w-2/5 mt-20 mr-24 ">
                <img src="/static/nurse_1.jpg" alt="sample logo"  className="  "/>
            </div>
        </div>
    </div>
  )
}

export default MedicineChoose