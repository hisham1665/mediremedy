import React from 'react';

function MedicineCards(props) {
  console.log(props);
  return (
    <div className="bg-slate-800 max-h-72 max-w-[800px] flex justify-center p-10 rounded-3xl">
        <div className="max-h-52 max-w-52  bg-slate-100 p-6 rounded-2xl flex justify-center">
            <img src={props.Image_URL} className="rounded-2xl object-cover  max-h-52 max-w-52 mx-auto"/>
        </div>    
        <div className="text-white p-10 w-full">
            <h1 className="font-bold text-2xl ">{props.Medicine_Name}</h1>
            <div className="flex flex-col ">
                <h6 className="font-semibold text-lg">{props?.Manufacturer}</h6>
                <p className="text-base">{props?.Side_effects}</p>
            </div>
        </div>
    </div>
  );
}

export default MedicineCards;