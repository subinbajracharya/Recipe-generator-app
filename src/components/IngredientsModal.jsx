import React from "react";
import { Modal, Button } from "react-bootstrap";

const IngredientsModal = ({ show, onClose, ingredients }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingredients</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IngredientsModal;
