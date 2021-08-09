import React from 'react';
import styled from 'styled-components/macro';

/* useful colours:
#fbc603
*/

// REMEMBER: You can only make changes inside the template string ``
const EarContainer = styled.div.attrs({
  'data-testid': 'ear',
})`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const EarBase = styled.div`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const OuterEar = styled(EarBase)`
  /* work here */
`;

// REMEMBER: You can only make changes inside the template string ``
const InnerEar = styled(EarBase)`
  /* work here */
`;

// REMEMBER: You cannot change anything here
const Ear = () => (
  <EarContainer>
    <OuterEar />
    <InnerEar />
  </EarContainer>
);

export default Ear;
