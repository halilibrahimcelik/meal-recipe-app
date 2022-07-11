import React, { useEffect,useState,useCallback } from 'react';
import Form from '../../components/form/Form';
import { Section,Title } from "./Home.styled";

import axios from "axios";
import RecipeList from '../../components/recipeList/RecipeList';

const APP_KEY="8d62be9b0f0896b948402c50250d84c3";
const APP_ID="10d664a5";
const query="pizza";
const meals="lunch";
const Home = () => {
  const [currentData,setData]=useState("");
  const [meal,setMeal]=useState("");
  const [enteredQuery,setEnteredQuery]=useState("");
  // const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meals}`;
  console.log(meal,enteredQuery)
  console.log(query===enteredQuery)
  console.log(currentData)
// console.log(query===enteredQuery)
//     const gettingData=async()=>{

//       try {
//         const data=  await axios.get(url);
//         console.log(data);
//         setData(data)
        
//       } catch (error) {
//         if (error.response) {
//           // The client was given an erroror response (5xx, 4xx)
//           console.log('Errororsdasd', error.message);
//       } else if (error.request) {
//           // The client never received a response, and the request was never left
//           console.log('Erroror', error.message);
//       } else {
//           // Anything else
//           console.log('Erroror', error.message);
//       }
//       }
//     }

const gettingData=useCallback(
  () => {
    try {
      const response=   axios.get(`https://api.edamam.com/search?q=${enteredQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meals}`);
      response.then(({data})=> setData(data))
     
      
    } catch (error) {
      if (error.response) {
        // The client was given an erroror response (5xx, 4xx)
        console.log('Errororsdasd', error.message);
    } else if (error.request) {
        // The client never received a response, and the request was never left
        console.log('Erroror', error.message);
    } else {
        // Anything else
        console.log('Erroror', error.message);
    }
    }
  },[enteredQuery])


useEffect(()=>{
    gettingData()
},[gettingData])

const {hits}=currentData

console.log(hits)
  return (
    <Section>
        <Title>Recipe App</Title>
        <Form meal={setMeal} enteredQuery={setEnteredQuery} ></Form>
      <RecipeList meals={hits} />

     
    </Section>
  )
}

export default Home