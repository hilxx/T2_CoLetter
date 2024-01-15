import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styled from 'styled-components';
import { InputText } from 'primereact/inputtext';

const BodyWrapper = styled.div`
  background: #A2C4F1;
`;

const MainWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  background: #fff;
`;

const TopWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .InputText {
    width: 1120px;
  }
`;

const IconBox = styled.div`
  i {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 1280px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
`;

const Mailbox = (props) => {
  const [urlToShare, setUrlToShare] = useState('https://sdfsdf.com'); 
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const maxCharacterLimit = 15;

  const ShareBtn = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Share this link',
        url: urlToShare,
      })
        .then(() => console.log('링크 공유 성공..'))
        .catch((error) => console.error('링크 공유 에러:', error));
    } else {
      console.error('웹 공유 API는 이 브라우저에서 지원되지 않음.');
    }
  };

  const handleEditClick = () => {
    if (editMode) {
      console.log('Edited Title:', editedTitle);
    }
    setEditMode(!editMode);
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value.slice(0, maxCharacterLimit);
    setEditedTitle(inputText);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      handleEditClick();
    }
  };

  return (
    <>
      <BodyWrapper>
        <Header />
        <TopWrapper>
          {editMode ? (
            <InputText
              type="text"
              className="InputText"
              placeholder="제목을 이곳에 입력하세요."
              maxLength={maxCharacterLimit}
              onChange={handleInputChange}
              onKeyPress={handleEnterPress}
              value={editedTitle}
            />
          ) : (
            <div>
              <div className="InputText" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {editedTitle || '제목이 없습니다.'}
              </div>
            </div>
          )}
          <IconBox>
            <i className={editMode ? 'pi pi-check' : 'pi pi-pencil'} onClick={handleEditClick}></i>
            <i className='pi pi-share-alt' onClick={ShareBtn}></i>
          </IconBox>
        </TopWrapper>
        <MainWrapper>
          <Main>
            {/*  여기에 작성된 편지지들이 들어가요. */ }
          </Main>
        </MainWrapper>
        <Footer />
      </BodyWrapper>
    </>
  );
};

export default Mailbox;
