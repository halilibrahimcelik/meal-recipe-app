import React, { useEffect,useState,useCallback } from 'react';
import Form from '../../components/form/Form';
import { Section,Title } from "./Home.styled";

import axios from "axios";
import RecipeList from '../../components/recipeList/RecipeList';
import { toast,ToastContainer } from 'react-toastify';

const APP_KEY="8d62be9b0f0896b948402c50250d84c3";
const APP_ID="10d664a5";


const Home = () => {
  const [currentData,setData]=useState("");
  const [meal,setMeal]=useState("");
  const [enteredQuery,setEnteredQuery]=useState("");

  console.log(meal,enteredQuery)
 
  console.log(currentData)
  

  const gettingData=useCallback(
  () => {
    try {
      const response=   axios.get(`https://api.edamam.com/search?q=${enteredQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`);
      response.then(({data})=> setData(data))
     console.log(response)
      
    } catch (error) {

      if (error.response) {
        // The client was given an erroror response (5xx, 4xx)
        console.log('Error', error.message);
    } else if (error.request) {
        // The client never received a response, and the request was never left
        console.log('Erroror', error.message);
    } else {
        // Anything else
        console.log('Erroror', error.message);
    }
    }
  },[enteredQuery,meal])
    
  
  
  useEffect(()=>{
      gettingData()

  },[meal,enteredQuery,gettingData])
const {hits}=currentData

if(hits?.length===0){
  toast.error('Please Enter a valid query', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  
}

console.log(hits)
  return (
    <Section>
        <Title>Recipe App</Title>
        <Form meal={setMeal} enteredQuery={setEnteredQuery} ></Form>
     { hits&& <RecipeList meals={hits} />}

     <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </Section>
  )
}

export default Home;