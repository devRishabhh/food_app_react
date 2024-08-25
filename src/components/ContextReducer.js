import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Check if the item already exists in the cart with the same size
      const existingIndex = state.findIndex(
        (item) => item.id === action.id && item.size === action.size
      );

      if (existingIndex >= 0) {
        // If it exists, replace the old quantity with the new quantity and recalculate the price
        const updatedState = state.map((item, index) => {
          if (index === existingIndex) {
            const pricePerUnit = item.price / item.qty; // Calculate price per unit based on the existing item
            const newPrice = pricePerUnit * action.qty; // Recalculate the total price based on the new quantity
            return {
              ...item,
              qty: action.qty, // Replace the old quantity with the new quantity
              price: newPrice, // Update the total price
            };
          }
          return item;
        });
        return updatedState;
      } else {
        // If it doesn't exist, add it as a new item
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            qty: action.qty,
            size: action.size,
            price: action.price, // Price should be total for the initial qty
            img: action.img,
          },
        ];
      }

    case "REMOVE_FROM_CART":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "DROP":
      let empArray = []
      return empArray
    default:
      console.log("Error in Reducer");
      return state;
  }
};



export const CartProvider = ({ children }) => {  // Corrected typo from 'childern' to 'children'
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

