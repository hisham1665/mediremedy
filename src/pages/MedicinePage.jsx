import React from 'react'
import MedicineCards from '../widgets/Medicine_Cards'

function MedicinePage(props) {
  const medicines = props.medicines;
  return (
    <div className='p-5 '>
      <div>
          <h1 className='text-white text-3xl font-semibold'> The Suggested Medicine Are Listed Below </h1>
      </div>
      <div className='max-h-fit   '>
          {medicines.slice(0,5).map((medicine) => (
            <div className="p-10 rounded-2xl  hover:scale-105 hover:duration-500"> 
                <MedicineCards 
                  Medicine_Name = {medicine.Medicine_Name}
                  Manufacturer = {medicine.Manufacturer}
                  Side_effects= {medicine.Side_effects}
                  Image_URL = {medicine.Image_URL}
              />
              <br />
            </div>
                   
          ))}
      </div>
    </div>
  )
}

export default MedicinePage