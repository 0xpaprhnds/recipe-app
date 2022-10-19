import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>
            <b>Ingredients</b>
          </p>
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
          <p>
            <b>Instructions</b>
          </p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
