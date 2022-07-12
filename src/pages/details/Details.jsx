import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import { Container,Title,Wrapper,Image,subTitle} from './Details.styled';
import caloryIcon from "../../assets/calories.png"
const Details = (data) => {
    const location=useLocation();
    const {infos}=location.state
    const {cuisineType,ingredients,label,calories}=infos;
    console.log(ingredients)

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    console.log(cuisineType)
    return (
    <Fragment>
        <Container>
        <Title>{label} </Title>
        <Wrapper>
        <div><strong>Cuisine Type: </strong><span>{(capitalize(cuisineType[0]))} </span> </div>
       <div style={{display:"flex", alignItems:"center"}}><strong>Calories (per 100gr): </strong><span style={{display:"flex", alignItems:"center" ,gap:"0.4rem"}} >{parseInt(calories)/10} <Image src={caloryIcon} alt=""/></span></div>
        </Wrapper>

            <subTitle>Ingredients</subTitle>

{ingredients.map((ingredient,index)=>{
    const {food, text}=ingredient
    return(<div key={index}>
         <div><strong>Food:</strong><span>{food} </span> </div>
         <div><strong>Quantity :</strong><span>{text} </span> </div>

    </div>)
})  }
        </Container>


    </Fragment>
  )
}

export default Details