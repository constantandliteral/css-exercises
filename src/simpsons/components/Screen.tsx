import styled from 'styled-components/macro';

/* useful colours:
#376faa
*/

// REMEMBER: You can only make changes inside the template string ``
const Screen = styled.div.attrs({
  'data-testid': 'screen',
})`
  align-items: flex-end;
  background: #376faa;
  border: 8px solid black;
  border-radius: 80px;
  display: flex;
  height: 450px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: filter 500ms;
  width: 600px;

  &:hover {
    filter: grayscale(1);
  }
`;

export default Screen;
