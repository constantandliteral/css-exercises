import styled from 'styled-components/macro';

/* useful colours:
#fbc603 
*/

// REMEMBER: You can only make changes inside the template string ``
const Nose = styled.div.attrs({
  'data-testid': 'nose',
})`
  background-color: #fbc603;
  border-radius: 0 45% 45% 0;
  border: 8px solid black;
  border-left-width: 0;
  bottom: -25px;
  box-sizing: border-box;
  height: 80px;
  left: 320px;
  position: absolute;
  transform: rotate(-5deg);
  width: 180px;
  z-index: 2;
`;

export default Nose;
