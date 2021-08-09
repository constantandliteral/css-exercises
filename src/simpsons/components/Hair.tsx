import React from 'react';
import styled from 'styled-components/macro';

// REMEMBER: You can only make changes inside the template string ``
const HairContainer = styled.div.attrs({ 'data-testid': 'hair' })`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const HairBase = styled.div`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const FirstHair = styled(HairBase)`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const SecondHair = styled(HairBase)`
  /* work here */
`;

// REMEMBER: You cannot change anything here
const Hair = () => (
  <HairContainer>
    <FirstHair />
    <SecondHair />
  </HairContainer>
);

export default Hair;
