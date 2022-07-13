import React from 'react'
import { Wrapper,Title,Main,Image,Button } from './RecipeCard.styled';
import { useNavigate } from 'react-router-dom';
import Details from '../../pages/details/Details';

const RecipeCard = ({infos}) => {
  const navigate=useNavigate();
    console.log(infos)
    const {label,image}=infos;
  return (
    <Wrapper  >

        <Main>
            <Title>{label} </Title>
        <Image src={image} />
        <Button onClick={()=> navigate("details",{state:{infos}})} >View More</Button>
        </Main>
 {false&&   <Details data={infos} />}


  
    </Wrapper>
  )
}

export default RecipeCard