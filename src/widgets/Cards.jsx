import React from 'react'

function Cards() {
  return (
    <div className='flex justify-between mt-10 mb-36'>
        <div className='bg-white h-4/5 w-80 rounded-3xl mt-3 mr-10 ml-10 hover:scale-105 hover:cursor-pointer duration-500' >
            <img src='/static/card_1.jpg' className='p-4 rounded-lg border-none '/>
            <div className='p-9'>
                <span>
                    We provide the medicine suggestion for english medicine users .
                </span>
            </div>
        </div>
        <div className='bg-white h-4/5 w-80 rounded-3xl mt-3 mr-10 ml-10 hover:scale-105 hover:cursor-pointer duration-500 '>
            <img src='/static/card_2.jpg' className='p-4 rounded-lg border-none '/>
            <div className='p-9'>
                <span>
                    We provide the medicine suggestion for Ayurvedic medicine users 
                </span>
            </div>
        </div>
        <div className='bg-white h-4/5 w-80 rounded-3xl mt-3 mr-10 ml-10  hover:scale-105 hover:cursor-pointer duration-500'>
            <img src='/static/card_3.jpg' className='p-4 rounded-lg border-none '/>
            <div className='p-9'>
                <span className=' '>
                    We Suggest the precautions  for the medicine users how to prevent the diseases

                </span>
            </div>
        </div>
</div>
  )
}

export default Cards