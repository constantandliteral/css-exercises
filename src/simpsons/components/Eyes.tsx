import React from 'react';
import styled from 'styled-components/macro';

/* useful colours:
#fbc603
*/

// REMEMBER: You can only make changes inside the template string ``
const EyesContainer = styled.div.attrs({ 'data-testid': 'eyes' })`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const EyeBase = styled.div`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const LeftEye = styled(EyeBase).attrs({ 'data-testid': 'left-eye' })`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const RightEye = styled(EyeBase).attrs({ 'data-testid': 'right-eye' })`
  /* work here */
`;

// REMEMBER: You cannot change anything here
const Eyes = () => (
  <EyesContainer>
    <LeftEye />
    <RightEye />
  </EyesContainer>
);

export default Eyes;
