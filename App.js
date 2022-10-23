import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import CardFooter from "./components/CardFooter";

export default function(){
    return (
        <div className="card">
            <div className="container">
                <Info />
                <About />
                <Interests />
                <CardFooter />
            </div>
        </div>
    )
}