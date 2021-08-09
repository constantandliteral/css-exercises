import styled from 'styled-components/macro';
import titleScreen from '../images/title-screen.jpg';

const Titles = styled.div.attrs({
  tabIndex: 1,
  'data-testid': 'titles',
})`
  background-image: url(${titleScreen});
  background-size: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 100%;
  transition: transform 3s linear;
  top: 0;
  z-index: 5;

  &:focus {
    right: 0;
    transform: scale(1.5);
  }
`;

export default Titles;
