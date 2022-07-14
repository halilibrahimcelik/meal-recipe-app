import React, { Fragment } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Container,Title,Wrapper,Image,H2,IngredientCard,Card,Flex} from './Details.styled';
import caloryIcon from "../../assets/calories.png";
import { LoginButton } from '../login/Login.styled';

const Details = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const {infos}=location.state;
    const {cuisineType,ingredients,label,calories,image}=infos;


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
 
    return (
    <Fragment>
        <Container>
        <Title data-aos="fade-right">{label} </Title>
        <Flex>
            <Wrapper  data-aos="flip-left">
            <div><strong>Cuisine Type: </strong><span>{(capitalize(cuisineType[0]))} </span> </div>
                   <div style={{display:"flex", alignItems:"center"}}><strong>Calories (per 100gr): </strong><span style={{display:"flex", alignItems:"center" ,gap:"0.4rem"}} >{parseInt(calories)/10} <Image src={caloryIcon} alt=""/></span></div>
            </Wrapper>
            <Image wd="150px" src={image} />
        </Flex>

        <H2 data-aos="fade-right"> Ingredients</H2>
<IngredientCard>
    {ingredients.map((ingredient,index)=>{
        const {food, text}=ingredient
        return(<Card key={index}  data-aos="flip-down">
    
                 <div><strong>Item:</strong><span>{food} </span>
                <strong>Quantity :</strong><span>{text} </span> </div>
    
    
        </Card>)
    })  }
</IngredientCard>
<LoginButton   bg="#E93E44"  data-aos="zoom-in-right"   onClick={()=>navigate("/home")} >Home</LoginButton>
        </Container>


    </Fragment>
  )
}

export default Details