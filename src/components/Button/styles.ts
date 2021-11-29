import styled from 'styled-components';
export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  /* color: #312e38; */
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  transition: background-color 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;
