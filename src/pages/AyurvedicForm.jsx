import { useState } from "react";
import React from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import MedicinePage from "./MedicinePage";
import Alright from "../widgets/Alright";

function AyurvedicForm() {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [bloodReport, setBloodReport] = useState("");
    const [selectedCollection, setSelectedCollection] = useState("");
    const [extraNote, setExtraNote] = useState("");

   

    const fetchMedicines = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(db, "Ayurvedam"),
                where("TYPE", "==", selectedCollection)
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
    console.log(medicines)
    return (
        <div >
            <div className='grid justify-center pl-10 h-max-96 w-max-96 text-white bg-gradient-to-b from-black slate-100  to-emerald-600  font-medium  px-5 py-2.5  pb-24 h-full'>
                <div>
                    <div>
                        <h1 className='text-6xl font-bold pt-5'>Ayurvedam</h1>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-xl font-semibold'>Hey , How You Feel  Today ?</h4>

                    </div>
                </div>
                <div className='bg-gradient-to-b from-green-400 to-emerald-900 amber-700 h-96 w-96 rounded-2xl mt-5'>
                    <div className='p-5'>
                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-900">Disease : </label>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setSelectedCollection(e.target.value)} value={selectedCollection}>
                                    <option value="" disabled>Choose Your Option</option>
                                    <option value="Diabetes">Diabetes</option>
                                    <option value="Obesity">Cholestrol</option>
                                    <option value="Preasure">Blood Pressure</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-semibold text-black mt-2">Enter Your Blood Report : </label>
                                <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="eg: 120" required
                                    value={bloodReport} onChange={(e) => setBloodReport(e.target.value)} />
                            </div>

                            <div className="max-w-sm mx-auto">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Any Other Problems : </label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="eg : head ache"
                                    value={extraNote} onChange={(e) => setExtraNote(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5"
                                // onClick={handleSubmit}
                            >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div  className=" w-full bg-emerald-600 justify-center grid">
            {bloodReport < 120 && <Alright/>}
            { medicines!==null && bloodReport.length !== 0 &&  bloodReport >= 120  &&<  MedicinePage medicines = {medicines} />  }
            </div>
        </div>
  )
}

export default AyurvedicForm