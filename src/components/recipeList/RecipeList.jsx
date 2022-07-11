import React from 'react'
import RecipeCard from '../recipeCard/RecipeCard';

const RecipeList = (props) => {
    const{meals}=props;
  return (
    <div>

            <RecipeCard/>
    </div>
  )
}

export default RecipeList