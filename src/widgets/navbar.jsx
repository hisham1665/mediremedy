

function NavBar() {
    return(
       <div className = " max-w bg-slate-950 flex flex-wrap items-center justify-between mx-auto  h-24 " >
            <div className="pl-24 ">
                <a href ="#" className = "flex items-center space-x-3 rtl:space-x-reverse" >
                    <h1 className = " text-white text-3xl font-bold" >Medi Remedy</h1>
                </a>
            </div>
            <div className="font-semibold flex flex-col p-4 md:p-0 mt-2 mr-12 text-base">
                <ul className = " flex  ">
                    <li className = " p-5 block hover:text-blue-500 hover:text-lg text-white rounded hover:scale-105 active:text-red-700">
                        <a href = "#">Home</a>
                    </li>
                    <li className = " p-5 block hover:text-blue-500 hover:text-lg text-white rounded hover:scale-105 active:text-red-700">
                        <a href = "#">Home</a>
                    </li>
                    <li className = " p-5 block hover:text-blue-500 hover:text-lg text-white rounded hover:scale-105 active:text-red-700">
                        <a href = "#">Home</a>
                    </li>
                    <li className = " p-5 block hover:text-blue-500 hover:text-lg text-white rounded hover:scale-105 active:text-red-700">
                        <a href = "#">Home</a>
                    </li>
                    <li className = " p-5 block hover:text-blue-500 hover:text-lg text-white rounded hover:scale-105 active:text-red-700">
                        <a href = "#">Home</a>
                    </li>
                    <div className="justify-center mt-1">
                        <button type = "button" className=" bg-blue-800 text-white rounded-lg hover:scale-110 ml-7 h-14 hover:duration-300">
                            <span className = " p-4 ">
                                Get Started
                            </span>
                        </button>
                    </div>
                   
                </ul>
            </div>
       
       </div>
       
    );
}

export default NavBar;