import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Modal from '../../components/modal/modal';
import KakaoButton from '../../components/modal/KakaoButton';

const BodyWrapper = styled.div`
    background: #A2C4F1;
    padding-bottom:100px;
`;

const MailboxWrapper = styled.div`
  width:1280px;
  height:750px;
  margin:100px auto;
  background: #fff;
  border-radius: 15px;
  text-align:center;
  position:relative;
`;

const ColorPicker = styled.div`
  max-width:370px;
  width:100%;
  overflow:hidden;
  margin:100px auto 0;
`;

const PostItImgWrap = styled.div`
  width:370px;
  height:370px;
  margin:50px auto 0;
  position:relative;
`;

const PostItTextLimit= styled.p`
  position:absolute;
  top:20px;
  right:35px;
  font-size:12px;
  color:#666;
  font-weight:400;
`;

const PostItTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding:30px 35px;
  position:absolute;
  top:0;
  left:0;
  background:transparent;
  border:none;
  font-size:14px;
  line-height:1.5;
  overflow:hidden;
  color:#222;

  &:focus{
    border:none;
    outline:none;
  }
`;

const CheckboxWrap = styled.div`
  width:370px;
  height:50px;
  line-height:50px;
  text-align:start;
  text-indent:30px;
  font-size:16px;
  color:#666;
  border-radius:50px;
  background:#D8D8D8;
  margin:25px auto;
`;

const CheckboxInput = styled.input`
    display:none;

    &:checked + label {
      &.red{
        background: #B0B0B0;
        border:1px solid #666;

        &:after{
          background: #666;
          left: calc(100% - 28px);
        }
      }
    }

    & + label {
      background: #ddd;
      border-radius: 20px;
      box-shadow: 1px 1px 3px #aaa;
  
      &:after {
        background: #fff;
        border-radius: 50%;
        box-shadow: 1px 1px 3px #aaa;
      }
    }
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 55px;
  height: 30px;
  position: relative;
  transition: 0.3s;
  margin: 0px 20px;
  box-sizing: border-box;
  background:#ccc;
  border-radius:50px;
  top:9px;
  right:-75px;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    transition: 0.3s;
    cursor: pointer;
    border-radius:50px;
  }
`;

const ConfirmButton = styled.div`
  display:flex;
  justify-content:center;
  gap:10px;
`;

const CancleBtn = styled.div`
  width:100px;
  height:70px;
  line-height:70px;
  border:1px solid #000;
  border-radius:15px;
  cursor:pointer;
`;

const LoginWriteBtn = styled.div`
  width:460px;
  height:70px;
  line-height:70px;
  font-size:24px;
  border:1px solid #000;
  border-radius:15px;
  cursor:pointer;
