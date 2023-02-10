import axios from "axios";
import React, { useState } from "react";
import Cards from "../components/cards/Cards";
import Header from "../components/header/Header";
import { HeaderText, HomeImg, ImgDiv } from "./styleComponents/Home.styled";
import homeSvg from "../assets/home.svg";
const Home = () => {
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = process.env.REACT_APP_APP_ID;

  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the Form");
    }
  };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setMeal={setMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
