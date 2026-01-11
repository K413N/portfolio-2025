import React from "react";
import style from "./style.css"

async function ProjectCarousel () {
    return(
        <div className="carousel" >
            <div className="group">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
                <div className="card">4</div>
            </div>
            <div aria-hidden className="group">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
                <div className="card">4</div>
            </div>
        </div>
    )
}

export default ProjectCarousel;