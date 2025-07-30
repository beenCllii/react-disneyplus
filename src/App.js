import Nav from './components/Nav';
import './App.css';
import styled from 'styled-components';
import Banner from './components/Banner';

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding : 0 calc(3.5vw + 5px);
  &:after {
    content: "";
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 1;
  }
`