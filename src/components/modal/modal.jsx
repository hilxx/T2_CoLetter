import React from 'react';
import styled from 'styled-components';
const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  top: 30%;
  position: relative;
  text-align:center;
  `;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};


export default Modal;






