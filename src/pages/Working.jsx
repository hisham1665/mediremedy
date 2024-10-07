import React from 'react'
import GetStarted from '../widgets/getStarted'

function Working() {
  return (
    <div className='mt-20 place-items-center flex justify-between'>
        <div className='object-fill w-2/4'>
            <div className='text-5xl font-bold grid place-items-center text-blue-950 '>
                <h1> How we Works </h1>
            </div>
            <div className='font-medium text-black font-sans  ml-20 mb-10 text-xl text-center leading-relaxed  mt-10 p-5'>
                <p>
                Our website is powered by a comprehensive database of medical information curated from the expertise of seasoned doctors. 
                This knowledge is meticulously reviewed and verified by a team of medical experts to ensure accuracy and reliability. 
                Through this rigorous process, we provide you with trustworthy and up-to-date health information.
                </p>
                <div className='mt-5 rounded-full'>

                    <GetStarted />
                </div>
            </div>
        </div>
        <div className='h-2/4 w-2/4 mt-3 mr-20 '>
            <img src='/static/work_image.jpg' className='object-cover'/>
        </div>
    </div>
  )
}

export default Working