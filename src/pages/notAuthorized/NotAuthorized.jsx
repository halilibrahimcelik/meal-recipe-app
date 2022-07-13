import React from 'react';
import { LoginButton } from '../login/Login.styled';

import {Section,Title} from "./NotAuthroized.styled"

const NotAuthorized = () => {
  return (
    <Section>
<Title  >Enterence Restricted !!</Title  >
<p>If You want to display website, You have to login first</p>
<LoginButton  bg="#E93E44"> Go Back To Login </LoginButton>
    </Section>
  )
}

export default NotAuthorized