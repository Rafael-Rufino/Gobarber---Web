import styled, { keyframes } from 'styled-components';
import SigInBackground from '../../assets/sign-in-background.png';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
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
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SigInBackground}) no-repeat center;
  background-size: cover;
`;
