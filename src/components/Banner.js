import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Nav = styled.ul`
  width: 120px;
  height: 900px;
  position: absolute;
  right: 40px;
  top: 62px;
  margin-left: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin-bottom: 20px;

    &:last-child {
      border-bottom: none;
    }

    a {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(rgba(0, 255, 255, 0.3), rgba(0, 0, 255, 0.3));
    }
  }
`;

const Banner = () => {
  return (
    <Nav>
      <li>
        <Link to="/">1</Link>
      </li>
      <li>
        <Link to="/">2</Link>
      </li>
      <li>
        <Link to="/">3</Link>
      </li>
      <li>
        <Link to="/">4</Link>
      </li>
      <li>
        <Link to="/">5</Link>
      </li>
      <li>
        <Link to="/">6</Link>
      </li>
    </Nav>
  );
};

export default Banner;
