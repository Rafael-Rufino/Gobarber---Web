import styled from 'styled-components';
import SigInBackground from '../../assets/sign-in-background.png';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;

  /* img {
    width: 200px;
    height: 200px;
  } */
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      color: #f4ede8;
      width: 100%;
      &::placeholder {
        color: #666360;
      }
      & + input {
        margin-top: 8px;
      }
    }
    button {
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
    }

    a {
      text-decoration: none;
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;
      &:hover {
        color: #f4ede8;
        filter: brightness(0.9);
      }
    }
  }

  > a {
    text-decoration: none;
    display: block;
    color: #ff9000;
    margin-top: 12px;
    margin-bottom: 12px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SigInBackground}) no-repeat center;
  background-size: cover;
`;
