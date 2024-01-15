import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';
import Loading from './Loading';
import styled from 'styled-components';

const LogoFrame = styled.div`
  margin-top: 6.62rem;
  text-align: center;
`;

const LogoImage = styled.img`
  width: 17.87519rem;
  height: 17.87519rem;
  margin-bottom: -1.25rem;
`;

const Logo = () => {
  return (
    <LogoFrame>
      <LogoImage src="/Logo/logo.svg" alt="" />
      <Title />
      <SubTitle />
      <Loading />
    </LogoFrame>
  );
};

export default Logo;
