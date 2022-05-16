import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Loading = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 5px solid white;
  border-top: 5px solid rgb(0, 145, 255);
  animation: ${rotate} 2s linear infinite;
`;
