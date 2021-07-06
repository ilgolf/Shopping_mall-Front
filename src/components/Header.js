import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 120px;
  margin: 0 auto;
  padding: 0 10px;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const Menus = styled.ul`
  display: flex;
  & li {
    margin: 0 10px;
  }
  & li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding: 10px;

    & span:first-child {
      font-size: 40px;
      margin-bottom: 4px;
      color: #272727;
    }
    & span:last-child {
      font-size: 14px;
      color: #272727;
    }
  }
`;
// const Icon = styled.span``;

const Header = () => {
  return (
    <header>
      <Container>
        <Logo src="https://img.icons8.com/ios/452/picsart.png" />
        <SearchBar />
        <Menus>
          <li>
            <Link to="/login">
              <span className="material-icons">person</span>
              <span>마이스낵</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="material-icons">shopping_cart</span>
              <span>장바구니</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span class="material-icons">support_agent</span>
              <span>고객센터</span>
            </Link>
          </li>
        </Menus>
      </Container>
    </header>
  );
};

export default Header;
