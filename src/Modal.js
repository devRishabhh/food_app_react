import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#212529",
  padding: "50px",
  zIndex: 1000,
  width: "90%",
  maxWidth: "600px",
};

const OVERLAY_STYLES = {
  position: "absolute ",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} /> {/* Close modal on overlay click */}
      <div style={MODAL_STYLES}>
        <button 
          onClick={onClose} 
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer"
          }}
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
