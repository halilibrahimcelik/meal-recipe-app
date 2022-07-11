import React from 'react'
import { Wrapper,Title,Main,Image,Button } from './RecipeCard.styled'

const RecipeCard = ({infos}) => {
    console.log(infos)
    const {label,image}=infos;
  return (
    <Wrapper>

        <Main>
            <Title>{label} </Title>
        <Image src={image} />
        <Button>View More</Button>
        </Main>


    </Wrapper>
  )
}

export default RecipeCard