import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import MedicineCards from "../widgets/Medicine_Cards";


function Search() {
    const [searchInput, setSearchInput] = useState("");
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [selectedCollection, setSelectedCollection] = useState("");
    const [sub , setSub]  = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
          // Create a query to search for medicines with the specified condition
          const q = query(
            collection(db, selectedCollection),
            where("Medicine_Name", "==", searchInput) // Adjust "condition" to match your Firestore field
          );
    
          const querySnapshot = await getDocs(q);
    
          // Extract the medicine data from the query result
          const medicineList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMedicines(medicineList); // Update state with fetched medicines
          setLoading(false);
          setSub(true);
        } catch (error) {
          console.error("Error fetching medicines: ", error);
          setLoading(false);
        }
      };
    
  return (
    <div className='grid justify-center items-center align-middle w-max ' >
        <div className='bg-gradient-to-b from-slate-900 to-red-700  p-3 w-screen h-96' >
            <div className='grid justify-center text-white font-bold text-2xl p-5'>
                <h1>Search</h1>
            </div>

            <div class="relative w-full items-center flex justify-center p-5">
            <div className="mr-2 ">
                   <select required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setSelectedCollection(e.target.value)} value={selectedCollection}>
                      <option value="" disabled>Choose Your Option</option>
                      <option value="Diabetes">Diabetes</option>
                      <option value="Cholestrol">Cholestrol</option>
                      <option value="Preasure">Blood Pressure</option>
                    </select>
              </div>
              <input type="search" id="location-search" class="block p-2.5 w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border
              border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for the medicine" required
                value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                />
              <button type="submit" class="top-0 end-0 h-11 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700
               hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-3 " onClick={handleSearch} >
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span class="sr-only">Search</span>
              </button>
            </div>
              <div className="text-white text-xl font-semibold justify-center text-center pt-7">
                
                { !loading && medicines.length === 0 && searchInput.length != 0 && <p>No medicines found for "{searchInput}".</p>}  
                {loading && <p>Loading...</p>}
              </div>
            <div className=" text-center mt-24">
              { !loading  && searchInput.length != 0 &&  sub == true &&<h1 className=" text-white text-3xl font-semibold " > The Result : </h1>}
            </div>
          </div>
            {!loading && medicines.length > 0 && (
              <div className="bg-red-700 grid pt-5 justify-center" >
                {medicines.map((medicine) => (
                  <div className=" rounded-2xl "> 
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
            )}

    </div>
  )
}

export default Search