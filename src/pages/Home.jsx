import React from 'react'
import Header from "../widgets/header";
import AboutUS from "./AboutUS";
import Working from "./Working";
function Home() {
  return (
    <div>
        <div>
                <Header/>
        </div>
        <div >
                <AboutUS/>
            </div>
            <div>
                <Working/>
            </div>
    </div>
  )
}

export default Home