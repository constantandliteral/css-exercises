import styled from 'styled-components/macro';

/* useful colours:
#fbc603
#e2ad00 
*/

// REMEMBER: You can only make changes inside the template string ``
const Head = styled.div.attrs({
  'data-testid': 'head',
})`
  background: #fbc603;
  border-radius: 50% 50% 0 0;
  border: 8px solid black;
  box-sizing: border-box;
  box-shadow: 16px 16px #e2ad00 inset;
  height: 420px;
  margin-bottom: -40px;
  position: relative;
  transform: rotate(-10deg);
  width: 360px;

  &:before {
    background: #376faa;
    bottom: -5px;
    content: '';
    height: 50px;
    position: absolute;
    right: -10px;
    width: 50px;
    z-index: 1;
  }
`;

export default Head;
