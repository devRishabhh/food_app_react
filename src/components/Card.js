import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();

  let options = props.options || {}; // Ensure options is an object
  let priceOptions = Object.keys(options); // Extract keys if options is an object
  const priceRef = useRef();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const handleAddToCart = async () => {
    await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
    console.log(data);

  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() =>{
    setSize(priceRef.current.value)
  },[])

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img 
          src={props.foodItem.img || "https://via.placeholder.com/150"} 
          className="card-img-top" 
          alt={props.foodName} style={{ height:"150px", objectFit:"fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">This is some important text</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success" onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {priceOptions.length > 0 ? (
                priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))
              ) : (
                <option value="">No options available</option>
              )}
            </select>
            <div className="d-inline h-100 fs-5">
            ₹{finalPrice}/-
            </div>
          </div>
          <hr/>
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart </button>
          {/* </hr> */}
        </div>
      </div>
    </div>
  );
}
