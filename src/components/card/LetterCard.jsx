import React from 'react';
import styled from 'styled-components';

const LetterCardWrapper = styled.div`
  background: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LetterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LetterContent = styled.p`
  font-size: 14px;
`;

const LetterCard = ({ title, content }) => {
  return (
    <LetterCardWrapper>
      <LetterTitle>{title}</LetterTitle>
      <LetterContent>{content}</LetterContent>
    </LetterCardWrapper>
  );
};

export default LetterCard;