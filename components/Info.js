import React from "react";

export default function(){
    return (
        <div className="info">
            <img src="./components/assets/profile.jpg" className="img" alt="presonal image" />
            <h2 className="name">Ibrahim Ahmed</h2>
            <h4 className="job">Frontend Developer</h4>
            <p className="website">ibrahimahmed.wedsite</p>
            <a href="mailto:ibrahimahmed90000@gmail.com" target={"_blank"}>
                <i className="fa-solid fa-envelope"></i>
                Email
            </a>
            <a href="https://www.linkedin.com/in/developer-ibrahim/" target={"_blank"}>
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn
            </a>
        </div>
    )
}