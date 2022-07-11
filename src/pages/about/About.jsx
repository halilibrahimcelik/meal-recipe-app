import React from 'react'
import { Article, Img, Section, Title } from './About.styled';
import Image from "../../assets/coding.svg"
const About = () => {
  return (
    <Section>
        <Img data-aos="zoom-in" src={Image}  alt="" />
        <Title data-aos="zoom-out-right">Hi There!</Title>
      <Article>

        <p data-aos="fade-right">
          I'm a  software developer mainly focuses on the front-end.
          My strongest skills are JavaScript,React and CSS.
        </p >
          <p data-aos="fade-left">I am currently learning Node.js</p>
          <p data-aos="fade-left">You can check my latest projects via visiting my Github page</p>
          

      <div  data-aos="flip-left"
    //  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><strong>Send email</strong>: <a href = "mailto:hibrahim.celik@yahoo.com">hibrahim.celik@yahoo.com</a></div>
      </Article>
      


    </Section>
  )
}

export default About