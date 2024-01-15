import React from 'react';
import styled from 'styled-components';

const SubIntro = styled.div`
  /* width: 42.875rem;
  height: 2.5rem;
  flex-shrink: 0; */
  color: #383838;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 1.19rem;
  line-height: normal;
`;


const SubTitle = () => {
  return (
    <SubIntro>
    세상을 잇는 우리들의 롤링페이퍼
    </SubIntro>
  );
};

export default SubTitle;
