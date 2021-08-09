import styled from 'styled-components/macro';
import burger from '../images/burger.svg';
import donut from '../images/donut.svg';

/* useful colours:
#dd7e8d
*/

// REMEMBER: You can only make changes inside the template string ``
const Wall = styled.div.attrs({
  'data-testid': 'wall',
})`
  align-items: center;
  background-color: #dd7e8d;
  background-image: url(${burger}), url(${donut});
  background-position: 0 30px, 0 calc(100% - 30px);
  background-repeat: repeat-x;
  background-size: 120px 120px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default Wall;
