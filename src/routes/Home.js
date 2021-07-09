import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const categories = [
  '케이크',
  '마카롱',
  '과자',
  '초콜릿',
  '빵',
  '사탕',
  '비스킷',
];

const Container = styled.div`
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
  background-image: url('./images/main_banner.webp');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Visual = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;

  & .category-list {
    width: 180px;
    background: white;
    position: absolute;
    right: 40px;
    margin: auto 0;

    & li {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      &:last-child {
        border-bottom: none;
      }
    }
    .categoryBtn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 0, 0.3)
      );
      color: #2c2c2c;
      font-size: 16px;
      text-decoration: none;
      transition: all 0.2s ease-in-out;
    }
    .categoryBtn:hover {
      color: #000;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

const MainSection = styled.main`
  min-width: 1420px;
  margin: 0 auto;
  position: relative;

  & h2 {
    font-size: 30px;
    margin-top: 20px;
    margin-left: 40px;
  }
`;

const DiscoveryImageWrapper = styled.div`
  display: grid;
  border: 1px solid #000;
  min-width: 900px;
  max-width: 1200px;
  height: 1200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-left: 40px;
  padding: 20px;

  img {
    width: 100%;
    height: 100%;
  }
  a {
    position: relative;
    cursor: pointer;
  }
  a::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Home = () => {
  useEffect(() => {
    // image 요청
  }, []);

  return (
    <div>
      <Container>
        <Visual className="container">
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category} className="categoryBtn">
                {category}
              </li>
            ))}
          </ul>
        </Visual>
      </Container>

      <MainSection>
        <h2>오늘의 발견</h2>
        <DiscoveryImageWrapper>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
          <Link to="/categories/cake">
            <img src="./images/cake.jpg" alt="" />
          </Link>
        </DiscoveryImageWrapper>

        <Banner />
      </MainSection>

      {/* <ChatWrapper>
        <ChatBtn></ChatBtn>
        <ChatBox></ChatBox>
      </ChatWrapper> */}
    </div>
  );
};

export default Home;
