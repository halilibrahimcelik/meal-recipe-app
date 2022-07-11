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
          

      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><strong>Send email</strong>: <a href = "mailto:hibrahim.celik@yahoo.com">hibrahim.celik@yahoo.com</a></div>
      </Article>
      


    </Section>
  )
}

export default About