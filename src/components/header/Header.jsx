import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.styled";

const Header = ({ setQuery, setMeal, mealType ,getData}) => {

  const handleSumbit=(e) => {
    e.preventDefault()
    getData()
  }
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>

      <FormContainer onSubmit={handleSumbit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setMeal(e.target.value)}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
