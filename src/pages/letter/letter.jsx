import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainWrapper = styled.div`
  background: lightgray;
  width: 80%;
  margin: 0 auto;
  height: 600px;
  border-radius: 10px;
`;

const Main = (props) => {
  return (
    <>
      <MainWrapper></MainWrapper>
    </>
  );
};

export default Main;
