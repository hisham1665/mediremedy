import GetStarted from "./getStarted";


function Header() {
    return(
        <div className="flex justify-between bg-ghost-white " >
           <div className=" w-max ml-28 mt-52 p-5 ">
                <h1 className=" text-4xl  font-semibold">This Is A Sample Website For </h1>
                <h1 className="p-1 text-5xl  font-bold">Medi Remedy </h1>
                <GetStarted /> 
            </div> 
           <div className=" h-max w-2/5 mt-24 mr-24 ">
                <img src="/static/header_image.jpg" alt="sample logo"  className="  "/>
            </div>
        </div>
    );
}

export default Header;