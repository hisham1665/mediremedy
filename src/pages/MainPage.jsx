import Footer from "../widgets/Footer";
import NavBar from "../widgets/navbar";
import Search from "./Search";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import GetStartedPage from "./GetStartedPage";
import AyurvedicForm from "./AyurvedicForm";
import ModernForm from "./ModernForm";

export function MainPage() {

    return (
        <div>
            <BrowserRouter>
            <div>
                <NavBar/>
            </div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/get-started" element= {<GetStartedPage />}   />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ayurvedic-form" element={<AyurvedicForm/>} />
                    <Route path="/modern-form" element={<ModernForm/>} />

                </Routes>
            <div className="">
                <Footer/>
            </div>
            </BrowserRouter>
        </div>
    );
}

