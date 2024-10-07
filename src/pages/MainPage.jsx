import Footer from "../widgets/Footer";
import Header from "../widgets/header";
import NavBar from "../widgets/navbar";
import AboutUS from "./AboutUS";
import Working from "./Working";

export function MainPage() {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <Header/>
            </div>
            <div >
                <AboutUS/>
            </div>
            <div>
                <Working/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

