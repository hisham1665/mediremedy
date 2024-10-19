import { useState } from "react";
import React from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import MedicinePage from "./MedicinePage";
import Alright from "../widgets/Alright";

function ModernForm() {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [bloodReport, setBloodReport] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("");
    const [extraNote, setExtraNote] = useState("");
  
    const fetchMedicines = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(db, selectedCollection),
            );

            const querySnapshot = await getDocs(q);
        
            const medicineList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMedicines(medicineList);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching medicines: ", error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedCollection) {
            fetchMedicines();
        }
    };
    console.log(selectedCollection)
  return (
    <div>
        <div className='grid justify-center text-white bg-gradient-to-b from-black via-blue-600 to-blue-800 font-medium  px-5 py-2.5  pb-24 '>
        <div>
            <div>
                <h1 className='text-6xl font-bold pt-5' > Modern Medicine </h1>
            </div>
            <div className='mt-5'>
                <h4 className='text-xl font-semibold'> Hey , How You Feel Today ?</h4>
            </div>
        </div>
        <div className=' bg-gradient-to-b from-slate-950 black to-indigo-600  rounded-2xl mt-5  h-fit w-96 ml-5'>
            <div className='p-5' >
                <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div>
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Disease : </label>
                        <select  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(e) => setSelectedCollection(e.target.value)} value={selectedCollection}>
                        <option value="" disabled >Choose Yor Option</option>
                            <option value="Diabetes" >Diabetes</option>
                            <option value="Cholestrol" >Cholestrol</option>
                            <option value="Preasure" >Blood Pressure</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label  class="block mb-2 text-sm font-medium text-white mt-2 "> Enter Yor Blood  report :  </label>
                        <input type="number"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="120mg" required 
                            value={bloodReport} onChange={(e) => setBloodReport(e.target.value)} 
                        />
                    </div>
                
                    <div class="max-w-sm mx-auto">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Any Other Problems</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="eg : head ache" 
                            value={extraNote} onChange={(e) => setExtraNote(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5 " 
                        
                    >Submit</button>
                </form>
            </div>
        </div>
        </div>
        <div  className=" w-full bg-blue-800 justify-center grid">
                {bloodReport.length !== 0 && bloodReport < 120 && loading === false && <Alright/>}
                {loading === true && Loading }
                { medicines!==null && bloodReport.length !== 0 &&  bloodReport >= 120  && loading === false && <  MedicinePage medicines = {medicines} />  }
        </div>
    </div>
  )
}

export default ModernForm


function Loading () {
    return(
        <div>
            <h1 className="text-white text-2xl font-bold">
                <center>
                    Loading...
                </center>
            </h1>
        </div>
    );
}
