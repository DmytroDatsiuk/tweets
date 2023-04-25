import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 50px;
  border: 0;
  border-radius: 7px;
  color: white;
  background-color: #5cd3a8;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    background-color: #62afc9;
  }
`;
