import React, { useEffect,useState,useCallback } from 'react';
import Form from '../../components/form/Form';
import { Section,Title } from "./Home.styled";

import axios from "axios";
import RecipeList from '../../components/recipeList/RecipeList';
import { toast,ToastContainer } from 'react-toastify';

const APP_KEY=process.env.REACT_APP_APP_KEY;
const APP_ID=process.env.REACT_APP_APP_ID;


const Home = () => {
  const [currentData,setData]=useState("");
  const [meal,setMeal]=useState("");
  const [enteredQuery,setEnteredQuery]=useState("");
const [toggle,setToggle]=useState(false);
  

  const gettingData=useCallback(
  async() => {
    try {
      const {data}=   await axios.get(`https://api.edamam.com/search?q=${enteredQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`);
    

      setData(data)
    } catch (error) {

      if (error.response) {
        // The client was given an erroror response (5xx, 4xx)
        console.log('Error', error.message);
        return;
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
    const  data= setTimeout(()=>{
      gettingData()
    },500);
    return ()=>{
  
      clearTimeout(data);
    }
  

  },[gettingData])

const {hits}=currentData;



  if(hits?.length===0 &&meal ){
  
   if(!toggle){
     toast.error('Please enter a valid query!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
setToggle(!toggle);
   }
  
  
  }




  return (
    <Section>

        <Title>Recipe App</Title>
        <Form meal={setMeal} enteredQuery={setEnteredQuery}
      ></Form>
  {hits?.length===0&& meal&& <p style={{marginTop:"2rem", fontSize:"1.3rem", color:"#913c3c", fontWeight:"800"}}>Please type a valid recipe :(</p> }
     { hits&& <RecipeList meals={hits} />}


    </Section>
  )
}

export default Home;