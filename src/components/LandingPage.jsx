import React from 'react';
import Logo from './Logo';
import styled from "styled-components";

const FistPage = styled.div`
  background: #78B3FF;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const LandingPage = () => {
  return (
    <FistPage>
      <Logo />
    </FistPage>
  );
};

export default LandingPage;

