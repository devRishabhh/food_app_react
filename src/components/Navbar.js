import React, { useState } from "react";
import { useCart } from "./ContextReducer";
import Cart from '../screens/Cart';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartData = useCart(); 
  const totalItems = cartData.reduce((total, item) => total + item.qty, 0);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand fs-1 fst-italic" href="/">Rishabh</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active fs-5" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/orders">My Orders</a>
              </li>
            </ul>
            <div className="d-flex">
            <button className="btn bg-white text-success mx-2" onClick={toggleModal}>
                My Cart
                {totalItems > 0 && (
                  <span className="badge bg-danger ms-2">{totalItems}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      <Cart isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
