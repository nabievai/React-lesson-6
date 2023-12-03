import React from 'react';
import styled from 'styled-components';
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import telegram from '../../assets/telegram.svg'
import twitter from '../../assets/twitter.svg'

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`

const Styledli = styled.li`
  margin-right: 20px;
`

const Img = styled.img`
  width: 20px;
  height: 20px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2023 React App.</p>
      <p> 
        <StyledUl>
          <Styledli><a href="#"><Img src={instagram} alt="istagram" /></a></Styledli>
          <Styledli><a href="#"><Img src={facebook} alt="facebook" /></a></Styledli>
          <Styledli><a href="#"><Img src={telegram} alt="telegram" /></a></Styledli>
          <Styledli><a href="#"><Img src={twitter} alt="twitter" /></a></Styledli>
        </StyledUl>
      </p>
    </StyledFooter>
  );
};

export default Footer;
