import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Carousel() {
    return (
        <div>
           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit:"contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex:"10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                        
                    </div>

                    <div className="carousel-item active">
                        <img src="/images/sample-image (1) (1).png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/sample-image (2) (1).png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/sample-image (4).png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
}
