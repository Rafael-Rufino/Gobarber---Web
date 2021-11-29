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
