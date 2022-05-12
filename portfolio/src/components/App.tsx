import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import About from './About';

const AppDiv = styled.div`
  background-color: #FFFFFC;
  height: 100vh;
  font-family: Poppins,Helvetica Neue,Arial,Helvetica,sans-serif;
`

function App() {
  return (
    <AppDiv>
      <NavBar />
      <About />
    </AppDiv>
  );
}

export default App;
