import styled from 'styled-components/macro';

/* useful colours:
#2a2f4f;
#613776;
*/

// REMEMBER: You can only make changes inside the template string ``
const Television = styled.div.attrs({
  'data-testid': 'television',
})`
  background: #2a2f4f;
  border: 52px solid #613776;
  border-right-width: 150px;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 666px;
  justify-content: center;
  outline: 8px solid black;
  width: 916px;
`;

export default Television;
