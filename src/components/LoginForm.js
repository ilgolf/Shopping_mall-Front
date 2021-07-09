import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    padding: 40px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.04);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      padding-left: 10px;
      font-size: 16px;
    }
    button {
      font-size: 14px;
    }
  }

  [type='email'] {
    width: 600px;
    height: 60px;
    display: block;
    margin-bottom: 10px;
  }
  [type='password'] {
    width: 500px;
    height: 60px;
  }
  [type='submit'] {
    width: 100px;
    height: 60px;
    line-height: 1;
    transition: all 0.3s ease-in-out;
    background-color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-left: none;
    &:hover {
      background-color: #f3f1ff;
    }
  }

  .oauth-btns {
    margin-top: 10px;
    > button {
      width: 33.3%;
      height: 50px;
      margin-bottom: 10px;
      position: relative;
      display: inline-flex;
      align-items: center;
      line-height: 1;
      color: #000;
      cursor: pointer;
      background-color: inherit;
      transition: background-color 0.5s ease-in-out, color 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.5);
      &:hover {
        color: #fff;
      }
      &[name='kakao']:hover {
        background: rgb(255, 222, 0);
        color: #2c2c2c;
      }
      &[name='google']:hover {
        background: rgba(226, 65, 54);
        color: #fcfcfc;
      }
      &[name='facebook']:hover {
        background: rgb(52, 80, 141);
      }
      [data-icon] {
        width: 40px;
        height: 40px;
        display: block;
        align-self: flex-left;
      }
      [data-icon-kakao] {
        background-image: url('./images/ico-sprite.png');
        background-position: 0 -450px;
        border-right: none;
      }

      [data-icon-google] {
        background-image: url('./images/ico-sprite.png');
        background-position: 0 -600px;
        border-right: none;
      }

      [data-icon-facebook] {
        background-image: url('./images/ico-sprite.png');
        background-position: 0 -500px;
      }
    }
  }
`;

const LoginForm = () => {
  return (
    <Container>
      <form action="">
        <div>
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
          <div className="oauth-btns">
            <button name="kakao" type="button">
              <span data-icon data-icon-kakao></span>카카오 아이디로 로그인
            </button>
            <button name="google" type="button">
              <span data-icon data-icon-google></span>구글 아이디로 로그인
            </button>
            <button name="facebook" type="button">
              <span data-icon data-icon-facebook></span>페이스북 아이디로 로그인
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default LoginForm;
