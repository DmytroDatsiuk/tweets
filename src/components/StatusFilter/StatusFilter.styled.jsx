import styled, { keyframes } from 'styled-components';

const translateDown = keyframes`
  from {
    transform: translateY(-100%);
  z-index: 1000;
  }

  to {
    transform: translateY(0);
  z-index: 1000;
  }
`;

const translateUp = keyframes`
  from {

transform: translateY(0);
  z-index: 1000;
  }

  to {
     transform: translateY(-100%);

  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 190px;
  padding: 10px;
  background-color: #5cd3a8;
  transform: translateY(-100%);
  animation: ${translateUp} 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const WrapperDown = styled(Wrapper)`
  width: 190px;
  padding: 10px;
  background-color: #5cd3a8;
  transform: translateY(0);
  z-index: 1000;
  animation: ${translateDown} 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  list-style-type: none;
`;

export const Item = styled.li`
  width: 140px;
`;
