import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 3rem;
  height: 3rem;
  marginright: 9.24rem
`;

const HeaderWrapper = styled.header`
  background-color: #rgba(255, 255, 255, 0.50);
  color: black;
  padding: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  flex: 1;
  color: #000;
  font-family: Aldrich;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 47px;
  right: -100%;
  width: 200px;
  height: 100%;
  background-color: #555;
  padding: 10px;
  transition: right 0.3s ease-in-out;

  &.open {
    right: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const BurgerMenu = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const ClickAlert = () => {
    alert('추후 노션 연결~');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
      <StyledLink to="/">
        <LogoImage src="/Logo/logo.svg" alt="" />
        <Logo>co-letter</Logo>
      </StyledLink>
        <MenuContainer className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={ClickAlert}>코레터란?</li>
            <li>코레터란?</li>
            <li>코레터란?</li>
          </ul>
        </MenuContainer>
        <BurgerMenu onClick={handleMenuToggle}>☰</BurgerMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
