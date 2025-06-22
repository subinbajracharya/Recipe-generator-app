import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import IngredientsModal from "./IngredientsModal";

const RecipeCard = ({ meal }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOnShow = () => setShowModal(true);
  const handleOnClose = () => setShowModal(false);

  // Collect ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal["strIngredient" + i];
    if (ingredient) ingredients.push(ingredient);
  }

  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
        <Card className="p-4 h-100">
          <Card.Img variant="top" src={meal.strMealThumb} />
          <Card.Body className="px-0 pb-0">
            <Card.Title>{meal.strMeal}</Card.Title>
            <Card.Text>
              <span className="d-block">
                <b>Cuisine:</b>&nbsp;{meal.strArea}
              </span>
            </Card.Text>
            <Button variant="dark" onClick={handleOnShow}>
              Ready to Cook?
            </Button>
          </Card.Body>
        </Card>
      </div>

      <IngredientsModal
        show={showModal}
        onClose={handleOnClose}
        ingredients={ingredients}
        youtubeUrl={meal.strYoutube}
        mealName={meal.strMeal}
      />
    </>
  );
};

export default RecipeCard;
