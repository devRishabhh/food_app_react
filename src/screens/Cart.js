import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import Modal from "../Modal";

export default function Cart({ isOpen, onClose }) {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className='m-5 w-100 text-center fs-3'>The Cart is empty!</div>
      </Modal>
    );
  }

  // Calculate total price
  let totalPrice = data.reduce((total, food) => total + food.price , 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}> 
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => {
             // console.log(`Item`, food.price);

              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                  <button
                      type='button'
                      className='btn btn-danger btn-sm'
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', index })}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5'>Check out</button>
        </div>
      </div>
    </Modal>
  );
}
  