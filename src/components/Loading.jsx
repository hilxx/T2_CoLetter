import React from 'react';
import styled from 'styled-components';

const LoadingPage = styled.div`
  color: #656565;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 1.25rem;
  line-height: normal;
`;
const Loading = () => {
  return (
    <LoadingPage>
      잠시후 이동합니다..
    </LoadingPage>
  );
};

export default Loading;
