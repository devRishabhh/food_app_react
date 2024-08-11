import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState(''); // Initialize as an empty string
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
      console.log(data[0], data[1]);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit:"contain !important" }}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex:"10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)} // Search input updates here
                />
              </div>
            </div>

            <div className="carousel-item active">
              <img src="/images/sample-image (1) (1).png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/images/sample-image (2) (1).png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/images/sample-image (4).png" className="d-block w-100" alt="..." />
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
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div key={data.id} className="row mb-3">
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter((item) => 
                    item.CategoryName === data.CategoryName && 
                    item.name &&  // Check if item.name exists
                    item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(filteredItem => (
                    <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodItem= {filteredItem}
                        options={filteredItem.options?.[0] || {}}  // Fallback to an empty object if options[0] is undefined
                      />
                    </div>
                  ))
              ) : (
                <div>No Such Data Found</div>
              )}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div><Footer /></div>
    </>
  );
}
