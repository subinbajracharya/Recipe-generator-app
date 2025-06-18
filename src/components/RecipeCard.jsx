import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RecipeCard = ({ meal }) => {
  return (
    <>
      {/* <div className="col-4">
        <div>
          <img
            src={meal.strMealThumb}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>Name: {meal.strMeal}</div>
        <div>Instructions: {meal.strInstructions}</div>
        <div>Ingredients: {meal.strIngredient1}</div>
      </div> */}
      <div className="col-3 mb-4">
        <Card className="p-4">
          <Card.Img variant="top" src={meal.strMealThumb} />
          <Card.Body>
            <Card.Title>{meal.strMeal}</Card.Title>
            <Card.Text>
              <span className="d-block">
                <b>Cuisine:</b>&nbsp;{meal.strArea}
              </span>
            </Card.Text>
            <Button variant="primary">See Ingredients</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default RecipeCard;