`;

const MailboxWrite = ({ onConfirm }) => {
  const [selectedColor, setSelectedColor] = useState('#ffcc00');
  const [postItContent, setPostItContent] = useState('');
  const [selectedColorImage, setSelectedColorImage] = useState('/postIt_D2E5F3.png');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [swiper, setSwiper] = useState(null);
  const [reachingEnd, setReachingEnd] = useState(false);
  const [reachingFirst, setReachingFirst] = useState(true);

  const handleSlideChange = () => {
    if (swiper) {
      setReachingFirst(swiper.isBeginning);
      setReachingEnd(swiper.isEnd);
    }
  }

  const handleConfirm = () => {
    if (postItContent.trim() !== '') {
      const newPostIt = {
        color: selectedColor,
        content: postItContent,
      };
      onConfirm(newPostIt);
      setPostItContent('');
    }
  };

  //text limit
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setPostItContent(inputValue);
  };

  const textCount = postItContent.length;
  const maxTextCount = 230;
  const exceeded = textCount > maxTextCount;

  //kakao login
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <style>
        {`
        .mySwiper {
            height: 100%;
        }

        .Colors {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid #757575;
            text-indent: -99999px;
            margin-top:50px;
        }

        .swiper_btn{
          position:absolute;
          top:60px;
          background:#D9D9D9;
          border:none;
          border-radius:50%;
          width:35px;
          height:35px;
          cursor:pointer;

          span{
            font-size:30px;
            text-indent:-5px;
          }
        }

        .swiper_prevBtn{
          left:30%;
          right:auto;
        }

        .swiper_nextBtn{
          right:30%;
          left:auto;

          span{
            text-indent:-2px;
          }
        }

        `}
      </style>
      <BodyWrapper>
        <Header />
        <MailboxWrapper>
          <ColorPicker>
            <button className="swiper_prevBtn swiper_btn" onClick = {() => swiper?.slidePrev()} disabled={reachingFirst}>
              <span className="pi pi-angle-left"></span>
            </button>
            <Swiper 
              slidesPerView={5} 
              spaceBetween={20}
              modules={[Navigation]} 
              className="mySwiper"
              onSwiper={(swiper) => {
                setSwiper(swiper);
                handleSlideChange();
              }}
              onSlideChange={handleSlideChange}
            >
              {/* <SwiperSlide className="Colors" onClick={() => setSelectedColor('#D2E5F3')} style={{ backgroundColor: '#D2E5F3' }}>노랑</SwiperSlide> */}
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#D2E5F3'); setSelectedColorImage('/postIt_D2E5F3.png'); }} style={{ backgroundColor: '#D2E5F3' }}>노랑</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#D9E9F8'); setSelectedColorImage('/postIt_D9E9F8.png'); }} style={{ backgroundColor: '#D9E9F8' }}>초록</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#E1FBE1'); setSelectedColorImage('/postIt_E1FBE1.png'); }} style={{ backgroundColor: '#E1FBE1' }}>빨강</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#E8EEF8'); setSelectedColorImage('/postIt_E8EEF8.png'); }} style={{ backgroundColor: '#E8EEF8' }}>노랑</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#F4F1F3'); setSelectedColorImage('/postIt_F4F1F3.png'); }} style={{ backgroundColor: '#F4F1F3' }}>초록</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#F4F3D5'); setSelectedColorImage('/postIt_F4F3D5.png'); }} style={{ backgroundColor: '#F4F3D5' }}>빨강</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#F5FBD9'); setSelectedColorImage('/postIt_F5FBD9.png'); }} style={{ backgroundColor: '#F5FBD9' }}>노랑</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#F8EAE5'); setSelectedColorImage('/postIt_F8EAE5.png'); }} style={{ backgroundColor: '#F8EAE5' }}>초록</SwiperSlide>
              <SwiperSlide className="Colors" onClick={() => { setSelectedColor('#FFD9D1'); setSelectedColorImage('/postIt_FFD9D1.png'); }} style={{ backgroundColor: '#FFD9D1' }}>빨강</SwiperSlide>
              {/* 필요에 따라 추가한 색상 옵션 */}
            </Swiper>
            <button className="swiper_nextBtn swiper_btn" onClick = {() => swiper?.slideNext()} disabled={reachingEnd}>
              <span className="pi pi-angle-right"></span>
            </button>
          </ColorPicker>
          <PostItImgWrap>
            <img src={process.env.PUBLIC_URL + '/assets/images/' + selectedColorImage} alt="Selected Color" />
            <PostItTextLimit exceeded={exceeded}>{`${textCount}/${maxTextCount}`}</PostItTextLimit>
            <PostItTextarea
              placeholder="포스트잇을 작성하세요..."
              value={postItContent}
              onChange={handleInputChange}
              maxLength={maxTextCount}
            />
            {/* <ConfirmButton onClick={handleConfirm}>로그인하고 편지 쓰기</ConfirmButton> */}
          </PostItImgWrap>
          <CheckboxWrap><span>편지함 주인에게만 보이기</span>
            <CheckboxInput type="checkbox" id="slideCheckbox" />
            <CheckboxLabel htmlFor="slideCheckbox" className="red"></CheckboxLabel>
          </CheckboxWrap>
          <ConfirmButton>
            <CancleBtn><i className="pi pi-times"></i></CancleBtn>
            <LoginWriteBtn onClick={openModal}>
              <span>편지 보내기</span>
            </LoginWriteBtn>
          </ConfirmButton>
        </MailboxWrapper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>간편하게 로그인하고 <br /> 소중한 편지를 남겨보세요.</h2>
        {/* <button>카카오톡으로 로그인하기</button> */}
        <KakaoButton />
      
      </Modal>
      </BodyWrapper>
    </div>
  );
};

export default MailboxWrite;
