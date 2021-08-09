import React from 'react';
import styled from 'styled-components/macro';

/* useful colours:
#fbc603
*/

// REMEMBER: You can only make changes inside the template string ``
const EarContainer = styled.div.attrs({
  'data-testid': 'ear',
})`
  bottom: -5px;
  height: 60px;
  left: 115px;
  position: absolute;
  width: 60px;
  z-index: 2;

  &:before {
    content: 'M';
    display: block;
    font: lighter 100px Arial, Helvetica, sans-serif;
    left: -20px;
    position: absolute;
    transform: rotate(-10deg);
    top: -100px;
    z-index: 1;
  }
`;

// REMEMBER: You can only make changes inside the template string ``
const EarBase = styled.div`
  overflow: hidden;

  &::after {
    background-color: #fbc603;
    border-radius: 50%;
    border: 8px solid black;
    content: '';
    display: block;
    height: 100%;
    margin-left: 20%;
    width: 100%;
  }
`;

// REMEMBER: You can only make changes inside the template string ``
const OuterEar = styled(EarBase)`
  height: 60px;
  width: 60px;
`;

// REMEMBER: You can only make changes inside the template string ``
const InnerEar = styled(EarBase)`
  height: 30px;
  margin-left: 30px;
  margin-top: -50px;
  transform: rotate(45deg);
  width: 30px;
`;

// REMEMBER: You cannot change anything here
const Ear = () => (
  <EarContainer>
    <OuterEar />
    <InnerEar />
  </EarContainer>
);

export default Ear;
