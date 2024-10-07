import React from 'react'
import Cards from '../widgets/Cards'

function AboutUS() {
  return (
    <div className='mt-44 grid place-items-center bg-slate-900 ' >
        <h1 className='text-5xl font-bold text-white mt-9' >About Us</h1>
        <br/>
        <p className='font-medium text-white font-sans  ml-36 mr-36 mb-10 text-xl text-center leading-relaxed pt-5'>
        As students of Computer Science and Engineering at <b>Sahrdaya College of Engineering and Technology, </b>
        we are driven by a passion for innovation and a desire to make a meaningful impact. 
        We believe that technology has the power to transform lives, 
        and we are committed to harnessing this power to develop solutions that address real-world problems. 
        Our team has come together to create an emergency app specifically designed for individuals living with lifestyle 
        diseases such as diabetes and hypertension. Our goal is to provide a reliable, 
        user-friendly, and accessible tool that empowers users to take control of their health and wellbeing. 
        With this app, we aim to bridge the gap between healthcare and technology, 
        and make a positive difference in the lives of those who need it most.
        </p>
        <Cards/>
    </div>
  )
}

export default AboutUS