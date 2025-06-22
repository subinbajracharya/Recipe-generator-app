import React from "react";
import { Modal, Button } from "react-bootstrap";

const IngredientsModal = ({
  show,
  onClose,
  ingredients,
  youtubeUrl,
  mealName,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Watch How to Make: {mealName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}

        {youtubeUrl && (
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        )}
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
