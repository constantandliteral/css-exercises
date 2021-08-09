import React from 'react';
import styled from 'styled-components/macro';

/* useful colours:
#fbc603
*/

// REMEMBER: You can only make changes inside the template string ``
const EyesContainer = styled.div.attrs({ 'data-testid': 'eyes' })`
  bottom: 4px;
  display: flex;
  position: absolute;
  right: 80px;
`;

// REMEMBER: You can only make changes inside the template string ``
const EyeBase = styled.div`
  @keyframes moveEyeball {
    from {
      transform: translateX(0);
    }
    50% {
      transform: translateX(50px);
    }
    to {
      transform: translateX(0);
    }
  }

  background: white;
  border-radius: 50%;
  border: 8px solid black;
  height: 160px;
  overflow: hidden;
  position: relative;
  width: 160px;

  &:before {
    animation: moveEyeball 2s infinite linear;
    background: black;
    border-radius: 50%;
    content: '';
    display: block;
    margin-top: 70px;
    height: 20px;
    position: relative;
    width: 20px;
  }

  &:after {
    background: #fbc603;
    border-bottom: 8px solid black;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: -100%;
    transition: top 500ms;
    width: 100%;
  }

  &:hover {
    &:after {
      top: -50%;
    }
  }
`;

// REMEMBER: You can only make changes inside the template string ``
const LeftEye = styled(EyeBase).attrs({ 'data-testid': 'left-eye' })`
  z-index: 3;

  &:before {
    margin-left: 35px;
  }
`;

// REMEMBER: You can only make changes inside the template string ``
const RightEye = styled(EyeBase).attrs({ 'data-testid': 'right-eye' })`
  margin-left: -42px;
  z-index: 1;

  &:before {
    margin-left: 60px;
  }
`;

// REMEMBER: You cannot change anything here
const Eyes = () => (
  <EyesContainer>
    <LeftEye />
    <RightEye />
  </EyesContainer>
);

export default Eyes;
