import Footer from "../widgets/Footer";
import NavBar from "../widgets/navbar";
import Search from "./Search";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import { BrowserRouter , Routes , Route, redirect, } from "react-router-dom";
import { useContext, useState } from "react";
import GetStartedPage from "./GetStartedPage";
import { useAuth } from "../Context/AuthContext";
import AyurvedicForm from "./AyurvedicForm";
import ModernForm from "./ModernForm";

export function MainPage() {
    const { isLogged, logout } = useAuth();
    return (
        <div>
            <BrowserRouter>
            <div>
                <NavBar/>
            </div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login />}/>
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

