import React from 'react'
import RecipeCard from '../recipeCard/RecipeCard';
import { Container } from './RecipeList.styled';

const RecipeList = (props) => {
    const{meals}=props;
    console.log(meals)
    
  return (
    <Container>
{meals?.map((meal,index)=> {
    return <RecipeCard infos={meal.recipe} key={index} />} )}
            
    </Container>
  )
}

export default RecipeList