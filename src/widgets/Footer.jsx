import React from 'react'
import Collapsible from 'react-collapsible'


function Footer() {
  return (
    <div className='flex justify-evenly bg-slate-900 pb-20 '>
        <div className='mt-12 justify-center '>
            <div  className='ml-5'>

                <h1 className='text-2xl font-bold text-white'> Devolopers </h1>
            </div>
            <div className='text-lg text-white font-semibold mt-4'>
                <div className='m-3 flex '>
                    <Collapsible trigger={ 'Hisham K H' }>
                    <span  className="flex">
                        <a href='mailto:hishamkhofficial@gmail.com' ><img className='h-10 w-10 m-2'  src='/static/gmail_img.png'/></a>
                        <a href='https://github.com/hisham1665'><img className='h-10 w-10 m-2'  src='/static/github_img.png'/></a>
                        <a href='https://www.linkedin.com/in/hisham-k-h-29061428a/'><img className='h-10 w-10 m-2'  src='/static/linkedin_img.png'/></a>
                    </span>
                    </Collapsible>
                </div>
                <div className='m-3 flex '>
                     <Collapsible trigger={"Edwin Vargheese"} >
                        <span className="flex">
                            <a href='mailto:edwin223743@sahrdaya.ac.in'><img className='h-10 w-10 m-2' src='/static/gmail_img.png'/></a>
                            <a href=' # '><img className='h-10 w-10 m-2' src='/static/github_img.png'/></a>
                            <a href=' # '><img className='h-10 w-10 m-2' src='/static/linkedin_img.png'/></a>
                        </span>
                     </Collapsible>
                </div>
                <div className='m-3 flex '>
                     <Collapsible trigger={'Irene K Anto'} >
                        <span className="flex">
                            <a href='mailto:irene223920@sahrdaya.ac.in'><img className='h-10 w-10 m-2' src='/static/gmail_img.png'/></a>
                            <a href='https://github.com/ireneanto'><img className='h-10 w-10 m-2' src='/static/github_img.png'/></a>
                            <a href=' # '><img className='h-10 w-10 m-2' src='/static/linkedin_img.png'/></a>
                        </span>
                     </Collapsible>
                </div>
                <div className='m-3 flex '>
                    <Collapsible trigger={'Jerom Joshy'} >
                        <span className="flex">
                            <a href='mailto:jeromjoshy12@gmail.com'><img className='h-10 w-10 m-2' src='/static/gmail_img.png'/></a>
                            <a href='https://github.com/Jerom1009'><img className='h-10 w-10 m-2' src='/static/github_img.png'/></a>
                            <a href='https://in.linkedin.com/in/jerom-joshy-664b0b2b1'><img className='h-10 w-10 m-2' src='/static/linkedin_img.png'/></a>
                        </span>
                    </Collapsible>
                </div>
                <div className='m-3 flex  '>
                    <Collapsible trigger={"Josen Chakola" } >
                        <span className="flex">
                            <a href='mailto:josenchakola34@gmail.com'><img className='h-10 w-10 m-2' src='/static/gmail_img.png'/></a>
                            <a href='https://github.com/Josen777'><img className='h-10 w-10 m-2' src='/static/github_img.png'/></a>
                            <a href='https://www.linkedin.com/in/josen-chakola-635b2032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><img className='h-10 w-10 m-2' src='/static/linkedin_img.png'/></a>
                        </span>
                    </Collapsible>
                </div>
            </div>
        </div>

       { /* <h1 className='text-white font-bold text-center text-3xl mt-8' > MEDI REMIDY</h1> */}
        <div className='mt-12 justify-center '>
            <div>
                <h3 className='text-2xl font-bold text-white'> Services </h3>
            </div>

            <div className='mt-3'>
                <ul className='text-white text-lg '>
                    <li>Ayurvedic Medicine</li>
                    <li> English Medicines </li>
                    <li> Disease Prevention Instructions </li>
                </ul>
            </div>

        </div>

        <div className='mt-12 justify-center '>
            <div>
                <h3 className='text-2xl font-bold text-white'>
                    Location
                </h3>
            </div>
            <div className='mt-3'> 
                <p className='text-white text-lg '>
                    Sahrdaya College Of Engneering And  Technology <br/>
                    College Rd, Koprakalam,<br/>
                    Kodakara,Thrissur.<br/>
                    Kerala, India - 680 541<br/>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer