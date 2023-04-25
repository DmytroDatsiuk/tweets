import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  border: 0;
  border-radius: 7px;
  color: white;
  background-color: #5cd3a8;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    background-color: #62afc9;
  }
`;
