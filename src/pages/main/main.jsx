import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styled from 'styled-components';
import Modal from '../../components/modal/modal';
import { Button } from 'primereact/button';
import KakaoButton from '../../components/modal/KakaoButton';

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background:#A2C4F1;
  padding:100px 0;
`;

const Wrapper = styled.div`
  width: 1286px;
  margin:0 auto;
  display:flex;
`;


const WrapperInner = styled.div`
  background: #fff;
  width: 630px;
  height:730px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  padding: 45px;

  p{
    font-size:18px;
  }
  h3{
    font-size:60px;
    font-weight:bold;
    line-height:0
  }

  .subTitle{
    font-size:22px;
  }

  .writeBtn{
    position:absolute;
    bottom:20px;
    right:20px;
    padding:20px;
    cursor:pointer;
    border-radius:10px;
  }


`;

const Main = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CoLetterImage] = useState('/CoLetter_image_logo_grey.png');
  const [DoLetterImage] = useState('/DoLetter_image_logo.png');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const UpdateClick = () => {
    alert('업데이트 중입니다.');
  };


  return (
    <>
      <style>
        {`
          .coLetter_image{
              width:350px;
              position:relative;
              left:-90px;
          }

          .doLetter_image{
            width:410px;
            margin-left:60px;
          }
        `}
      </style>
      <Header />
      <MainWrapper>
          <Wrapper>
            <WrapperInner>
            <p>너와 나를 연결하는 메시지</p>
            <h3>Co-Letter</h3>
            <p className="subTitle">소중한 사람에게 전하고 싶은 메시지를 남겨보세요.</p>
            <div className="writeBtn" onClick={openModal}>
              <img src={process.env.PUBLIC_URL + '/assets/images/' + CoLetterImage} alt="CoLetter Image" className="coLetter_image"/>
              <span>내 편지함 만들기</span>
              <i className="pi pi-angle-right"></i>
            </div>
            </WrapperInner>

            <WrapperInner>
            <p>모두를 연결하는 메시지</p>
            <h3>Do-Letter</h3>
            <p className="subTitle">당신이 남긴 메시지가 누군가에겐 희망이 됩니다.</p>
            <img src={process.env.PUBLIC_URL + '/assets/images/' + DoLetterImage} alt="DoLetter Image" className="doLetter_image"/>
            <div className="writeBtn" onClick={UpdateClick}>
              <span>희망의 메시지 전하기</span>
              <i className="pi pi-angle-right"></i>
            </div>
            {/*<Button label="희망의 메시지 전하기" className="writeBtn"/>*/}
            </WrapperInner>
        </Wrapper>
      </MainWrapper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>간편하게 로그인하고 <br /> 소중한 편지를 남겨보세요.</h2>
        {/* <button>카카오톡으로 로그인하기</button> */}
        <KakaoButton />
      
      </Modal>

      <Footer />
    </>
  );
};

export default Main;
