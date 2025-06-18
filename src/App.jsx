import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import image from "./assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [meals, setMeals] = useState([]);
  const searchRef = useRef(null);

  // Using API to retrieve data
  const generateRecipe = async () => {
    let searchValue = searchRef.current.value;
    let response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
    );
    console.log(response);
    setMeals(response.data.meals);
  };

  const handleOnChange = (e) => {
    setApiData(e.target.value);
  };

  return (
    <>
      <div className="wrapper d-flex flex-wrap justify-content-center align-items-center min-vh-100 bg-dark text-white text-center p-5">
        <div className="container-fluid d-flex flex-column gap-5">
          <div className="row">
            <div className="col">
              <img
                src={image}
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
              <h1>Recipe Generator</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 d-flex flex-column gap-2">
              <div className="d-flex gap-4">
                <input
                  className="w-100 rounded-pill bg-white text-dark px-3"
                  type="text"
                  ref={searchRef}
                  style={{ height: "40px" }}
                />
              </div>
              <button
                className="rounded-pill btn btn-success"
                onClick={generateRecipe}
              >
                Search Recipe
              </button>
            </div>
          </div>
          <div className="row">
            {meals.map((m) => {
              return (
                <>
                  <RecipeCard meal={m} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
