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
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchRef = useRef(null);

  // Using API to retrieve data
  const generateRecipe = async () => {
    let searchValue = searchRef.current.value;
    if (searchValue && searchValue != "") {
      setLoading(true);
      setHasSearched(true);
      let response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      );
      setLoading(false);
      console.log(response);
      setMeals(response.data.meals || []);
      setMessage(
        response.data.meals ? `${response.data.meals.length} Recipes Found` : ""
      );
    }
  };

  const handleOnChange = (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      generateRecipe();
    }
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
            <div className="col-12 col-md-8 col-lg-6 d-flex flex-column gap-2">
              <div className="d-flex gap-4">
                <input
                  className="w-100 rounded-pill bg-white text-dark text-center px-3"
                  placeholder="Type here.."
                  type="text"
                  ref={searchRef}
                  style={{ height: "40px" }}
                  onKeyUp={handleOnChange}
                />
              </div>
              <button
                className="rounded-pill btn btn-success mb-2"
                onClick={generateRecipe}
              >
                Search Recipe
              </button>
              <div className="text-center">
                {isLoading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : meals.length > 0 ? (
                  <h5 className="text-success">{message}</h5>
                ) : hasSearched && meals.length === 0 ? (
                  <div className="text-danger">
                    <h5>
                      No recipes match your search. Try a different ingredient!
                    </h5>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            {meals.map((m) => {
              return <RecipeCard key={m.idMeal} meal={m} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
