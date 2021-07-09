import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: 12px;
  align-items: center;
  flex: 1;
`;
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 52px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-size: 16px;
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;
const SearchBar = () => {
  return (
    <Container>
      <Wrapper>
        <Input type="text" placeholder="검색해보세요!" />
        <span className="material-icons searchBtn">search</span>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
