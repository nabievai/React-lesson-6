import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 400px;
  padding: 40px;
  margin: 20px;
  background-color: ${props => (props.isHighlighted ? '#ffcc00' : '#fff')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: ${props => (props.isHighlighted ? '#fff' : '#333')};
`;

const CardDescription = styled.p`
  color: ${props => (props.isHighlighted ? '#f0f0f0' : '#555')};
`;

const Card = ({ isHighlighted }) => {
  return (
    <CardContainer isHighlighted={isHighlighted}>
      <CardImage src="https://picsum.photos/300/200" alt="Card Image" />
      <CardContent>
        <CardTitle isHighlighted={isHighlighted}>Card Title</CardTitle>
        <CardDescription isHighlighted={isHighlighted}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          venenatis justo ut turpis varius, vel convallis odio consectetur.
        </CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
