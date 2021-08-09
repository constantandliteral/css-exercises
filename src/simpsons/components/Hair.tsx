import React from 'react';
import styled from 'styled-components/macro';

// REMEMBER: You can only make changes inside the template string ``
const HairContainer = styled.div.attrs({ 'data-testid': 'hair' })`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const HairBase = styled.div`
  height: 80px;
  overflow: hidden;
  position: absolute;
  top: 40px;
  width: 160px;
  z-index: 1;

  &:before {
    border-radius: 50%;
    border: 8px solid black;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 160px;
    width: 160px;
  }
`;

// REMEMBER: You can only make changes inside the template string ``
const FirstHair = styled(HairBase)`
  left: 150px;
  transform: rotate(-30deg);
`;

// REMEMBER: You can only make changes inside the template string ``
const SecondHair = styled(HairBase)`
  left: 200px;
  transform: rotate(-20deg);
`;

// REMEMBER: You cannot change anything here
const Hair = () => (
  <HairContainer>
    <FirstHair />
    <SecondHair />
  </HairContainer>
);

export default Hair;
